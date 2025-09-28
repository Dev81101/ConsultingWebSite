import { MongoClient, Db, Collection } from 'mongodb';
import { type BlogPost, type InsertBlogPost, type Country } from '@shared/schema';

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
    return database;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    console.log('Falling back to in-memory storage for blog posts');
    connectionFailed = true;
    return null;
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

export async function closeConnection(): Promise<void> {
  if (client) {
    await client.close();
  }
}

// MongoDB document interface for blog posts
export interface BlogPostDocument extends Omit<BlogPost, 'id'> {
  _id?: string;
}