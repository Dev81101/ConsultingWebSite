import { ObjectId } from 'mongodb';
import { randomUUID } from "crypto";
import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactSubmission, type InsertContactSubmission, type Achievement, type InsertAchievement, type NewsletterSubscription, type InsertNewsletterSubscription, type Country } from "@shared/schema";
import { getBlogPostsCollection, getDatabase } from './mongodb';

export class MongoDBStorage {
  async getBlogPosts(): Promise<BlogPost[]> {
    const collection = await getBlogPostsCollection();
    const posts = await collection.find({ published: true }).sort({ createdAt: -1 }).toArray();
    return posts.map(this.mapMongoDocumentToBlogPost);
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    const collection = await getBlogPostsCollection();
    const posts = await collection.find({ 
      published: true, 
      featured: true 
    }).sort({ createdAt: -1 }).toArray();
    return posts.map(this.mapMongoDocumentToBlogPost);
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const collection = await getBlogPostsCollection();
    const post = await collection.findOne({ slug });
    return post ? this.mapMongoDocumentToBlogPost(post) : undefined;
  }

  async getBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    const collection = await getBlogPostsCollection();
    const posts = await collection.find({ 
      published: true,
      countries: country
    }).sort({ createdAt: -1 }).toArray();
    return posts.map(this.mapMongoDocumentToBlogPost);
  }

  async getFeaturedBlogPostsByCountry(country: Country): Promise<BlogPost[]> {
    const collection = await getBlogPostsCollection();
    const posts = await collection.find({ 
      published: true,
      featured: true,
      countries: country
    }).sort({ createdAt: -1 }).toArray();
    return posts.map(this.mapMongoDocumentToBlogPost);
  }

  async getBlogPostBySlugAndCountry(slug: string, country: Country): Promise<BlogPost | undefined> {
    const collection = await getBlogPostsCollection();
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

    await collection.insertOne(blogPost as any);
    return blogPost;
  }

  async updateBlogPost(slug: string, insertPost: InsertBlogPost): Promise<BlogPost | undefined> {
    const collection = await getBlogPostsCollection();
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

    // If slug is changing, we need to handle it differently
    if (insertPost.slug !== slug) {
      // Delete old document and insert new one
      await collection.deleteOne({ slug });
      await collection.insertOne(updatedPost as any);
    } else {
      await collection.replaceOne({ slug }, updatedPost);
    }

    return this.mapMongoDocumentToBlogPost(updatedPost as any);
  }

  async deleteBlogPost(slug: string): Promise<boolean> {
    const collection = await getBlogPostsCollection();
    const result = await collection.deleteOne({ slug });
    return result.deletedCount === 1;
  }

  // Helper method to map MongoDB document to BlogPost
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

  // Seed initial data if collection is empty
  async seedData(): Promise<void> {
    const collection = await getBlogPostsCollection();
    const count = await collection.countDocuments();
    
    if (count === 0) {
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

      await collection.insertMany(blogPostsData as any);
      console.log('Seeded blog posts to MongoDB');
    }
  }
}