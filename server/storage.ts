import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactSubmission, type InsertContactSubmission, type Achievement, type InsertAchievement, type NewsletterSubscription, type InsertNewsletterSubscription, type PageContent, type InsertPageContent, type Country, type PageType, type Language, type AdminUser, type AdminLog, type InsertAdminLog, type AdminAction } from "@shared/schema";
import { randomUUID } from "crypto";
import { MongoDBStorage, MongoDBAdminStorage } from "./mongodb";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getFeaturedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  getBlogPostsByCountry(country: Country): Promise<BlogPost[]>;
  getFeaturedBlogPostsByCountry(country: Country): Promise<BlogPost[]>;
  getBlogPostBySlugAndCountry(slug: string, country: Country): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(slug: string, post: InsertBlogPost): Promise<BlogPost | undefined>;
  deleteBlogPost(slug: string): Promise<boolean>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  getAchievements(): Promise<Achievement[]>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;
  
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscription(email: string): Promise<NewsletterSubscription | undefined>;
  
  getPageContent(country: Country, pageType: PageType, language: Language): Promise<PageContent | undefined>;
  createPageContent(content: InsertPageContent): Promise<PageContent>;
  updatePageContent(country: Country, pageType: PageType, language: Language, content: InsertPageContent): Promise<PageContent | undefined>;
  deletePageContent(country: Country, pageType: PageType, language: Language): Promise<boolean>;
  getAllPageContent(): Promise<PageContent[]>;
  
  // Admin methods
  getAdminUserByUsername(username: string): Promise<AdminUser | undefined>;
  verifyAdminPassword(username: string, password: string): Promise<boolean>;
  updateAdminLastLogin(username: string): Promise<void>;
  createAdminLog(log: InsertAdminLog): Promise<AdminLog>;
  getAdminLogs(limit?: number, skip?: number): Promise<AdminLog[]>;
  getAdminLogsByUser(adminUserId: string, limit?: number): Promise<AdminLog[]>;
}

