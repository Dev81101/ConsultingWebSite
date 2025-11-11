# Download & Run on Your PC - Complete Checklist

Follow this step-by-step checklist to download and run the application on your local PC with MongoDB.

## ✅ Pre-Installation Checklist

- [ ] Node.js installed (v18 or higher) - https://nodejs.org/
- [ ] Docker Desktop installed and running - https://www.docker.com/products/docker-desktop/
- [ ] Text editor (VS Code, Sublime, etc.)

## 📥 Step 1: Download the Project

### From Replit:
1. Click the **three dots (⋮)** menu at the top of Replit
2. Select **"Download as zip"**
3. Extract the zip file to a folder on your PC (e.g., `C:\Projects\wvp-consulting` or `~/Projects/wvp-consulting`)

### Verify Download:
- [ ] You have a folder with files like `package.json`, `docker-compose.yml`, etc.

## 📝 Step 2: Create Environment File

1. Open the project folder in your text editor
2. Create a new file named **`.env`** (note the dot at the beginning!)
3. Copy this content into the file:

```env
MONGODB_URI=mongodb://admin:adminpassword@localhost:27017/wvp_consulting?authSource=admin
MONGODB_DB_NAME=wvp_consulting
SESSION_SECRET=change-this-to-random-string-in-production
NODE_ENV=development
PORT=5000
```

4. Save the file

### Verify:
- [ ] File is named exactly `.env` (not `.env.txt`)
- [ ] File is in the same folder as `package.json`

## 📦 Step 3: Install Dependencies

1. Open a terminal/command prompt in the project folder
2. Run:

```bash
npm install
```

This will take a few minutes to download all packages.

### Verify:
- [ ] No error messages
- [ ] A `node_modules` folder was created
- [ ] You see "added XXX packages" message

## 🐳 Step 4: Start Docker MongoDB

In the same terminal, run:

```bash
npm run docker:start
```

Or manually:
```bash
docker-compose up mongodb mongo-express -d
```

**Wait 10-15 seconds** for MongoDB to fully start.

### Verify:
- [ ] See "Container wvp-mongodb Started"
- [ ] See "Container wvp-mongo-express Started"

Check with:
```bash
docker ps
```

You should see two containers running:
- `wvp-mongodb`
- `wvp-mongo-express`

### Access Mongo Express (Optional):
- [ ] Open browser to: http://localhost:8081
- [ ] Login with: username `admin`, password `pass`
- [ ] You should see a web interface (database will be empty at first)

## 🚀 Step 5: Start the Application

In the terminal, run:

```bash
npm run dev
```

### Expected Output:
```
[express] serving on port 5000
✅ Connected to MongoDB: wvp_consulting
✅ Default admin user created (username: admin, password: admin123)
⚠️  IMPORTANT: Change the default password immediately!
```

### Verify:
- [ ] See "✅ Connected to MongoDB: wvp_consulting"
- [ ] See "✅ Default admin user created"
- [ ] No error messages

## 🌐 Step 6: Access the Application

### Main Website:
- [ ] Open: http://localhost:5000
- [ ] You should see the WVP Plus Consulting homepage
- [ ] Navigation works
- [ ] Blog section loads

### Admin Panel:
- [ ] Open: http://localhost:5000/admin
- [ ] You see a login screen
- [ ] Login with:
  - Username: `admin`
  - Password: `admin123`
- [ ] You're redirected to the admin dashboard
- [ ] You see tabs: "Blog Posts", "Page Content", "Admin Logs"

### Create Your First Blog Post:
1. In the admin panel, click **"Blog Posts"** tab
2. Click **"Create Post"** button
3. Fill in the form:
   - Title: "Test Post"
   - Slug: "test-post"
   - Content: "This is my first blog post!"
   - Country: "Serbia"
   - Check "Published" and "Featured"
4. Click **"Save"**
5. [ ] Post appears in the list

