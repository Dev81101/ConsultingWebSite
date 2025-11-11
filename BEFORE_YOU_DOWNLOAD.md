# ⚠️ IMPORTANT: Read This BEFORE Downloading

## 🎯 You're Currently on Replit

You're seeing this message:
```
No MONGODB_URI environment variable set. Skipping MongoDB connection.
```

This is **completely normal** because:
- ✅ You're on Replit (cloud environment)
- ✅ Docker is not available on Replit
- ✅ The app is using in-memory storage (fallback mode)

## 📥 What You Need to Do

To run this app **on your PC with MongoDB**, follow these steps:

### Step 1: Download This Project

1. Click the **⋮** (three dots) menu at the top of Replit
2. Select **"Download as zip"**
3. Extract the zip file to a folder on your PC (e.g., `C:\Projects\wvp-consulting`)

### Step 2: Create `.env` File on Your PC

**On your PC** (not on Replit!), create a file named `.env` in the project root folder.

Copy the contents from **`ENV_FILE_TEMPLATE.txt`** into your `.env` file, or copy this:

```env
MONGODB_URI=mongodb://admin:adminpassword@localhost:27017/wvp_consulting?authSource=admin
MONGODB_DB_NAME=wvp_consulting
SESSION_SECRET=dev-secret-key-change-in-production
NODE_ENV=development
PORT=5000
MONGO_ROOT_USER=admin
MONGO_ROOT_PASSWORD=adminpassword
MONGO_PORT=27017
MONGO_EXPRESS_PORT=8081
MONGO_EXPRESS_USER=admin
MONGO_EXPRESS_PASSWORD=pass
```

**Critical:**
- File must be named **exactly** `.env` (with the dot at the start)
- Must be in the **same folder** as `package.json`
- Do **NOT** create this file on Replit!

### Step 3: Install Prerequisites on Your PC

You need:
- **Node.js** (v18+) - https://nodejs.org/
- **Docker Desktop** - https://www.docker.com/products/docker-desktop/

### Step 4: Run on Your PC

Open terminal in the project folder:

```bash
# Install dependencies
npm install

# Start MongoDB (Docker)
npm run docker:start

# Wait 10 seconds

# Run the application
npm run dev
```

### Step 5: Verify Connection

When it works, you'll see:
```
✅ Connected to MongoDB: wvp_consulting
✅ Default admin user created (username: admin, password: admin123)
```

Instead of:
```
No MONGODB_URI environment variable set. Skipping MongoDB connection.
```

## 🚫 Don't Try to Run with MongoDB on Replit

**Replit doesn't support:**
- ❌ Docker (needed for local MongoDB)
- ❌ `.env` files for security reasons

**On Replit:**
- The app runs with in-memory storage (data is lost on restart)
- This is fine for development/testing
- For permanent data, download to your PC

## 📚 Documentation Files

Once you download the project, follow these guides:

1. **DOWNLOAD_AND_RUN.md** - Complete step-by-step checklist
2. **LOCAL_SETUP_GUIDE.md** - Detailed setup instructions
3. **README_LOCAL.md** - Quick start guide
4. **ENV_FILE_TEMPLATE.txt** - Copy this to create your `.env` file

## 🎯 Summary

| Location | MongoDB | Storage | How to Run |
|----------|---------|---------|------------|
| **Replit** | ❌ Not available | In-memory (temporary) | Just click "Run" |
| **Your PC** | ✅ Docker MongoDB | Persistent database | Download + follow guides |

## 🚀 Next Steps

1. ✅ **Download** this project to your PC
2. ✅ **Create** `.env` file (use ENV_FILE_TEMPLATE.txt)
3. ✅ **Install** Node.js and Docker Desktop
4. ✅ **Follow** DOWNLOAD_AND_RUN.md for complete instructions

Once you're on your PC, you'll have:
- ✅ MongoDB with persistent storage
- ✅ Mongo Express web UI
- ✅ Admin panel with logging
- ✅ Full-featured application

---

**Ready to download?** Click the ⋮ menu at the top → "Download as zip" 📦
