import dotenv from 'dotenv';
dotenv.config();
import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
import { randomUUID } from 'crypto';
import bcrypt from 'bcryptjs';
import { type BlogPost, type InsertBlogPost, type Country, type AdminUser, type InsertAdminUser, type AdminLog, type InsertAdminLog, type AdminAction } from '@shared/schema';
import * as fs from 'fs';
import * as path from 'path';

// MongoDB Connection
let client: MongoClient;
let database: Db;
let connectionFailed = false;

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB_NAME || 'wvp_consulting';

async function connectToMongoDB(): Promise<Db | null> {
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
    console.log(`✅ Connected to MongoDB: ${DB_NAME}`);
    
    // Create indexes for better performance
    await ensureIndexes();
    
    return database;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    console.log('Falling back to in-memory storage');
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

async function getDatabase(): Promise<Db | null> {
  if (!database) {
    return await connectToMongoDB();
  }
  return database;
}

async function getBlogPostsCollection(): Promise<Collection<BlogPost> | null> {
  const db = await getDatabase();
  if (!db) return null;
  return db.collection<BlogPost>('blogPosts');
}

async function getAdminUsersCollection(): Promise<Collection<AdminUser> | null> {
  const db = await getDatabase();
  if (!db) return null;
  return db.collection<AdminUser>('adminUsers');
}

async function getAdminLogsCollection(): Promise<Collection<AdminLog> | null> {
  const db = await getDatabase();
  if (!db) return null;
  return db.collection<AdminLog>('adminLogs');
}

export async function closeConnection(): Promise<void> {
  if (client) {
    await client.close();
  }
}

// ============================================
// BLOG POSTS STORAGE
// ============================================
export class MongoDBStorage {
  private fallbackPosts: Map<string, BlogPost> = new Map();
  private usingFallback = false;

  async getBlogPosts(): Promise<BlogPost[]> {
    const collection = await getBlogPostsCollection();
    if (!collection) {
      this.usingFallback = true;
      return Array.from(this.fallbackPosts.values())
        .filter(post => post.published)
        .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
    }
    const posts = await collection.find({ published: true }).sort({ createdAt: -1 }).toArray();
    return posts.map(this.mapMongoDocumentToBlogPost);
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    const collection = await getBlogPostsCollection();
    if (!collection) {
      this.usingFallback = true;
      return Array.from(this.fallbackPosts.values())
        .filter(post => post.published && post.featured)
        .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
    }
    const posts = await collection.find({ 
      published: true, 
      featured: true 
    }).sort({ createdAt: -1 }).toArray();
    return posts.map(this.mapMongoDocumentToBlogPost);
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const collection = await getBlogPostsCollection();
    if (!collection) {
      this.usingFallback = true;
      return this.fallbackPosts.get(slug);
    }
    const post = await collection.findOne({ slug });
    return post ? this.mapMongoDocumentToBlogPost(post) : undefined;
  }

  async getBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    const collection = await getBlogPostsCollection();
    if (!collection) {
      this.usingFallback = true;
      return Array.from(this.fallbackPosts.values())
        .filter(post => post.published && post.countries.includes(country))
        .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
    }
    const posts = await collection.find({ 
      published: true,
      countries: country
    }).sort({ createdAt: -1 }).toArray();
    return posts.map(this.mapMongoDocumentToBlogPost);
  }

  async getFeaturedBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    const collection = await getBlogPostsCollection();
    if (!collection) {
      this.usingFallback = true;
      return Array.from(this.fallbackPosts.values())
        .filter(post => post.published && post.featured && post.countries.includes(country))
        .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
    }
    const posts = await collection.find({ 
      published: true,
      featured: true,
      countries: country
    }).sort({ createdAt: -1 }).toArray();
    return posts.map(this.mapMongoDocumentToBlogPost);
  }

  async getBlogPostBySlugAndCountry(slug: string, country: Country): Promise<BlogPost | undefined> {
    const collection = await getBlogPostsCollection();
    if (!collection) {
      this.usingFallback = true;
      const post = this.fallbackPosts.get(slug);
      if (!post || !post.published || !post.countries.includes(country)) {
        return undefined;
      }
      return post;
    }
    const post = await collection.findOne({ 
      slug,
      published: true,
      countries: country
    });
    return post ? this.mapMongoDocumentToBlogPost(post) : undefined;
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const collection = await getBlogPostsCollection();
    const now = new Date();
    const blogPost = {
      ...insertPost,
      id: randomUUID(),
      tags: insertPost.tags || [],
      featured: insertPost.featured || false,
      published: insertPost.published !== undefined ? insertPost.published : true,
      createdAt: now,
      updatedAt: now
    };

    if (!collection) {
      this.usingFallback = true;
      this.fallbackPosts.set(blogPost.slug, blogPost);
      return blogPost;
    }

    await collection.insertOne(blogPost as any);
    return blogPost;
  }

  async updateBlogPost(slug: string, insertPost: InsertBlogPost): Promise<BlogPost | undefined> {
    const collection = await getBlogPostsCollection();
    
    if (!collection) {
      this.usingFallback = true;
      const existingPost = this.fallbackPosts.get(slug);
      if (!existingPost) {
        return undefined;
      }

      const updatedPost: BlogPost = {
        ...existingPost,
        ...insertPost,
        tags: insertPost.tags || [],
        featured: insertPost.featured || false,
        published: insertPost.published !== undefined ? insertPost.published : true,
        updatedAt: new Date()
      };

      if (insertPost.slug !== slug) {
        this.fallbackPosts.delete(slug);
      }
      this.fallbackPosts.set(insertPost.slug, updatedPost);
      return updatedPost;
    }

    const existingPost = await collection.findOne({ slug });
    
    if (!existingPost) {
      return undefined;
    }

    const updatedPost = {
      ...existingPost,
      ...insertPost,
      tags: insertPost.tags || [],
      featured: insertPost.featured || false,
      published: insertPost.published !== undefined ? insertPost.published : true,
      updatedAt: new Date()
    };

    if (insertPost.slug !== slug) {
      await collection.deleteOne({ slug });
      await collection.insertOne(updatedPost as any);
    } else {
      await collection.replaceOne({ slug }, updatedPost);
    }

    return this.mapMongoDocumentToBlogPost(updatedPost as any);
  }

  async deleteBlogPost(slug: string): Promise<boolean> {
    const collection = await getBlogPostsCollection();
    if (!collection) {
      this.usingFallback = true;
      return this.fallbackPosts.delete(slug);
    }
    const result = await collection.deleteOne({ slug });
    return result.deletedCount === 1;
  }

  private mapMongoDocumentToBlogPost(doc: any): BlogPost {
    return {
      id: doc.id,
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt,
      content: doc.content,
      imageUrl: doc.imageUrl,
      category: doc.category,
      tags: doc.tags || [],
      countries: doc.countries,
      featured: doc.featured || false,
      published: doc.published !== undefined ? doc.published : true,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt
    };
  }

  async seedData(): Promise<void> {
    const collection = await getBlogPostsCollection();
    if (!collection) {
      this.usingFallback = true;
      this.seedFallbackData();
      return;
    }
    const count = await collection.countDocuments();
    
    if (count === 0) {
      const blogPostsData = this.getSeedData();
      await collection.insertMany(blogPostsData as any);
      console.log('Seeded blog posts to MongoDB');
    }
  }

  private seedFallbackData(): void {
    if (this.fallbackPosts.size > 0) {
      return;
    }

    const blogPostsData = this.getSeedData();
    blogPostsData.forEach(post => {
      this.fallbackPosts.set(post.slug, post);
    });

    console.log('Seeded blog posts to fallback storage (MongoDB not available)');
  }

  private getSeedData() {
    // Try to load from JSON override to keep fallback consistent with in-memory mode
    try {
      const overridePath = process.env.IN_MEMORY_BLOG_FILE
        ? (path.isAbsolute(process.env.IN_MEMORY_BLOG_FILE)
            ? process.env.IN_MEMORY_BLOG_FILE
            : path.join(process.cwd(), process.env.IN_MEMORY_BLOG_FILE))
        : path.join(process.cwd(), 'attached_assets', 'in-memory-blogs.json');

      if (fs.existsSync(overridePath)) {
        const raw = fs.readFileSync(overridePath, 'utf-8');
        const list = JSON.parse(raw);
        if (Array.isArray(list) && list.length > 0) {
          const allCountries: Country[] = ['rs', 'mk', 'me', 'ba'];
          const safe = (v: any, fallback: any) => (v === undefined || v === null ? fallback : v);
          const posts: BlogPost[] = [];
          for (const item of list) {
            if (!item || typeof item !== 'object') continue;
            const title = String(safe(item.title, 'Untitled'));
            const slug = String(
              safe(
                item.slug,
                title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '') || `post-${randomUUID()}`
              )
            );
            const dateStr = String(safe(item.date, new Date().toISOString().slice(0, 10)));
            const created = new Date(dateStr);
            const imageUrl = String(
              safe(
                item.imageUrl,
                'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&auto=format&fit=crop&q=60'
              )
            );
            const category = String(safe(item.category, 'General'));
            const excerpt = String(
              safe(
                item.excerpt,
                `Published on ${created.toLocaleDateString('en-GB')}`
              )
            );
            const content = String(
              safe(
                item.content,
                item.url
                  ? `Open related link: ${item.url}`
                  : title
              )
            );
            const tags = Array.isArray(item.tags) ? item.tags.map((t: any) => String(t)) : [];
            const countries = Array.isArray(item.countries) && item.countries.length
              ? (item.countries as Country[])
              : allCountries;
            const featured = Boolean(safe(item.featured, true));
            const published = Boolean(safe(item.published, true));

            posts.push({
              id: randomUUID(),
              title,
              slug,
              excerpt,
              content,
              imageUrl,
              category,
              tags,
              countries,
              featured,
              published,
              createdAt: created,
              updatedAt: created,
            });
          }
          if (posts.length > 0) {
            return posts;
          }
        }
      }
    } catch (e) {
      // Ignore and fall back to built-in defaults
    }

    return [
      {
        id: randomUUID(),
        title: "IPARD 2025: New Funding Opportunities for Agricultural Development",
        slug: "ipard-2025-new-funding-opportunities",
        excerpt: "Discover the latest IPARD funding rounds and how your agricultural business can benefit from increased support for modernization and rural development.",
        content: `The IPARD (Instrument for Pre-Accession Assistance for Rural Development) program continues to be a cornerstone of agricultural development in Serbia. For 2025, the program introduces several new opportunities for farmers and agricultural businesses.

Key areas of focus include modernization of farm equipment, improvement of processing facilities, and development of rural infrastructure. The funding amounts have increased significantly compared to previous years.

Eligible applicants can receive up to 65% co-financing for their projects, with maximum grant amounts reaching €1 million for certain measures. The application process has been streamlined to make it more accessible to small and medium-sized farms.

Contact our team to learn more about eligibility requirements and how to prepare a successful application.`,
        imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "IPARD",
        tags: ["funding", "agriculture", "rural development"],
        countries: ["rs", "mk", "me", "ba"],
        featured: true,
        published: true,
        createdAt: new Date("2025-01-15"),
        updatedAt: new Date("2025-01-15"),
      },
      {
        id: randomUUID(),
        title: "Rural Tourism Trends for 2025: Sustainable Growth Strategies",
        slug: "rural-tourism-trends-2025",
        excerpt: "Explore emerging trends in rural tourism and learn how to position your business for success in the growing eco-tourism market.",
        content: `Rural tourism is experiencing unprecedented growth as travelers seek authentic, sustainable experiences away from crowded cities. The 2025 trends show a clear preference for eco-friendly accommodations.

Agritourism continues to gain popularity, with visitors eager to participate in farm activities, taste local produce, and experience traditional rural life. Properties offering organic food and farm-to-table dining see the highest demand.

Sustainability is no longer optional. Guests actively seek out accommodations that minimize environmental impact through renewable energy, water conservation, and waste reduction practices.

Digital presence is crucial. Rural tourism businesses must invest in quality photography, online booking systems, and social media marketing to reach their target audience effectively.`,
        imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Tourism",
        tags: ["tourism", "sustainability", "rural development"],
        countries: ["rs", "mk", "me"],
        featured: true,
        published: true,
        createdAt: new Date("2025-01-12"),
        updatedAt: new Date("2025-01-12"),
      },
      {
        id: randomUUID(),
        title: "Strategic Financial Planning for SMEs in 2025",
        slug: "strategic-financial-planning-smes-2025",
        excerpt: "Essential financial planning strategies that can help small and medium enterprises navigate economic uncertainties and achieve sustainable growth.",
        content: `Small and medium enterprises face unique challenges in today's dynamic economic environment. Strategic financial planning has become more critical than ever.

Cash flow management remains the top priority. Businesses should maintain at least 3-6 months of operating expenses in reserve and implement robust invoicing and collection processes.

Diversification of revenue streams provides resilience against market fluctuations. Consider expanding product lines, entering new markets, or developing complementary services.

Access to funding has improved with various EU programs and national grants available. Our consulting team can help identify the most suitable financing options for your business goals.

Technology investments, particularly in automation and digital tools, offer significant returns through improved efficiency and reduced operational costs.`,
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Finance",
        tags: ["financial planning", "SME", "business strategy"],
        countries: ["rs", "ba"],
        featured: true,
        published: true,
        createdAt: new Date("2025-01-10"),
        updatedAt: new Date("2025-01-10"),
      },
      {
        id: randomUUID(),
        title: "Manufacturing Grants and Subsidies: Complete Guide 2025",
        slug: "manufacturing-grants-subsidies-guide-2025",
        excerpt: "A comprehensive overview of available manufacturing grants and subsidies, including eligibility criteria and application processes.",
        content: `The manufacturing sector in Serbia benefits from various grant and subsidy programs designed to boost competitiveness and innovation.

National programs offer support for equipment modernization, energy efficiency improvements, and workforce training. Grants typically cover 30-50% of eligible project costs.

EU pre-accession funds provide additional opportunities, particularly for companies looking to meet European standards and expand into EU markets. These programs often have higher funding limits.

Innovation-focused grants are available for companies developing new products or implementing advanced manufacturing technologies such as automation, robotics, and Industry 4.0 solutions.

Application deadlines vary throughout the year. We recommend starting the preparation process at least 3 months before the deadline to ensure a complete and competitive application.`,
        imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Manufacturing",
        tags: ["grants", "manufacturing", "subsidies"],
        countries: ["rs", "mk"],
        featured: false,
        published: true,
        createdAt: new Date("2025-01-08"),
        updatedAt: new Date("2025-01-08"),
      },
      {
        id: randomUUID(),
        title: "From Idea to €2M: Client Success Story",
        slug: "from-idea-to-2m-client-success-story",
        excerpt: "How we helped a small organic farm secure major funding and scale operations through strategic business planning and IPARD support.",
        content: `When Milan Petrović approached us with his vision for an organic farm, he had passion but limited resources. Today, his business has secured over €2M in funding.

The journey began with a comprehensive business plan that clearly outlined the market opportunity, operational strategy, and financial projections. This document became the foundation for all funding applications.

We identified multiple funding sources and helped Milan apply strategically. The first IPARD grant of €400,000 enabled the purchase of modern equipment and construction of processing facilities.

Subsequent rounds of funding supported expansion into new product lines, including organic dairy and value-added products. Today, the farm employs 25 people and exports to three EU countries.

This success story demonstrates what's possible with the right strategy and expert guidance. Contact us to discuss how we can help your business achieve similar results.`,
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Success Story",
        tags: ["success story", "organic farming", "IPARD"],
        countries: ["rs"],
        featured: false,
        published: true,
        createdAt: new Date("2025-01-05"),
        updatedAt: new Date("2025-01-05"),
      },
      {
        id: randomUUID(),
        title: "Digital Transformation in Agriculture: IoT and Smart Farming",
        slug: "digital-transformation-agriculture-iot-smart-farming",
        excerpt: "Exploring how digital technologies and IoT solutions are revolutionizing modern agriculture and creating new funding opportunities.",
        content: `The agricultural sector is undergoing a digital revolution. Internet of Things (IoT) sensors, precision agriculture, and smart farming technologies are transforming how we grow food.

Soil moisture sensors, weather stations, and crop monitoring systems provide real-time data that enables farmers to make informed decisions. This precision approach reduces waste and increases yields.

Drone technology offers new possibilities for crop surveillance, pest detection, and even targeted application of treatments. Many farms are reporting 15-20% improvements in efficiency after adoption.

Funding programs increasingly prioritize digital agriculture projects. IPARD and national grants offer favorable terms for investments in smart farming technologies.

Our consulting team can help you develop a digital transformation roadmap and identify the best funding options to support your technology investments.`,
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Technology",
        tags: ["digital transformation", "IoT", "smart farming"],
        countries: ["rs", "mk", "me", "ba"],
        featured: false,
        published: true,
        createdAt: new Date("2025-01-03"),
        updatedAt: new Date("2025-01-03"),
      }
    ];
  }
}

// ============================================
// ADMIN PANEL STORAGE
// ============================================
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

  async seedDefaultAdmin(): Promise<void> {
    const existingAdmin = await this.getAdminUserByUsername('admin');
    if (existingAdmin) {
      return;
    }

    try {
      await this.createAdminUser({
        username: 'admin',
        password: 'admin123',
        email: 'admin@wvpplus.com',
      });
      console.log('✅ Default admin user created (username: admin, password: admin123)');
      console.log('⚠️  IMPORTANT: Change the default password immediately!');
    } catch (error) {
      console.error('Failed to create default admin user:', error);
    }
  }
}
