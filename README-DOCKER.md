# 🐳 Docker Setup for WVP Plus Consulting

Complete Docker configuration for running the WVP Plus Consulting multi-country, multi-language business consulting platform locally.

## 🏗️ Architecture

This application uses a **hybrid storage architecture**:
- **MongoDB** - Persists blog posts with full CRUD operations
- **In-memory storage** - Handles users, contact submissions, achievements, newsletter subscriptions, and page content

**Note:** In-memory data is reset when the container restarts. Blog posts in MongoDB persist across restarts.

## 📋 Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (version 20.10+)
- [Docker Compose](https://docs.docker.com/compose/install/) (version 2.0+)
- 2GB RAM minimum
- 5GB free disk space

## 🚀 Quick Start

### 1. Download/Clone the Project

```bash
# If using Git
git clone <your-repo-url>
cd wvp-plus-consulting

# Or extract the downloaded ZIP file
```

### 2. Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and set your preferences (optional - defaults work fine)
nano .env  # or use your preferred editor
```

**Important:** Change `SESSION_SECRET` in production!

### 3. Start the Application

```bash
# Production mode (recommended)
docker compose up

# Or run in background
docker compose up -d

# View logs
docker compose logs -f app
```

That's it! 🎉

The application will be available at:
- **Application**: http://localhost:5000
- **MongoDB**: localhost:27017

Default blog posts will be seeded automatically on first run!

## 🛠️ Development Mode

For development with hot-reload:

```bash
# Start in development mode
docker compose --profile dev up app-dev

# Or in background
docker compose --profile dev up -d app-dev
```

Development mode features:
- ✅ Hot module replacement (HMR)
- ✅ Source code mounted as volume
- ✅ Automatic restart on file changes
- ✅ Development tools enabled

## 📊 Available Services

### Production Stack
```bash
docker compose up
```
- `mongodb` - MongoDB 7 database
- `app` - Production Node.js application

### Development Stack
```bash
docker compose --profile dev up
```
- `mongodb` - MongoDB 7 database
- `app-dev` - Development Node.js application with hot-reload

## 🔧 Common Commands

### Application Management

```bash
# Start services
docker compose up

# Start in background
docker compose up -d

# Stop services
docker compose down

# Stop and remove volumes (⚠️ deletes database data)
docker compose down -v

# Restart services
docker compose restart

# View logs
docker compose logs -f

# View specific service logs
docker compose logs -f app
docker compose logs -f mongodb
```

### Database Management

```bash
# Access MongoDB shell
docker compose exec mongodb mongosh -u admin -p adminpassword --authenticationDatabase admin wvp_consulting

# View all blog posts
docker compose exec mongodb mongosh -u admin -p adminpassword --authenticationDatabase admin wvp_consulting --eval "db.blogPosts.find().pretty()"

# Count blog posts
docker compose exec mongodb mongosh -u admin -p adminpassword --authenticationDatabase admin wvp_consulting --eval "db.blogPosts.countDocuments()"

# Backup MongoDB database
docker compose exec mongodb mongodump --username admin --password adminpassword --authenticationDatabase admin --db wvp_consulting --out /dump
docker compose cp mongodb:/dump ./mongodb-backup

# Restore MongoDB database
docker compose cp ./mongodb-backup mongodb:/dump
docker compose exec mongodb mongorestore --username admin --password adminpassword --authenticationDatabase admin /dump
```

### Application Commands

```bash
# Install new NPM package (development mode)
docker compose exec app-dev npm install <package-name>

# Run TypeScript type checking
docker compose exec app npm run check

# Access application shell
docker compose exec app sh

# Rebuild containers after code changes
docker compose build

# Rebuild and restart
docker compose up --build
```

## 🌍 Multi-Country & Multi-Language Features

The application supports:

**Countries:**
- 🇷🇸 Serbia (`/rs`) - Српски / English
- 🇲🇰 North Macedonia (`/mk`) - Македонски / English
- 🇲🇪 Montenegro (`/me`) - Crnogorski / English
- 🇧🇦 Bosnia & Herzegovina (`/ba`) - Bosanski / English

**Access routes:**
- http://localhost:5000/rs - Serbia (default: Serbian)
- http://localhost:5000/mk - North Macedonia (default: Macedonian)
- http://localhost:5000/me - Montenegro (default: Montenegrin)
- http://localhost:5000/ba - Bosnia & Herzegovina (default: Bosnian)

## 🔐 Environment Variables

Key variables in `.env`:

| Variable | Default | Description |
|----------|---------|-------------|
| `MONGO_ROOT_USER` | admin | MongoDB root username |
| `MONGO_ROOT_PASSWORD` | adminpassword | MongoDB root password |
| `MONGODB_DB_NAME` | wvp_consulting | MongoDB database name |
| `MONGO_PORT` | 27017 | MongoDB port |
| `APP_PORT` | 5000 | Application port |
| `SESSION_SECRET` | (random) | Session encryption key |
| `NODE_ENV` | production | Environment mode |

## 🧪 Health Checks

The application includes health checks:

```bash
# Check application health (if health endpoint exists)
curl http://localhost:5000/

# Check MongoDB health
docker compose exec mongodb mongosh --eval "db.adminCommand('ping')"

# View container health status
docker compose ps
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Change ports in .env
APP_PORT=8080
MONGO_PORT=27018

# Then restart
docker compose down
docker compose up
```

### Database Connection Issues

```bash
# Check database is running
docker compose ps

# Check database logs
docker compose logs mongodb

# Restart database
docker compose restart mongodb

# The app gracefully falls back to in-memory storage if MongoDB is unavailable
```

### Application Won't Start

```bash
# Check logs
docker compose logs app

# Rebuild from scratch
docker compose down -v
docker compose build --no-cache
docker compose up
```

### Clear Everything and Start Fresh

```bash
# ⚠️ WARNING: This deletes all data!
docker compose down -v
docker system prune -a
docker compose up --build
```

## 📦 What's Included

- ✅ **Frontend**: React 18 + Vite + TypeScript + Tailwind CSS
- ✅ **Backend**: Express.js + TypeScript
- ✅ **Database**: MongoDB 7 for blog posts + In-memory storage for other data
- ✅ **UI Components**: Radix UI + shadcn/ui
- ✅ **Routing**: Multi-country routing system (`/rs`, `/mk`, `/me`, `/ba`)
- ✅ **i18n**: Complete translation system for 5 languages (Serbian, English, Macedonian, Montenegrin, Bosnian)
- ✅ **Forms**: React Hook Form + Zod validation
- ✅ **State Management**: TanStack Query
- ✅ **Graceful Fallback**: App works without MongoDB (uses in-memory storage)

## 🚢 Production Deployment

For production deployment:

1. **Set strong secrets:**
   ```bash
   SESSION_SECRET=$(openssl rand -base64 32)
   MONGO_ROOT_PASSWORD=$(openssl rand -base64 32)
   ```

2. **Use production compose file:**
   ```bash
   docker compose -f docker-compose.yml up -d
   ```

3. **Enable SSL/TLS** with nginx or reverse proxy

4. **Set up backups** for MongoDB volume (blog posts)

5. **Monitor logs:**
   ```bash
   docker compose logs -f --tail=100
   ```

6. **Important:** Consider implementing persistent storage for contact submissions, users, and other in-memory data if needed for your use case

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)

## 💡 Tips

- Use `docker compose up -d` to run in background
- Use `docker compose logs -f` to watch logs in real-time
- Blog post data persists in Docker volume `mongodb_data`
- Other data (contacts, users, achievements) resets on container restart (in-memory)
- To reset database: `docker compose down -v` (deletes all blog posts!)
- For production, always change default passwords
- Use `.env` file for configuration, never commit it to Git
- The app works without MongoDB - it gracefully falls back to in-memory storage

## 🆘 Support

If you encounter issues:

1. Check logs: `docker compose logs`
2. Verify services are running: `docker compose ps`
3. Check environment variables: `docker compose config`
4. Rebuild if needed: `docker compose up --build`

---

**Happy coding! 🚀**
