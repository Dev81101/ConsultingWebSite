# Quick Start - Local Development

Get the WVP Plus Consulting application running **on your PC** in 5 minutes!

## ⚠️ Important: Are You on Replit or Your PC?

**If you're currently on Replit:**
- MongoDB won't work here (Docker not supported)
- The app uses in-memory storage (temporary data)
- You need to **download this project** to your PC first
- See **BEFORE_YOU_DOWNLOAD.md** for instructions

**If you're on your PC after downloading:**
- Continue with the setup below! ✅

## Prerequisites
- Node.js (v18+)
- Docker Desktop

## Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Create `.env` File
Create a file named `.env` in the project root:

```env
MONGODB_URI=mongodb://admin:adminpassword@localhost:27017/wvp_consulting?authSource=admin
MONGODB_DB_NAME=wvp_consulting
SESSION_SECRET=your-secret-key
NODE_ENV=development
PORT=5000
```

### 3. Start MongoDB (Docker)
```bash
npm run docker:start
```

Wait 10 seconds for MongoDB to be ready.

### 4. Start the Application
```bash
npm run dev
```

### 5. Open Browser
- **Application:** http://localhost:5000
- **Admin Panel:** http://localhost:5000/admin
  - Username: `admin`
  - Password: `admin123`
- **MongoDB UI:** http://localhost:8081
  - Username: `admin`
  - Password: `pass`

## Useful Commands

```bash
# Start MongoDB
npm run docker:start

# Stop MongoDB
npm run docker:stop

# View MongoDB logs
npm run docker:logs

# Reset MongoDB (⚠️ deletes all data)
npm run docker:reset

# Test MongoDB connection
npm run test:mongodb

# Start the app
npm run dev

# Build for production
npm run build
npm start
```

## Expected Output

When MongoDB is connected, you'll see:
```
✅ Connected to MongoDB: wvp_consulting
✅ Default admin user created (username: admin, password: admin123)
```

## What's Stored in MongoDB?

✅ **Blog posts** - All articles  
✅ **Admin users** - Login credentials  
✅ **Admin logs** - Activity tracking  

⚠️ **In-memory (not persistent):**
- Contact submissions
- Newsletter subscriptions
- Achievements
- Page content

## Troubleshooting

**MongoDB won't connect?**
```bash
# Check if Docker is running
docker ps

# Restart MongoDB
npm run docker:reset
```

**Port 5000 in use?**
- Change `PORT=3000` in `.env` file

**Can't see data in Mongo Express?**
- First, create a blog post in the admin panel
- Refresh Mongo Express

## Full Documentation

See **LOCAL_SETUP_GUIDE.md** for detailed instructions.

---

**Need help?** Check the logs or MongoDB UI for debugging.

🚀 Happy coding!
