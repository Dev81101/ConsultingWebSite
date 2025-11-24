import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, integer, unique } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Country type for multi-country support
export const countrySchema = z.enum(["rs", "mk", "me", "ba"]);
export type Country = z.infer<typeof countrySchema>;

// Country display names
export const COUNTRY_NAMES: Record<Country, string> = {
  rs: "Serbia",
  mk: "North Macedonia", 
  me: "Montenegro",
  ba: "Bosnia and Herzegovina"
};

// Language type for multi-language support
export const languageSchema = z.enum(["sr", "en", "mk", "me", "bs"]);
export type Language = z.infer<typeof languageSchema>;

// Language display names
export const LANGUAGE_NAMES: Record<Language, string> = {
  sr: "Српски", // Serbian
  en: "English",
  mk: "Македонски", // Macedonian
  me: "Crnogorski", // Montenegrin
  bs: "Bosanski" // Bosnian
};

// Available languages per country
export const COUNTRY_LANGUAGES: Record<Country, Language[]> = {
  rs: ["sr", "en"], // Serbia: Serbian, English
  mk: ["mk", "en"], // North Macedonia: Macedonian, English
  me: ["me", "en"], // Montenegro: Montenegrin, English
  ba: ["bs", "en"]  // Bosnia and Herzegovina: Bosnian, English
};

// Default language per country
export const DEFAULT_LANGUAGE: Record<Country, Language> = {
  rs: "sr",
  mk: "mk",
  me: "me",
  ba: "bs"
};

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  tags: text("tags").array().default([]),
  countries: text("countries").array().notNull().default(["rs"]),
  featured: boolean("featured").default(false),
  published: boolean("published").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  serviceInterest: text("service_interest").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const achievements = pgTable("achievements", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  label: text("label").notNull(),
  value: integer("value").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  order: integer("order").notNull().default(0),
});

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow(),
  isActive: boolean("is_active").default(true),
});

// Page types for country-specific content
export const pageTypeSchema = z.enum(["home", "programs", "about", "contact"]);
export type PageType = z.infer<typeof pageTypeSchema>;

export const pageContent = pgTable("page_content", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  country: text("country").notNull(),
  pageType: text("page_type").notNull(),
  language: text("language").notNull().default("en"),
  title: text("title").notNull(),
  content: text("content").notNull(),
  metaDescription: text("meta_description"),
  metadata: text("metadata"), // JSON string for additional page-specific data
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => ({
  uniqueCountryPageLanguage: unique().on(table.country, table.pageType, table.language),
}));

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

const preprocessTags = z.preprocess(
    (val) => {
        if (Array.isArray(val)) return val;
        if (typeof val === "string") {
            return val
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean);
        }
        return [];
    },
    z.array(z.string()).optional()
);

// Then update insertBlogPostSchema:
export const insertBlogPostSchema = createInsertSchema(blogPosts, {
    countries: z.array(countrySchema).min(1, "At least one country must be selected"),
    tags: preprocessTags, // ✅ override the default generated schema
}).omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export const insertAchievementSchema = createInsertSchema(achievements).omit({
  id: true,
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  subscribedAt: true,
});

export const insertPageContentSchema = createInsertSchema(pageContent, {
  country: countrySchema,
  pageType: pageTypeSchema,
  language: languageSchema
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Admin user schema (for MongoDB)
export const adminUserSchema = z.object({
  id: z.string(),
  username: z.string().min(3).max(50),
  passwordHash: z.string(),
  email: z.string().email().optional(),
  createdAt: z.date(),
  lastLoginAt: z.date().optional(),
});

export const insertAdminUserSchema = adminUserSchema.omit({
  id: true,
  createdAt: true,
  lastLoginAt: true,
});

export const adminLoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

// Admin log schema (for MongoDB)
export const adminActionSchema = z.enum([
  "login",
  "logout",
  "create_blog_post",
  "update_blog_post",
  "delete_blog_post",
  "create_page_content",
  "update_page_content",
  "delete_page_content",
]);

export type AdminAction = z.infer<typeof adminActionSchema>;

export const adminLogSchema = z.object({
  id: z.string(),
  adminUserId: z.string(),
  adminUsername: z.string(),
  action: adminActionSchema,
  resourceType: z.string().optional(),
  resourceId: z.string().optional(),
  details: z.string().optional(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  timestamp: z.date(),
});

export const insertAdminLogSchema = adminLogSchema.omit({
  id: true,
  timestamp: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertAchievement = z.infer<typeof insertAchievementSchema>;
export type Achievement = typeof achievements.$inferSelect;

export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;

export type InsertPageContent = z.infer<typeof insertPageContentSchema>;
export type PageContent = typeof pageContent.$inferSelect;

export type AdminUser = z.infer<typeof adminUserSchema>;
export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminLogin = z.infer<typeof adminLoginSchema>;
export type AdminLog = z.infer<typeof adminLogSchema>;
export type InsertAdminLog = z.infer<typeof insertAdminLogSchema>;
