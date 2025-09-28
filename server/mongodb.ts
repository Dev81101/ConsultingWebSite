import { MongoClient, Db, Collection } from 'mongodb';
import { type BlogPost, type InsertBlogPost, type Country } from '@shared/schema';

let client: MongoClient;
let database: Db;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB_NAME || 'wvp_consulting';

export async function connectToMongoDB(): Promise<Db> {
  if (database) {
    return database;
  }

  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    database = client.db(DB_NAME);
    console.log('Connected to MongoDB successfully');
    return database;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

export async function getDatabase(): Promise<Db> {
  if (!database) {
    return await connectToMongoDB();
  }
  return database;
}

export async function getBlogPostsCollection(): Promise<Collection<BlogPost>> {
  const db = await getDatabase();
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