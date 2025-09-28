import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactSubmission, type InsertContactSubmission, type Achievement, type InsertAchievement, type NewsletterSubscription, type InsertNewsletterSubscription, type Country } from "@shared/schema";
import { randomUUID } from "crypto";

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

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private achievements: Map<string, Achievement>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.contactSubmissions = new Map();
    this.achievements = new Map();
    this.newsletterSubscriptions = new Map();
    
    this.seedData();
  }

  private seedData() {
    // Seed blog posts
    const blogPostsData = [
      {
        id: randomUUID(),
        title: "IPARD 2025: New Funding Opportunities for Agricultural Development",
        slug: "ipard-2025-new-funding-opportunities",
        excerpt: "Discover the latest IPARD funding rounds and how your agricultural business can benefit from increased support for modernization and rural development.",
        content: "The IPARD (Instrument for Pre-Accession Assistance for Rural Development) program continues to be a cornerstone of agricultural development in Serbia. For 2025, the program introduces several new opportunities for farmers and agricultural businesses...",
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
        content: "Rural tourism is experiencing unprecedented growth as travelers seek authentic, sustainable experiences away from crowded cities. The 2025 trends show a clear preference for eco-friendly accommodations...",
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
        content: "Small and medium enterprises face unique challenges in today's dynamic economic environment. Strategic financial planning has become more critical than ever...",
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
        content: "The manufacturing sector in Serbia benefits from various grant and subsidy programs designed to boost competitiveness and innovation...",
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
        content: "When Milan Petrović approached us with his vision for an organic farm, he had passion but limited resources. Today, his business has secured over €2M in funding...",
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
        content: "The agricultural sector is undergoing a digital revolution. Internet of Things (IoT) sensors, precision agriculture, and smart farming technologies...",
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

    blogPostsData.forEach(post => {
      this.blogPosts.set(post.slug, post);
    });

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

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published && post.featured)
      .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(slug);
  }

  async getBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published && post.countries.includes(country))
      .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
  }

  async getFeaturedBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published && post.featured && post.countries.includes(country))
      .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
  }

  async getBlogPostBySlugAndCountry(slug: string, country: Country): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(slug);
    if (!post || !post.published || !post.countries.includes(country)) {
      return undefined;
    }
    return post;
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = { 
      ...insertPost, 
      id,
      tags: insertPost.tags || [],
      featured: insertPost.featured || false,
      published: insertPost.published || true,
      createdAt: now,
      updatedAt: now
    };
    this.blogPosts.set(post.slug, post);
    return post;
  }

  async updateBlogPost(slug: string, insertPost: InsertBlogPost): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(slug);
    if (!existingPost) {
      return undefined;
    }
    
    // If slug is changing, remove old and add new
    if (insertPost.slug !== slug) {
      this.blogPosts.delete(slug);
    }
    
    const updatedPost: BlogPost = {
      ...existingPost,
      ...insertPost,
      tags: insertPost.tags || [],
      featured: insertPost.featured || false,
      published: insertPost.published !== undefined ? insertPost.published : true,
      updatedAt: new Date()
    };
    
    this.blogPosts.set(insertPost.slug, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(slug: string): Promise<boolean> {
    return this.blogPosts.delete(slug);
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

export const storage = new MemStorage();
