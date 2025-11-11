# MongoDB Setup Guide for Local Development

This guide will help you set up MongoDB on your local PC to work with the WVP Plus Consulting application.

## Prerequisites

- MongoDB installed on your local machine
- Node.js and npm installed

## Option 1: Using Local MongoDB (Recommended for PC Development)

### Step 1: Install MongoDB

**Windows:**
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Run the installer (use default settings)
3. MongoDB will start automatically as a Windows service on port 27017

**macOS:**
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu/Debian):**
```bash
# Import MongoDB GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Install MongoDB
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Step 2: Verify MongoDB is Running

```bash
# Test MongoDB connection
mongosh
# You should see: "Connected to: mongodb://localhost:27017/"
# Type 'exit' to quit
```

### Step 3: Configure Application

**On Replit:**
1. Click the "Secrets" (lock icon) in the left sidebar
2. Add a new secret:
   - Key: `MONGODB_URI`
   - Value: `mongodb://localhost:27017/wvp_consulting`
3. Restart the application

**Running locally on your PC:**
1. Create a `.env` file in the project root:
```bash
MONGODB_URI=mongodb://localhost:27017/wvp_consulting
MONGODB_DB_NAME=wvp_consulting
SESSION_SECRET=dev-secret-key-change-in-production
NODE_ENV=development
PORT=5000
```

2. Install dependencies and run:
```bash
npm install
npm run dev
```

### Step 4: Verify Connection

When you start the application, you should see:
```
✅ Connected to MongoDB: wvp_consulting
✅ Default admin user created (username: admin, password: admin123)
```

If MongoDB is NOT connected, you'll see:
```
No MONGODB_URI environment variable set. Skipping MongoDB connection.
Seeded blog posts to fallback storage (MongoDB not available)
```

## Option 2: Using Docker MongoDB

If you prefer to run MongoDB in Docker:

### Step 1: Install Docker
Download and install Docker Desktop from https://www.docker.com/products/docker-desktop/

### Step 2: Start MongoDB with Docker Compose

```bash
# Start MongoDB only (not the full application)
docker-compose up mongodb mongo-express -d

# This will:
# - Start MongoDB on port 27017
# - Start Mongo Express (web UI) on port 8081
```

### Step 3: Configure Application

Set the MONGODB_URI to:
```
mongodb://admin:adminpassword@localhost:27017/wvp_consulting?authSource=admin
```

### Step 4: Access Mongo Express (Web UI)

Open your browser to: http://localhost:8081
- Username: `admin`
- Password: `pass`

You can view and manage your MongoDB data through this web interface.

## What Gets Stored in MongoDB?

The application uses a **hybrid storage** approach:

### Stored in MongoDB (Persistent):
- ✅ **Blog Posts** - All blog articles with content, images, categories
- ✅ **Admin Users** - Admin login credentials (hashed passwords)
- ✅ **Admin Logs** - Activity logs of all admin actions

### Stored in Memory (Transient - resets on restart):
- ⚠️ Contact form submissions
- ⚠️ Newsletter subscriptions
- ⚠️ Achievements/statistics
- ⚠️ Page content (dynamic CMS content)

> **Note:** To make all data persistent, you would need to extend the MongoDB storage to include these other collections.

## Default Admin Credentials

When MongoDB is connected, a default admin user is automatically created:

- Username: `admin`
- Password: `admin123`

⚠️ **IMPORTANT:** Change this password immediately after first login!

## Troubleshooting

### Error: "MongoServerError: Authentication failed"

Solution: Check your MongoDB username and password in the connection string.

### Error: "connect ECONNREFUSED 127.0.0.1:27017"

Solutions:
1. Make sure MongoDB is running: `mongosh` (should connect)
2. On Windows, check if MongoDB service is running in Services
3. On macOS/Linux: `sudo systemctl status mongod`

### MongoDB not persisting data

1. Verify MONGODB_URI is set correctly
2. Check the application logs for connection errors
3. Make sure the database name matches: `wvp_consulting`

### Can't connect from Replit to local MongoDB

**Important:** Replit runs in the cloud and cannot directly connect to `localhost` on your PC.

Solutions:
- Use MongoDB Atlas (free cloud MongoDB)
- Use Docker MongoDB within the Replit container
- Run the entire application locally on your PC

## Testing MongoDB Connection

### Method 1: Check Application Logs

When you start the app, look for:
```
✅ Connected to MongoDB: wvp_consulting
```

### Method 2: Use MongoDB Shell

```bash
# Connect to your database
mongosh mongodb://localhost:27017/wvp_consulting

# List all collections
show collections

# View blog posts
db.blog_posts.find().pretty()

# View admin users
db.admin_users.find().pretty()

# View admin logs
db.admin_logs.find().sort({timestamp: -1}).limit(10).pretty()
```

### Method 3: Use Mongo Express

If using Docker, access http://localhost:8081 and browse:
- Database: `wvp_consulting`
- Collections: `blog_posts`, `admin_users`, `admin_logs`

## Production Deployment

For production, we recommend:

1. **MongoDB Atlas** (Free tier available)
   - Go to https://www.mongodb.com/cloud/atlas
   - Create a free M0 cluster
   - Add IP: `0.0.0.0/0` to Network Access
   - Get connection string
   - Set as MONGODB_URI in production environment

2. **Docker Deployment**
   ```bash
   # Build and run with docker-compose
   docker-compose up app mongodb -d
   ```

## Environment Variables Reference

```bash
# Required
MONGODB_URI=mongodb://localhost:27017/wvp_consulting
MONGODB_DB_NAME=wvp_consulting

# Optional (with defaults)
SESSION_SECRET=change-in-production
NODE_ENV=development
PORT=5000
```

## Need Help?

- MongoDB Documentation: https://docs.mongodb.com/
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Docker Documentation: https://docs.docker.com/
