# WVP Plus Consulting

Multi-country business consulting platform with MongoDB persistence and Docker deployment.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` and update if needed:
```bash
cp .env.example .env
```

### 3. Start with Docker
```bash
# Start MongoDB and application
docker-compose up -d

# View logs
docker-compose logs -f app
```

The application will be available at:
- **App:** http://localhost:5000
- **Admin Panel:** http://localhost:5000/admin (username: `admin`, password: `admin123`)
- **Mongo Express:** http://localhost:8081 (username: `admin`, password: `pass`)

### 4. Local Development (Without Docker)
```bash
# Start only MongoDB
docker-compose up mongodb mongo-express -d

# Run app locally
npm run dev
```

## What's Stored in MongoDB

- ✅ **Blog Posts** - All articles with content, categories, tags
- ✅ **Admin Users** - Secure login credentials (bcrypt hashed)
- ✅ **Admin Logs** - Activity tracking for all admin actions

Other data (contacts, achievements, page content) uses in-memory storage.

## Useful Commands

```bash
# Start everything
docker-compose up -d

# Stop everything
docker-compose down

# Reset database (⚠️ deletes all data)
docker-compose down -v

# View logs
docker-compose logs -f

# Start only MongoDB
docker-compose up mongodb mongo-express -d

# Development mode
npm run dev
```

## Project Structure

```
├── client/              # React frontend
├── server/              # Express backend
├── shared/              # Shared TypeScript types
├── docker-compose.yml   # Docker configuration
└── .env                 # Environment variables
```

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB (Docker)
- **Authentication:** Passport.js with bcrypt

## Environment Variables

See `.env.example` for all available configuration options.

---

Built with ❤️ for business consulting services in the Balkans region.
