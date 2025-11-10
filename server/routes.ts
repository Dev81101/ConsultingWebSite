import type { Express } from "express";
import { createServer, type Server } from "http";
import passport from "passport";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriptionSchema, insertBlogPostSchema, insertPageContentSchema, countrySchema, pageTypeSchema, languageSchema, adminLoginSchema, type Country, type PageType, type Language, COUNTRY_NAMES } from "@shared/schema";
import { z } from "zod";
import { requireAuth, createAdminLogger, adminStorage } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin authentication routes
  app.post("/api/admin/login", async (req, res, next) => {
    try {
      const validatedData = adminLoginSchema.parse(req.body);
      
      passport.authenticate("local", (err: any, user: any, info: any) => {
        if (err) {
          return res.status(500).json({ message: "Authentication error" });
        }
        if (!user) {
          return res.status(401).json({ message: info?.message || "Invalid credentials" });
        }
        
        req.logIn(user, async (err) => {
          if (err) {
            return res.status(500).json({ message: "Login error" });
          }
          
          // Log successful login
          await storage.createAdminLog({
            adminUserId: user.id,
            adminUsername: user.username,
            action: "login",
            ipAddress: req.ip || req.socket.remoteAddress,
            userAgent: req.headers['user-agent'],
          });
          
          res.json({ 
            message: "Login successful", 
            user: { 
              id: user.id, 
              username: user.username 
            } 
          });
        });
      })(req, res, next);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Login failed" });
    }
  });

  app.post("/api/admin/logout", requireAuth, async (req, res) => {
    const user = req.user as { id: string; username: string };
    
    // Log logout
    await storage.createAdminLog({
      adminUserId: user.id,
      adminUsername: user.username,
      action: "logout",
      ipAddress: req.ip || req.socket.remoteAddress,
      userAgent: req.headers['user-agent'],
    });
    
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout error" });
      }
      res.json({ message: "Logout successful" });
    });
  });

  app.get("/api/admin/session", (req, res) => {
    if (req.isAuthenticated()) {
      const user = req.user as { id: string; username: string };
      res.json({ 
        authenticated: true, 
        user: { 
          id: user.id, 
          username: user.username 
        } 
      });
    } else {
      res.json({ authenticated: false });
    }
  });

  // Admin logs routes (protected)
  app.get("/api/admin/logs", requireAuth, async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 100;
      const skip = parseInt(req.query.skip as string) || 0;
      const logs = await storage.getAdminLogs(limit, skip);
      res.json(logs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch admin logs" });
    }
  });

  // Geo detection route
  app.get("/api/geo", (req, res) => {
    // Try to detect country from headers or Accept-Language
    const cfCountry = req.headers['cf-ipcountry'] as string;
    const vercelCountry = req.headers['x-vercel-ip-country'] as string;
    const acceptLanguage = req.headers['accept-language'] as string;
    
    let detectedCountry: Country = 'rs'; // default
    
    // Check Cloudflare or Vercel headers first
    if (cfCountry && Object.keys(COUNTRY_NAMES).includes(cfCountry.toLowerCase())) {
      detectedCountry = cfCountry.toLowerCase() as Country;
    } else if (vercelCountry && Object.keys(COUNTRY_NAMES).includes(vercelCountry.toLowerCase())) {
      detectedCountry = vercelCountry.toLowerCase() as Country;
    } else if (acceptLanguage) {
      // Map language codes to countries
      const languageMappings: Record<string, Country> = {
        'sr': 'rs',  // Serbian -> Serbia
        'mk': 'mk',  // Macedonian -> North Macedonia  
        'me': 'me',  // Montenegrin -> Montenegro
        'bs': 'ba',  // Bosnian -> Bosnia
        'hr': 'me',  // Croatian (if sr-ME) -> Montenegro
      };
      
      const primaryLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
      if (languageMappings[primaryLang]) {
        detectedCountry = languageMappings[primaryLang];
      }
    }
    
    res.json({ country: detectedCountry, name: COUNTRY_NAMES[detectedCountry] });
  });
  // Blog routes
  app.get("/api/blog/posts", async (req, res) => {
    try {
      const countryParam = req.query.country as string;
      let country: Country = 'rs';
      
      if (countryParam) {
        const countryValidation = countrySchema.safeParse(countryParam);
        if (countryValidation.success) {
          country = countryValidation.data;
        }
      }
      
      const posts = await storage.getBlogPostsByCountry(country);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/featured", async (req, res) => {
    try {
      const countryParam = req.query.country as string;
      let country: Country = 'rs';
      
      if (countryParam) {
        const countryValidation = countrySchema.safeParse(countryParam);
        if (countryValidation.success) {
          country = countryValidation.data;
        }
      }
      
      const posts = await storage.getFeaturedBlogPostsByCountry(country);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured blog posts" });
    }
  });

  app.get("/api/blog/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const countryParam = req.query.country as string;
      let country: Country = 'rs';
      
      if (countryParam) {
        const countryValidation = countrySchema.safeParse(countryParam);
        if (countryValidation.success) {
          country = countryValidation.data;
        }
      }
      
      const post = await storage.getBlogPostBySlugAndCountry(slug, country);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Admin routes for blog management (protected)
  app.get("/api/admin/blog/posts", requireAuth, async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.post("/api/admin/blog/posts", requireAuth, async (req, res) => {
    try {
      const user = req.user as { id: string; username: string };
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      
      // Log the action
      await storage.createAdminLog({
        adminUserId: user.id,
        adminUsername: user.username,
        action: "create_blog_post",
        resourceType: "blog_post",
        resourceId: post.slug,
        details: `Created blog post: ${post.title}`,
        ipAddress: req.ip || req.socket.remoteAddress,
        userAgent: req.headers['user-agent'],
      });
      
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create blog post" });
    }
  });

  app.put("/api/admin/blog/posts/:slug", requireAuth, async (req, res) => {
    try {
      const user = req.user as { id: string; username: string };
      const { slug } = req.params;
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.updateBlogPost(slug, validatedData);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      // Log the action
      await storage.createAdminLog({
        adminUserId: user.id,
        adminUsername: user.username,
        action: "update_blog_post",
        resourceType: "blog_post",
        resourceId: slug,
        details: `Updated blog post: ${post.title}`,
        ipAddress: req.ip || req.socket.remoteAddress,
        userAgent: req.headers['user-agent'],
      });
      
      res.json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update blog post" });
    }
  });

  app.delete("/api/admin/blog/posts/:slug", requireAuth, async (req, res) => {
    try {
      const user = req.user as { id: string; username: string };
      const { slug } = req.params;
      const deleted = await storage.deleteBlogPost(slug);
      
      if (!deleted) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      // Log the action
      await storage.createAdminLog({
        adminUserId: user.id,
        adminUsername: user.username,
        action: "delete_blog_post",
        resourceType: "blog_post",
        resourceId: slug,
        details: `Deleted blog post: ${slug}`,
        ipAddress: req.ip || req.socket.remoteAddress,
        userAgent: req.headers['user-agent'],
      });
      
      res.json({ message: "Blog post deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete blog post" });
    }
  });

  // Page content routes
  app.get("/api/page-content/:country/:pageType/:language", async (req, res) => {
    try {
      const countryValidation = countrySchema.safeParse(req.params.country);
      const pageTypeValidation = pageTypeSchema.safeParse(req.params.pageType);
      const languageValidation = languageSchema.safeParse(req.params.language);
      
      if (!countryValidation.success || !pageTypeValidation.success || !languageValidation.success) {
        return res.status(400).json({ message: "Invalid country, page type, or language" });
      }
      
      const content = await storage.getPageContent(countryValidation.data, pageTypeValidation.data, languageValidation.data);
      
      if (!content) {
        return res.status(404).json({ message: "Page content not found" });
      }
      
      res.json(content);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch page content" });
    }
  });

  // Admin page content routes (protected)
  app.get("/api/admin/page-content", requireAuth, async (req, res) => {
    try {
      const content = await storage.getAllPageContent();
      res.json(content);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch page content" });
    }
  });

  app.post("/api/admin/page-content", requireAuth, async (req, res) => {
    try {
      const validatedData = insertPageContentSchema.parse(req.body);
      const content = await storage.createPageContent(validatedData);
      res.status(201).json(content);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create page content" });
    }
  });

  app.put("/api/admin/page-content/:country/:pageType/:language", requireAuth, async (req, res) => {
    try {
      const countryValidation = countrySchema.safeParse(req.params.country);
      const pageTypeValidation = pageTypeSchema.safeParse(req.params.pageType);
      const languageValidation = languageSchema.safeParse(req.params.language);
      
      if (!countryValidation.success || !pageTypeValidation.success || !languageValidation.success) {
        return res.status(400).json({ message: "Invalid country, page type, or language" });
      }
      
      const validatedData = insertPageContentSchema.parse(req.body);
      const content = await storage.updatePageContent(
        countryValidation.data, 
        pageTypeValidation.data, 
        languageValidation.data, 
        validatedData
      );
      
      if (!content) {
        return res.status(404).json({ message: "Page content not found" });
      }
      
      res.json(content);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update page content" });
    }
  });

  app.delete("/api/admin/page-content/:country/:pageType/:language", requireAuth, async (req, res) => {
    try {
      const countryValidation = countrySchema.safeParse(req.params.country);
      const pageTypeValidation = pageTypeSchema.safeParse(req.params.pageType);
      const languageValidation = languageSchema.safeParse(req.params.language);
      
      if (!countryValidation.success || !pageTypeValidation.success || !languageValidation.success) {
        return res.status(400).json({ message: "Invalid country, page type, or language" });
      }
      
      const deleted = await storage.deletePageContent(
        countryValidation.data, 
        pageTypeValidation.data,
        languageValidation.data
      );
      
      if (!deleted) {
        return res.status(404).json({ message: "Page content not found" });
      }
      
      res.json({ message: "Page content deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete page content" });
    }
  });

  // Contact form route
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ message: "Contact form submitted successfully", id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  // Newsletter subscription routes
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({ 
        message: "Successfully subscribed to newsletter",
        subscription: { id: subscription.id, email: subscription.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid email address", errors: error.errors });
      }
      if (error instanceof Error && error.message.includes("already subscribed")) {
        return res.status(409).json({ message: error.message });
      }
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  // Achievements route
  app.get("/api/achievements", async (req, res) => {
    try {
      const achievements = await storage.getAchievements();
      res.json(achievements);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch achievements" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
