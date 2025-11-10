import { randomUUID } from 'crypto';
import bcrypt from 'bcryptjs';
import { getAdminUsersCollection, getAdminLogsCollection } from './mongodb';
import { type AdminUser, type InsertAdminUser, type AdminLog, type InsertAdminLog, type AdminAction } from '@shared/schema';

export class MongoDBAdminStorage {
  private fallbackAdmins: Map<string, AdminUser> = new Map();
  private fallbackLogs: Map<string, AdminLog> = new Map();
  private usingFallback = false;

  // Admin user methods
  async getAdminUserByUsername(username: string): Promise<AdminUser | undefined> {
    const collection = await getAdminUsersCollection();
    if (!collection) {
      this.usingFallback = true;
      return Array.from(this.fallbackAdmins.values()).find(admin => admin.username === username);
    }
    const admin = await collection.findOne({ username });
    if (!admin) return undefined;
    return {
      ...admin,
      id: admin._id?.toString() || admin.id,
      createdAt: admin.createdAt,
      lastLoginAt: admin.lastLoginAt,
    };
  }

  async createAdminUser(data: { username: string; password: string; email?: string }): Promise<AdminUser> {
    const passwordHash = await bcrypt.hash(data.password, 10);
    const admin: AdminUser = {
      id: randomUUID(),
      username: data.username,
      passwordHash,
      email: data.email,
      createdAt: new Date(),
    };

    const collection = await getAdminUsersCollection();
    if (!collection) {
      this.usingFallback = true;
      this.fallbackAdmins.set(admin.id, admin);
      return admin;
    }

    const { id, ...adminData } = admin;
    await collection.insertOne({ ...adminData, _id: id } as any);
    return admin;
  }

  async updateAdminLastLogin(username: string): Promise<void> {
    const collection = await getAdminUsersCollection();
    if (!collection) {
      this.usingFallback = true;
      const admin = Array.from(this.fallbackAdmins.values()).find(a => a.username === username);
      if (admin) {
        admin.lastLoginAt = new Date();
      }
      return;
    }

    await collection.updateOne(
      { username },
      { $set: { lastLoginAt: new Date() } }
    );
  }

  async verifyPassword(username: string, password: string): Promise<boolean> {
    const admin = await this.getAdminUserByUsername(username);
    if (!admin) return false;
    return await bcrypt.compare(password, admin.passwordHash);
  }

  // Admin log methods
  async createAdminLog(insertLog: InsertAdminLog): Promise<AdminLog> {
    const log: AdminLog = {
      id: randomUUID(),
      ...insertLog,
      timestamp: new Date(),
    };

    const collection = await getAdminLogsCollection();
    if (!collection) {
      this.usingFallback = true;
      this.fallbackLogs.set(log.id, log);
      return log;
    }

    const { id, ...logData } = log;
    await collection.insertOne({ ...logData, _id: id } as any);
    return log;
  }

  async getAdminLogs(limit: number = 100, skip: number = 0): Promise<AdminLog[]> {
    const collection = await getAdminLogsCollection();
    if (!collection) {
      this.usingFallback = true;
      return Array.from(this.fallbackLogs.values())
        .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
        .slice(skip, skip + limit);
    }

    const logs = await collection
      .find({})
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return logs.map(log => ({
      ...log,
      id: log._id?.toString() || log.id,
      timestamp: log.timestamp,
    }));
  }

  async getAdminLogsByUser(adminUserId: string, limit: number = 50): Promise<AdminLog[]> {
    const collection = await getAdminLogsCollection();
    if (!collection) {
      this.usingFallback = true;
      return Array.from(this.fallbackLogs.values())
        .filter(log => log.adminUserId === adminUserId)
        .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
        .slice(0, limit);
    }

    const logs = await collection
      .find({ adminUserId })
      .sort({ timestamp: -1 })
      .limit(limit)
      .toArray();

    return logs.map(log => ({
      ...log,
      id: log._id?.toString() || log.id,
      timestamp: log.timestamp,
    }));
  }

  async getAdminLogsByAction(action: AdminAction, limit: number = 50): Promise<AdminLog[]> {
    const collection = await getAdminLogsCollection();
    if (!collection) {
      this.usingFallback = true;
      return Array.from(this.fallbackLogs.values())
        .filter(log => log.action === action)
        .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
        .slice(0, limit);
    }

    const logs = await collection
      .find({ action })
      .sort({ timestamp: -1 })
      .limit(limit)
      .toArray();

    return logs.map(log => ({
      ...log,
      id: log._id?.toString() || log.id,
      timestamp: log.timestamp,
    }));
  }

  // Seed default admin user
  async seedDefaultAdmin(): Promise<void> {
    const existingAdmin = await this.getAdminUserByUsername('admin');
    if (existingAdmin) {
      console.log('Default admin user already exists');
      return;
    }

    try {
      await this.createAdminUser({
        username: 'admin',
        password: 'admin123',  // Default password - should be changed immediately!
        email: 'admin@wvpplus.com',
      });
      console.log('✅ Default admin user created (username: admin, password: admin123)');
      console.log('⚠️  IMPORTANT: Change the default password immediately!');
    } catch (error) {
      console.error('Failed to create default admin user:', error);
    }
  }
}
