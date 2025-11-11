# Local Development Setup Guide

This guide will help you run the WVP Plus Consulting application on your local PC with MongoDB.

## Prerequisites

- **Node.js** (v18 or higher) - Download from https://nodejs.org/
- **Docker Desktop** - Download from https://www.docker.com/products/docker-desktop/
- **Git** (optional) - For cloning the repository

## Step 1: Download the Project

If you're on Replit, download the entire project:
1. Click the three dots menu (⋮) at the top
2. Select "Download as zip"
3. Extract the zip file to your desired location on your PC

Or if using Git:
```bash
git clone <your-repository-url>
cd <project-folder>
```

## Step 2: Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

This will install all required packages.

## Step 3: Set Up Environment Variables

Create a `.env` file in the **project root directory** with this content:

```env
# MongoDB Configuration (Docker)
MONGODB_URI=mongodb://admin:adminpassword@localhost:27017/wvp_consulting?authSource=admin
MONGODB_DB_NAME=wvp_consulting

# Session Secret (change this in production!)
SESSION_SECRET=your-super-secret-key-change-me

# Node Environment
NODE_ENV=development

# Server Port
PORT=5000
```

**Important:** Make sure the `.env` file is in the same folder as `package.json`

## Step 4: Start Docker MongoDB

Open a terminal in the project folder and run:

```bash
# Start MongoDB and Mongo Express
docker-compose up mongodb mongo-express -d
```

This will:
- ✅ Start MongoDB on `localhost:27017`
- ✅ Start Mongo Express (web UI) on `localhost:8081`
- ✅ Create persistent volumes for data storage

### Verify MongoDB is Running

```bash
# Check if containers are running
docker-compose ps

# You should see:
# wvp-mongodb         running
# wvp-mongo-express   running
```

### Access Mongo Express

Open your browser to: **http://localhost:8081**

Login credentials:
- Username: `admin`
- Password: `pass`

Initially, the database will be empty. Collections will be created when you start the application.

## Step 5: Start the Application

In the project folder, run:

```bash
npm run dev
```

You should see output like:

```
[express] serving on port 5000
✅ Connected to MongoDB: wvp_consulting
✅ Default admin user created (username: admin, password: admin123)
⚠️  IMPORTANT: Change the default password immediately!
```

## Step 6: Access the Application

Open your browser to: **http://localhost:5000**

### Access Admin Panel

1. Go to: **http://localhost:5000/admin**
2. Login with:
   - Username: `admin`
   - Password: `admin123`
3. **Important:** Change the default password after first login!

### View MongoDB Data

1. Go to: **http://localhost:8081** (Mongo Express)
2. Click on `wvp_consulting` database
3. You'll see collections:
   - `admin_users` - Admin login credentials
   - `admin_logs` - All admin activity logs
   - `blog_posts` - Blog articles

## What Gets Stored in MongoDB

✅ **Persistent (survives restarts):**
- Blog posts with all content
- Admin user accounts
- Admin activity logs

⚠️ **In-Memory (resets on restart):**
- Contact form submissions
- Newsletter subscriptions
- Achievements/statistics
- Page content

## Troubleshooting

### Problem: "Cannot connect to MongoDB"

**Solutions:**
1. Check if Docker is running:
   ```bash
   docker --version
   docker-compose ps
   ```

2. Restart MongoDB:
   ```bash
   docker-compose restart mongodb
   ```

3. Check MongoDB logs:
   ```bash
   docker-compose logs mongodb
   ```

### Problem: "Port 5000 already in use"

**Solution:** Kill the process using port 5000:

**Windows:**
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**macOS/Linux:**
```bash
lsof -ti:5000 | xargs kill -9
```

Or change the port in `.env`:
```env
PORT=3000
```

### Problem: "No collections in MongoDB"

This is **normal** when you first start. Collections are created automatically when:
- You create your first blog post in the admin panel
- The default admin user is created
- You perform admin actions

### Problem: ".env file not being read"

Make sure:
1. The file is named exactly `.env` (not `.env.txt`)
2. It's in the same folder as `package.json`
3. You restarted the application after creating it

### Problem: "Admin login not working"

1. Check MongoDB is connected (look for "✅ Connected to MongoDB" in logs)
2. Verify the default admin was created
3. Try resetting the database:
   ```bash
   docker-compose down -v
   docker-compose up mongodb -d
   npm run dev
   ```

## Stopping the Application

### Stop the Node.js app:
Press `Ctrl+C` in the terminal where `npm run dev` is running

### Stop Docker MongoDB:
```bash
docker-compose down
```

### Stop and remove all data (⚠️ WARNING: Deletes all MongoDB data):
```bash
docker-compose down -v
```

## Production Deployment

For production deployment, see the main `docker-compose.yml` file.

To deploy the full application with Docker:

```bash
# Build and start everything
docker-compose up -d

# The app will be available at:
# - Application: http://localhost:5000
# - Mongo Express: http://localhost:8081
```

## Useful Commands

```bash
# View all Docker containers
docker-compose ps

# View MongoDB logs
docker-compose logs mongodb

# View application logs (when running in Docker)
docker-compose logs app

# Restart MongoDB
docker-compose restart mongodb

# Stop all services
docker-compose down

# Start in background
docker-compose up -d mongodb mongo-express

# Remove all containers and volumes (fresh start)
docker-compose down -v
```

## Directory Structure

```
wvp-plus-consulting/
├── client/              # React frontend
├── server/              # Express backend
├── shared/              # Shared TypeScript types
├── docker-compose.yml   # Docker configuration
├── package.json         # Dependencies
├── .env                 # Environment variables (create this!)
└── README.md
```

## Need Help?

- Check MongoDB connection: Look for "✅ Connected to MongoDB" in console
- View Mongo Express: http://localhost:8081
- Check Docker status: `docker-compose ps`
- View logs: `docker-compose logs -f`

## Next Steps

1. ✅ Login to admin panel
2. ✅ Create your first blog post
3. ✅ Check Mongo Express to see the data
4. ✅ Explore the multi-language features
5. ✅ Customize the content for your needs

Enjoy developing! 🚀
