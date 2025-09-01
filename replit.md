# replit.md

## Overview

WVP Plus Consulting is a comprehensive business consulting application focused on financial services, IPARD funding programs, and business development support. The platform serves agriculture, tourism, and manufacturing sectors in Serbia, providing funding guidance, business plan development, and strategic consulting services. The application features a modern web interface with blog functionality, contact management, and detailed program information to help clients access EU funding opportunities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing without the overhead of React Router
- **UI Framework**: Radix UI primitives with shadcn/ui components for accessible, customizable design system
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for consistent theming
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful architecture with dedicated routes for blog posts, contact submissions, and program data
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot module replacement and automatic server restart during development

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Fallback Storage**: In-memory storage implementation for development and testing scenarios
- **Data Models**: Blog posts, contact submissions, user accounts, achievements, and program information

### Database Schema Design
- **Users**: Authentication and user management with username/password
- **Blog Posts**: Full content management with categories, tags, featured status, and SEO-friendly slugs
- **Contact Submissions**: Lead capture with service interest categorization
- **Achievements**: Dynamic statistics display with configurable counters
- **Shared Schema**: Common TypeScript types between frontend and backend for consistency

### Development Workflow
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reloading**: Vite development server with Express middleware integration
- **Type Safety**: End-to-end TypeScript with shared interfaces
- **Code Quality**: ESLint configuration and TypeScript strict mode
- **Asset Management**: Static file serving with proper content types

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Connection Management**: Environment-based database URL configuration

### Frontend Libraries
- **Radix UI**: Headless UI components for accessibility and customization
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Runtime type validation for forms and API responses
- **Wouter**: Lightweight routing solution for single-page application navigation
- **Lucide React**: Consistent icon system with customizable SVG icons

### Development Tools
- **Vite**: Build tool with hot module replacement and TypeScript support
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **ESBuild**: Fast JavaScript bundling for production builds
- **TypeScript**: Static type checking across the entire application stack

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **CSS Variables**: Dynamic theming support with light/dark mode capability
- **Google Fonts**: Custom typography with Poppins font family
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Validation and Forms
- **Zod**: Schema validation for both client and server-side data
- **React Hook Form**: Performant forms with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Content Management
- **Rich Text**: HTML content storage for blog posts and program descriptions
- **Image Handling**: External image URLs with Unsplash integration for placeholder content
- **SEO**: URL slug generation and meta information for blog posts