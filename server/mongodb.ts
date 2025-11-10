import { MongoClient, Db, Collection } from 'mongodb';
import { type BlogPost, type InsertBlogPost, type Country, type AdminUser, type AdminLog } from '@shared/schema';

let client: MongoClient;
let database: Db;
let connectionFailed = false;

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB_NAME || 'wvp_consulting';

export async function connectToMongoDB(): Promise<Db | null> {
  if (connectionFailed) {
    return null;
  }
  
  if (database) {
    return database;
  }

  if (!MONGODB_URI) {
    console.log('No MONGODB_URI environment variable set. Skipping MongoDB connection.');
    connectionFailed = true;
    return null;
  }

  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    database = client.db(DB_NAME);
    console.log('Connected to MongoDB successfully');
    
    // Create indexes for better performance
    await ensureIndexes();
    
    return database;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    console.log('Falling back to in-memory storage for blog posts');
    connectionFailed = true;
    return null;
  }
}

async function ensureIndexes() {
  try {
    const db = await getDatabase();
    if (!db) return;
    
    // Blog posts indexes
    await db.collection('blogPosts').createIndex({ slug: 1 }, { unique: true });
    await db.collection('blogPosts').createIndex({ countries: 1 });
    await db.collection('blogPosts').createIndex({ featured: 1 });
    
    // Admin users indexes
    await db.collection('adminUsers').createIndex({ username: 1 }, { unique: true });
    
    // Admin logs indexes
    await db.collection('adminLogs').createIndex({ timestamp: -1 });
    await db.collection('adminLogs').createIndex({ adminUserId: 1 });
    await db.collection('adminLogs').createIndex({ action: 1 });
  } catch (error) {
    console.error('Failed to create indexes:', error);
  }
}

export async function getDatabase(): Promise<Db | null> {
  if (!database) {
    return await connectToMongoDB();
  }
  return database;
}

export async function getBlogPostsCollection(): Promise<Collection<BlogPost> | null> {
  const db = await getDatabase();
  if (!db) {
    return null;
  }
  return db.collection<BlogPost>('blogPosts');
}

export async function getAdminUsersCollection(): Promise<Collection<AdminUser> | null> {
  const db = await getDatabase();
  if (!db) {
    return null;
  }
  return db.collection<AdminUser>('adminUsers');
}

export async function getAdminLogsCollection(): Promise<Collection<AdminLog> | null> {
  const db = await getDatabase();
  if (!db) {
    return null;
  }
  return db.collection<AdminLog>('adminLogs');
}

export async function closeConnection(): Promise<void> {
  if (client) {
    await client.close();
  }
}

// MongoDB document interface for blog posts
export interface BlogPostDocument extends Omit<BlogPost, 'id'> {
  _id?: string;
}