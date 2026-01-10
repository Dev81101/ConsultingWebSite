import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactSubmission, type InsertContactSubmission, type Achievement, type InsertAchievement, type NewsletterSubscription, type InsertNewsletterSubscription, type PageContent, type InsertPageContent, type Country, type PageType, type Language, type AdminUser, type AdminLog, type InsertAdminLog, type AdminAction } from "@shared/schema";
import { randomUUID } from "crypto";
import * as fs from "fs";
import * as path from "path";
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
 // createAchievement(achievement: InsertAchievement): Promise<Achievement>;
  
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
  private blogPosts: Map<string, BlogPost>;
  private mongoStorage: MongoDBStorage;
  private adminStorage: MongoDBAdminStorage;
  private useInMemoryBlogs: boolean;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.achievements = new Map();
    this.newsletterSubscriptions = new Map();
    this.pageContent = new Map();
    this.blogPosts = new Map();
    this.mongoStorage = new MongoDBStorage();
    this.adminStorage = new MongoDBAdminStorage();
    this.useInMemoryBlogs = (process.env.USE_IN_MEMORY_BLOGS || "").toLowerCase() === "true";
    
    this.seedData();
  }

  async initialize() {
    await this.mongoStorage.seedData();
    await this.adminStorage.seedDefaultAdmin();
  }

  private seedData() {
    // Blog posts are now seeded via MongoDB by default.
    // If explicitly enabled, seed in-memory blog posts so the app works without DB.
    if (this.useInMemoryBlogs) {
      const allCountries: Country[] = ["rs", "mk", "me", "ba"];

      const makePost = (opts: { title: string; slug: string; date: string; url: string; }): BlogPost => {
        const created = new Date(opts.date);
        return {
          id: randomUUID(),
          title: opts.title,
          slug: opts.slug,
          excerpt: `Read our LinkedIn update posted on ${created.toLocaleDateString("en-GB")} – click to open the original post.`,
          // Keep basic HTML content with a link to the original LinkedIn activity
          content: `<p>This article links to our original LinkedIn update.</p><p><a href="${opts.url}" target="_blank" rel="noopener">Open LinkedIn post</a></p>`,
          imageUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&auto=format&fit=crop&q=60",
          category: "LinkedIn",
          tags: ["LinkedIn", "Update"],
          countries: allCountries,
          featured: true,
          published: true,
          createdAt: created,
          updatedAt: created,
        };
      };

      // 1) Try to load from JSON override if present
      //    Default location: attached_assets/in-memory-blogs.json
      //    Optional override via env IN_MEMORY_BLOG_FILE (absolute or relative to CWD)
      const overridePath = process.env.IN_MEMORY_BLOG_FILE
        ? path.isAbsolute(process.env.IN_MEMORY_BLOG_FILE)
          ? process.env.IN_MEMORY_BLOG_FILE
          : path.join(process.cwd(), process.env.IN_MEMORY_BLOG_FILE)
        : path.join(process.cwd(), "attached_assets", "in-memory-blogs.json");

      const trySeedFromJson = (): boolean => {
        try {
          if (!fs.existsSync(overridePath)) return false;
          const raw = fs.readFileSync(overridePath, "utf-8");
          const list = JSON.parse(raw);
          if (!Array.isArray(list) || list.length === 0) return false;

          const safe = (v: any, fallback: any) => (v === undefined || v === null ? fallback : v);

          for (const item of list) {
            // Minimal validation
            if (!item || typeof item !== "object") continue;
            const title = String(safe(item.title, "Untitled"));
            // Build slug if missing
            const slug = String(
              safe(
                item.slug,
                title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "") || `post-${randomUUID()}`
              )
            );
            const dateStr = String(safe(item.date, new Date().toISOString().slice(0, 10)));
            const created = new Date(dateStr);
            const imageUrl = String(
              safe(
                item.imageUrl,
                "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&auto=format&fit=crop&q=60"
              )
            );
            const category = String(safe(item.category, "General"));
            const excerpt = String(
              safe(
                item.excerpt,
                `Published on ${created.toLocaleDateString("en-GB")}`
              )
            );
            const content = String(
              safe(
                item.content,
                item.url
                  ? `<p><a href="${item.url}" target="_blank" rel="noopener">Open related link</a></p>`
                  : `<p>${title}</p>`
              )
            );
            const tags = Array.isArray(item.tags) ? item.tags.map((t: any) => String(t)) : [];
            const countries = Array.isArray(item.countries) && item.countries.length
              ? (item.countries as Country[])
              : allCountries;
            const featured = Boolean(safe(item.featured, true));
            const published = Boolean(safe(item.published, true));

            const post: BlogPost = {
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
            };
            this.blogPosts.set(post.slug, post);
          }

          return this.blogPosts.size > 0;
        } catch (err) {
          // If parsing fails, fall back to defaults
          return false;
        }
      };

      // If override did not seed anything, fall back to defaults
      if (!trySeedFromJson()) {
        const posts: BlogPost[] = [
        makePost({
          title: "LinkedIn Update – 23.02.2025",
          slug: "linkedin-update-2025-02-23",
          date: "2025-02-23",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7299552897610969088",
        }),
        makePost({
          title: "LinkedIn Update – 09.08.2025",
          slug: "linkedin-update-2025-08-09",
          date: "2025-08-09",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7359973189008973824",
        }),
        makePost({
          title: "LinkedIn Update – 19.10.2025",
          slug: "linkedin-update-2025-10-19",
          date: "2025-10-19",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7385670472077660160",
        }),
        makePost({
          title: "LinkedIn Update – 21.12.2025",
          slug: "linkedin-update-2025-12-21",
          date: "2025-12-21",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7408447616797040640",
        }),
        makePost({
          title: "LinkedIn Update – 04.01.2026",
          slug: "linkedin-update-2026-01-04",
          date: "2026-01-04",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7413489318570315776",
        }),
        ];

        posts.forEach((p) => this.blogPosts.set(p.slug, p));
      }
    }

    // Seed achievements
    const achievementsData = [
        {
            id: randomUUID(),
            label: "",
            value: null,
            description: "",
            icon: "",
            order: 1,
        },
        {
            id: randomUUID(),
            label: "Successfully completed projects",
            value: 3000,
            description: "over 3000 successfully completed projects",
            icon: "fas fa-project-diagram",
            order: 2,
        },
        {
            id: randomUUID(),
            label: "Approved grants (EUR)",
            value: 25,
            description: "over 25 million euros in approved grants",
            icon: "fas fa-euro-sign",
            order: 3,
        },
        {
            id: randomUUID(),
            label: "Approved credits (EUR)",
            value: 80,
            description: "over 80 million euros in approved financial credits",
            icon: "fas fa-euro-sign",
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

  // Blog post methods - use in-memory dataset if enabled; otherwise delegate to MongoDB
  async getBlogPosts(): Promise<BlogPost[]> {
    if (this.useInMemoryBlogs) {
      return Array.from(this.blogPosts.values()).sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
    }
    return this.mongoStorage.getBlogPosts();
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    if (this.useInMemoryBlogs) {
      return (await this.getBlogPosts()).filter(p => p.featured);
    }
    return this.mongoStorage.getFeaturedBlogPosts();
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    if (this.useInMemoryBlogs) {
      return this.blogPosts.get(slug);
    }
    return this.mongoStorage.getBlogPost(slug);
  }

  async getBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    if (this.useInMemoryBlogs) {
      return (await this.getBlogPosts()).filter(p => p.countries.includes(country));
    }
    return this.mongoStorage.getBlogPostsByCountry(country);
  }

  async getFeaturedBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    if (this.useInMemoryBlogs) {
      return (await this.getBlogPostsByCountry(country)).filter(p => p.featured);
    }
    return this.mongoStorage.getFeaturedBlogPostsByCountry(country);
  }

  async getBlogPostBySlugAndCountry(slug: string, country: Country): Promise<BlogPost | undefined> {
    if (this.useInMemoryBlogs) {
      const post = await this.getBlogPost(slug);
      return post && post.countries.includes(country) ? post : undefined;
    }
    return this.mongoStorage.getBlogPostBySlugAndCountry(slug, country);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    if (this.useInMemoryBlogs) {
      const id = randomUUID();
      const now = new Date();
      const post: BlogPost = {
        id,
        title: insertPost.title,
        slug: insertPost.slug,
        excerpt: insertPost.excerpt,
        content: insertPost.content,
        imageUrl: insertPost.imageUrl,
        category: insertPost.category,
        tags: insertPost.tags || [],
        countries: insertPost.countries || ["rs"],
        featured: insertPost.featured ?? false,
        published: insertPost.published ?? true,
        createdAt: now,
        updatedAt: now,
      };
      this.blogPosts.set(post.slug, post);
      return post;
    }
    return this.mongoStorage.createBlogPost(insertPost);
  }

  async updateBlogPost(slug: string, insertPost: InsertBlogPost): Promise<BlogPost | undefined> {
    if (this.useInMemoryBlogs) {
      const existing = this.blogPosts.get(slug);
      if (!existing) return undefined;
      const updated: BlogPost = {
        ...existing,
        ...insertPost as any,
        tags: insertPost.tags ?? existing.tags,
        countries: insertPost.countries ?? existing.countries,
        featured: insertPost.featured ?? existing.featured,
        published: insertPost.published ?? existing.published,
        updatedAt: new Date(),
      };
      // If slug changed, move the entry
      if (insertPost.slug && insertPost.slug !== slug) {
        this.blogPosts.delete(slug);
        this.blogPosts.set(insertPost.slug, updated);
      } else {
        this.blogPosts.set(slug, updated);
      }
      return updated;
    }
    return this.mongoStorage.updateBlogPost(slug, insertPost);
  }

  async deleteBlogPost(slug: string): Promise<boolean> {
    if (this.useInMemoryBlogs) {
      return this.blogPosts.delete(slug);
    }
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

  /*async createAchievement(insertAchievement: InsertAchievement): Promise<Achievement> {
    const id = randomUUID();
    const achievement: Achievement = { 
      ...insertAchievement, 
      id,
      order: insertAchievement.order || 0
    };
    this.achievements.set(id, achievement);
    return achievement;
  }*/

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
  /*async createAchievement(achievement: InsertAchievement): Promise<Achievement> {
    const store = await getStorage();
    return store.createAchievement(achievement);
  },*/
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
