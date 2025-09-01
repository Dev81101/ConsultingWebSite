# WVP Plus Consulting Website

A comprehensive business consulting website built with React, TypeScript, and Express.js, featuring IPARD funding programs, blog functionality, and newsletter subscriptions.

## Features

- **Professional Landing Page** with hero slider and animated counters
- **IPARD Programs** information and guidance
- **Blog System** with categories, search, and newsletter subscription
- **Contact Forms** with service selection
- **Responsive Design** optimized for all devices
- **Newsletter Subscription** in multiple locations

## Local Development Setup

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Download/Clone the project files** to your local machine

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   ```bash
   # Copy the example environment file
   copy .env.example .env
   # or on macOS/Linux:
   # cp .env.example .env
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run check` - Run TypeScript type checking

### Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── vite.ts            # Vite development setup
├── shared/                # Shared types and schemas
└── attached_assets/       # Static assets (images, etc.)
```

### Technology Stack

**Frontend:**
- React 18 with TypeScript
- Vite for development and building
- Tailwind CSS for styling
- Radix UI components
- TanStack Query for data fetching
- React Hook Form with Zod validation

**Backend:**
- Express.js with TypeScript
- In-memory data storage (easily replaceable with database)
- RESTful API design

### Development Notes

- The application uses **in-memory storage** by default, which means data resets when you restart the server
- For production use, you can easily switch to a PostgreSQL database by updating the storage configuration
- The development server supports **hot module replacement** for instant updates during development

### Building for Production

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   ```

The built application will be ready for deployment with optimized assets and server-side rendering.

### Troubleshooting

**Port already in use:**
- Change the PORT in your `.env` file or set it when starting:
  ```bash
  # Windows Command Prompt
  set PORT=3001 && npm run dev
  
  # Windows PowerShell
  $env:PORT=3001; npm run dev
  
  # macOS/Linux
  PORT=3001 npm run dev
  ```

**Dependencies issues:**
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Permission errors on Windows:**
- Run your terminal as Administrator if you encounter permission issues
- Make sure your antivirus isn't blocking the development server

## Support

For technical support or questions about the application, please contact the development team.