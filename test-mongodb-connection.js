#!/usr/bin/env node

/**
 * MongoDB Connection Test Script
 * 
 * This script tests the connection to your Docker MongoDB instance
 * and displays what collections exist.
 * 
 * Usage: node test-mongodb-connection.js
 */

import { MongoClient } from 'mongodb';

// MongoDB connection string for Docker setup
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://admin:adminpassword@localhost:27017/wvp_consulting?authSource=admin';
const DB_NAME = 'wvp_consulting';

async function testConnection() {
  console.log('🔍 Testing MongoDB Connection...\n');
  console.log('Connection String:', MONGODB_URI.replace(/:[^:@]+@/, ':****@')); // Hide password
  console.log('Database Name:', DB_NAME);
  console.log('');

  let client;

  try {
    // Connect to MongoDB
    console.log('📡 Connecting to MongoDB...');
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    console.log('✅ Connected successfully!\n');

    // Get database
    const db = client.db(DB_NAME);

    // List all collections
    console.log('📚 Collections in database:');
    const collections = await db.listCollections().toArray();
    
    if (collections.length === 0) {
      console.log('   ⚠️  No collections found yet');
      console.log('   This is normal if the application hasn\'t been started yet.');
      console.log('   Collections will be created when you start the app with MONGODB_URI set.\n');
    } else {
      for (const collection of collections) {
        const count = await db.collection(collection.name).countDocuments();
        console.log(`   ✓ ${collection.name} (${count} documents)`);
      }
      console.log('');
    }

    // Check expected collections
    console.log('🎯 Expected collections:');
    const expectedCollections = ['blog_posts', 'admin_users', 'admin_logs'];
    
    for (const collectionName of expectedCollections) {
      const exists = collections.some(c => c.name === collectionName);
      if (exists) {
        const count = await db.collection(collectionName).countDocuments();
        console.log(`   ✅ ${collectionName} exists (${count} documents)`);
        
        // Show sample data
        if (count > 0) {
          const sample = await db.collection(collectionName).findOne();
          if (collectionName === 'admin_users') {
            console.log(`      Sample: { username: "${sample.username}", createdAt: ${sample.createdAt} }`);
          } else if (collectionName === 'blog_posts') {
            console.log(`      Sample: { title: "${sample.title}", slug: "${sample.slug}" }`);
          }
        }
      } else {
        console.log(`   ⚠️  ${collectionName} doesn't exist yet`);
      }
    }

    console.log('\n✨ Connection test completed successfully!');

  } catch (error) {
    console.error('\n❌ Connection failed!');
    console.error('Error:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('   1. Make sure Docker MongoDB is running: docker-compose up mongodb -d');
    console.log('   2. Check if MongoDB is accessible on localhost:27017');
    console.log('   3. Verify credentials: username=admin, password=adminpassword');
    console.log('   4. Try: docker-compose logs mongodb');
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('\n🔌 Connection closed.');
    }
  }
}

// Run the test
testConnection().catch(console.error);