export class HybridStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private achievements: Map<string, Achievement>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;
  private pageContent: Map<string, PageContent>;
  private mongoStorage: MongoDBStorage;
  private adminStorage: MongoDBAdminStorage;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.achievements = new Map();
    this.newsletterSubscriptions = new Map();
    this.pageContent = new Map();
    this.mongoStorage = new MongoDBStorage();
    this.adminStorage = new MongoDBAdminStorage();
    
    this.seedData();
  }

  async initialize() {
    await this.mongoStorage.seedData();
    await this.adminStorage.seedDefaultAdmin();
  }

  private seedData() {
    // Blog posts are now seeded via MongoDB

    // Seed achievements
    const achievementsData = [
      {
        id: randomUUID(),
        label: "Successful Projects",
        value: 245,
        description: "IPARD and funding projects completed",
        icon: "fas fa-project-diagram",
        order: 1,
      },
      {
        id: randomUUID(),
        label: "Million EUR Secured",
        value: 86,
        description: "Total funding obtained for clients",
        icon: "fas fa-euro-sign",
        order: 2,
      },
      {
        id: randomUUID(),
        label: "Happy Clients",
        value: 350,
        description: "Businesses we've helped grow",
        icon: "fas fa-users",
        order: 3,
      },
      {
        id: randomUUID(),
        label: "Success Rate %",
        value: 95,
        description: "Project approval rate",
        icon: "fas fa-chart-line",
        order: 4,
      }
    ];

    achievementsData.forEach(achievement => {
      this.achievements.set(achievement.id, achievement);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Blog post methods delegated to MongoDB
  async getBlogPosts(): Promise<BlogPost[]> {
    return this.mongoStorage.getBlogPosts();
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    return this.mongoStorage.getFeaturedBlogPosts();
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return this.mongoStorage.getBlogPost(slug);
  }

  async getBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    return this.mongoStorage.getBlogPostsByCountry(country);
  }

  async getFeaturedBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    return this.mongoStorage.getFeaturedBlogPostsByCountry(country);
  }

  async getBlogPostBySlugAndCountry(slug: string, country: Country): Promise<BlogPost | undefined> {
    return this.mongoStorage.getBlogPostBySlugAndCountry(slug, country);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    return this.mongoStorage.createBlogPost(insertPost);
  }

  async updateBlogPost(slug: string, insertPost: InsertBlogPost): Promise<BlogPost | undefined> {
    return this.mongoStorage.updateBlogPost(slug, insertPost);
  }

  async deleteBlogPost(slug: string): Promise<boolean> {
    return this.mongoStorage.deleteBlogPost(slug);
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getAchievements(): Promise<Achievement[]> {
    return Array.from(this.achievements.values())
      .sort((a, b) => a.order - b.order);
  }

  async createAchievement(insertAchievement: InsertAchievement): Promise<Achievement> {
    const id = randomUUID();
    const achievement: Achievement = { 
      ...insertAchievement, 
      id,
      order: insertAchievement.order || 0
    };
    this.achievements.set(id, achievement);
    return achievement;
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletterSubscriptions.values())
      .find(sub => sub.email === insertSubscription.email && sub.isActive);
    
    if (existingSubscription) {
      throw new Error("Email is already subscribed to our newsletter");
    }

    const id = randomUUID();
    const subscription: NewsletterSubscription = {
      ...insertSubscription,
      id,
      subscribedAt: new Date(),
      isActive: insertSubscription.isActive !== undefined ? insertSubscription.isActive : true,
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getNewsletterSubscription(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values())
      .find(sub => sub.email === email);
  }

  // Page content methods  
  private getPageContentKey(country: Country, pageType: PageType, language: Language): string {
    return `${country}-${pageType}-${language}`;
  }

  async getPageContent(country: Country, pageType: PageType, language: Language): Promise<PageContent | undefined> {
    const key = this.getPageContentKey(country, pageType, language);
    return this.pageContent.get(key);
  }

  async createPageContent(insertContent: InsertPageContent): Promise<PageContent> {
    const id = randomUUID();
    const content: PageContent = {
      ...insertContent,
      id,
      metadata: insertContent.metadata || null,
      metaDescription: insertContent.metaDescription || null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const key = this.getPageContentKey(
      insertContent.country as Country, 
      insertContent.pageType as PageType,
      insertContent.language as Language
    );
    this.pageContent.set(key, content);
    return content;
  }

  async updatePageContent(country: Country, pageType: PageType, language: Language, insertContent: InsertPageContent): Promise<PageContent | undefined> {
    const key = this.getPageContentKey(country, pageType, language);
    const existingContent = this.pageContent.get(key);
    
    if (!existingContent) {
      return undefined;
    }

    const updatedContent: PageContent = {
      ...existingContent,
      ...insertContent,
      updatedAt: new Date()
    };

    this.pageContent.set(key, updatedContent);
    return updatedContent;
  }

  async deletePageContent(country: Country, pageType: PageType, language: Language): Promise<boolean> {
    const key = this.getPageContentKey(country, pageType, language);
    return this.pageContent.delete(key);
  }

  async getAllPageContent(): Promise<PageContent[]> {
    return Array.from(this.pageContent.values());
  }

  // Admin methods delegated to MongoDB
  async getAdminUserByUsername(username: string): Promise<AdminUser | undefined> {
    return this.adminStorage.getAdminUserByUsername(username);
  }

  async verifyAdminPassword(username: string, password: string): Promise<boolean> {
    return this.adminStorage.verifyPassword(username, password);
  }

  async updateAdminLastLogin(username: string): Promise<void> {
    return this.adminStorage.updateAdminLastLogin(username);
  }

  async createAdminLog(log: InsertAdminLog): Promise<AdminLog> {
    return this.adminStorage.createAdminLog(log);
  }

  async getAdminLogs(limit?: number, skip?: number): Promise<AdminLog[]> {
    return this.adminStorage.getAdminLogs(limit, skip);
  }

  async getAdminLogsByUser(adminUserId: string, limit?: number): Promise<AdminLog[]> {
    return this.adminStorage.getAdminLogsByUser(adminUserId, limit);
  }
}

// Create and initialize the hybrid storage
async function createStorage(): Promise<HybridStorage> {
  const hybridStorage = new HybridStorage();
  await hybridStorage.initialize();
  return hybridStorage;
}

// Export the storage instance
let storageInstance: HybridStorage | null = null;
let storagePromise: Promise<HybridStorage> | null = null;

export async function getStorage(): Promise<HybridStorage> {
  if (!storageInstance) {
    if (!storagePromise) {
      storagePromise = createStorage();
    }
    storageInstance = await storagePromise;
  }
  return storageInstance;
}

// For backwards compatibility - this will be a lazy getter
export const storage = {
  async getBlogPosts(): Promise<BlogPost[]> {
    const store = await getStorage();
    return store.getBlogPosts();
  },
  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    const store = await getStorage();
    return store.getFeaturedBlogPosts();
  },
  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const store = await getStorage();
    return store.getBlogPost(slug);
  },
  async getBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    const store = await getStorage();
    return store.getBlogPostsByCountry(country);
  },
  async getFeaturedBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    const store = await getStorage();
    return store.getFeaturedBlogPostsByCountry(country);
  },
  async getBlogPostBySlugAndCountry(slug: string, country: Country): Promise<BlogPost | undefined> {
    const store = await getStorage();
    return store.getBlogPostBySlugAndCountry(slug, country);
  },
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const store = await getStorage();
    return store.createBlogPost(post);
  },
  async updateBlogPost(slug: string, post: InsertBlogPost): Promise<BlogPost | undefined> {
    const store = await getStorage();
    return store.updateBlogPost(slug, post);
  },
  async deleteBlogPost(slug: string): Promise<boolean> {
    const store = await getStorage();
    return store.deleteBlogPost(slug);
  },
  async getUser(id: string): Promise<User | undefined> {
    const store = await getStorage();
    return store.getUser(id);
  },
  async getUserByUsername(username: string): Promise<User | undefined> {
    const store = await getStorage();
    return store.getUserByUsername(username);
  },
  async createUser(user: InsertUser): Promise<User> {
    const store = await getStorage();
    return store.createUser(user);
  },
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const store = await getStorage();
    return store.createContactSubmission(submission);
  },
  async getAchievements(): Promise<Achievement[]> {
    const store = await getStorage();
    return store.getAchievements();
  },
  async createAchievement(achievement: InsertAchievement): Promise<Achievement> {
    const store = await getStorage();
    return store.createAchievement(achievement);
  },
  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const store = await getStorage();
    return store.createNewsletterSubscription(subscription);
  },
  async getNewsletterSubscription(email: string): Promise<NewsletterSubscription | undefined> {
    const store = await getStorage();
    return store.getNewsletterSubscription(email);
  },
  async getPageContent(country: Country, pageType: PageType, language: Language): Promise<PageContent | undefined> {
    const store = await getStorage();
    return store.getPageContent(country, pageType, language);
  },
  async createPageContent(content: InsertPageContent): Promise<PageContent> {
    const store = await getStorage();
    return store.createPageContent(content);
  },
  async updatePageContent(country: Country, pageType: PageType, language: Language, content: InsertPageContent): Promise<PageContent | undefined> {
    const store = await getStorage();
    return store.updatePageContent(country, pageType, language, content);
  },
  async deletePageContent(country: Country, pageType: PageType, language: Language): Promise<boolean> {
    const store = await getStorage();
    return store.deletePageContent(country, pageType, language);
  },
  async getAllPageContent(): Promise<PageContent[]> {
    const store = await getStorage();
    return store.getAllPageContent();
  },
  async getAdminUserByUsername(username: string): Promise<AdminUser | undefined> {
    const store = await getStorage();
    return store.getAdminUserByUsername(username);
  },
  async verifyAdminPassword(username: string, password: string): Promise<boolean> {
    const store = await getStorage();
    return store.verifyAdminPassword(username, password);
  },
  async updateAdminLastLogin(username: string): Promise<void> {
    const store = await getStorage();
    return store.updateAdminLastLogin(username);
  },
  async createAdminLog(log: InsertAdminLog): Promise<AdminLog> {
    const store = await getStorage();
    return store.createAdminLog(log);
  },
  async getAdminLogs(limit?: number, skip?: number): Promise<AdminLog[]> {
    const store = await getStorage();
    return store.getAdminLogs(limit, skip);
  },
  async getAdminLogsByUser(adminUserId: string, limit?: number): Promise<AdminLog[]> {
    const store = await getStorage();
    return store.getAdminLogsByUser(adminUserId, limit);
  }
};