### Verify MongoDB:
- [ ] Open: http://localhost:8081
- [ ] Click on `wvp_consulting` database
- [ ] You see collections: `blog_posts`, `admin_users`, `admin_logs`
- [ ] Click `blog_posts` → you see your test post!

## ✅ Success Checklist

You're all set if:
- [ ] Application runs on http://localhost:5000
- [ ] Admin panel login works
- [ ] Blog posts can be created
- [ ] Data appears in Mongo Express
- [ ] No error messages in terminal

## 🛠 Common Issues & Solutions

### Issue: "Cannot connect to MongoDB"

**Solution:**
```bash
# Check Docker is running
docker ps

# Restart MongoDB
npm run docker:reset

# Wait 15 seconds, then restart app
npm run dev
```

### Issue: "Port 5000 already in use"

**Solution 1:** Kill the process using port 5000

**Windows:**
```bash
netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F
```

**macOS/Linux:**
```bash
lsof -ti:5000 | xargs kill -9
```

**Solution 2:** Change the port in `.env`:
```env
PORT=3000
```

### Issue: ".env file not found"

**Symptoms:**
```
No MONGODB_URI environment variable set. Skipping MongoDB connection.
```

**Solution:**
- Make sure `.env` file exists in the project root
- File must be named exactly `.env` (not `.env.txt`)
- Restart the application after creating it

### Issue: "npm: command not found"

**Solution:**
- Install Node.js from https://nodejs.org/
- Restart your terminal
- Verify: `node --version`

### Issue: "docker: command not found"

**Solution:**
- Install Docker Desktop from https://www.docker.com/products/docker-desktop/
- Start Docker Desktop application
- Verify: `docker --version`

### Issue: Empty database in Mongo Express

This is **normal**! Collections are created when:
1. You start the app (creates `admin_users`)
2. You create your first blog post (creates `blog_posts`)
3. You perform admin actions (creates `admin_logs`)

### Issue: Can't login to admin panel

**Solution:**
```bash
# Reset the database
npm run docker:reset

# Restart the app
npm run dev

# You should see: "✅ Default admin user created"
```

## 📊 What's Stored Where?

### In MongoDB (Persistent):
- ✅ Blog posts
- ✅ Admin users (credentials)
- ✅ Admin activity logs

### In Memory (Lost on restart):
- ⚠️ Contact form submissions
- ⚠️ Newsletter subscriptions
- ⚠️ Achievements/statistics
- ⚠️ Page content

## 🔄 Daily Development Workflow

```bash
# 1. Start MongoDB (if not running)
npm run docker:start

# 2. Start the application
npm run dev

# 3. Develop and make changes (hot reload is enabled!)

# 4. Stop the application
# Press Ctrl+C in terminal

# 5. Stop MongoDB (optional)
npm run docker:stop
```

## 🎯 Next Steps

Now that everything works:

1. **Change the default admin password** in the admin panel
2. **Create your blog posts** with real content
3. **Customize the application** for your needs
4. **Explore the multi-language features**
5. **View the MongoDB data** in Mongo Express

## 📚 Documentation Files

- **README_LOCAL.md** - Quick start guide
- **LOCAL_SETUP_GUIDE.md** - Detailed setup instructions
- **MONGODB_SETUP.md** - MongoDB configuration guide
- **docker-compose.yml** - Docker configuration
- **.env.example** - Environment variables template

## 🆘 Still Need Help?

1. Check the terminal logs for error messages
2. Check MongoDB logs: `npm run docker:logs`
3. Verify Docker is running: `docker ps`
4. Test MongoDB connection: `npm run test:mongodb`
5. Reset everything and start fresh: `npm run docker:reset`

---

**Congratulations! Your application is running locally with MongoDB!** 🎉

You now have:
- ✅ Full-stack application running
- ✅ MongoDB database with persistent storage
- ✅ Admin panel for content management
- ✅ Multi-language support
- ✅ Docker containerized database

Start building! 🚀
