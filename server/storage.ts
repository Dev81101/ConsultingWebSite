import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactSubmission, type InsertContactSubmission, type Achievement, type InsertAchievement, type NewsletterSubscription, type InsertNewsletterSubscription, type Country } from "@shared/schema";
import { randomUUID } from "crypto";
import { MongoDBStorage } from "./mongodb-storage";
import { connectToMongoDB } from "./mongodb";

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
}

export class HybridStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private achievements: Map<string, Achievement>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;
  private mongoStorage: MongoDBStorage;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.achievements = new Map();
    this.newsletterSubscriptions = new Map();
    this.mongoStorage = new MongoDBStorage();
    
    this.seedData();
  }

  async initialize() {
    await connectToMongoDB();
    await this.mongoStorage.seedData();
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
  }
};
