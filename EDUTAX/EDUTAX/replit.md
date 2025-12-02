# EDUTAX - Online Taxation Education Platform

## Overview

EDUTAX is an online education platform focused on taxation courses, specifically offering Brevet A and Brevet B certification programs. The platform provides structured learning modules covering tax fundamentals, individual income tax (PPh 21), corporate taxes, and e-Filing. The application features a modern, professional design inspired by leading education platforms like Coursera and Udemy, with a clean navy and yellow color scheme that emphasizes professionalism and accessibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing, distinguishing between authenticated and unauthenticated user experiences. The routing logic conditionally renders Landing vs Home pages based on authentication state.

**State Management**: TanStack Query (React Query) for server state management with configured defaults including no automatic refetching and infinite stale time, optimizing for predictable data fetching behavior.

**UI Component Library**: Shadcn UI with Radix UI primitives, configured in "new-york" style. The component system uses Tailwind CSS with CSS variables for theming, supporting a comprehensive set of pre-built components (accordion, dialog, dropdown, form elements, etc.).

**Styling System**: Tailwind CSS with custom configuration extending the default theme with specific brand colors (primary navy #2B3A7E, accent yellow #FFD700) and custom border radius values. The design system implements a sophisticated color token system using HSL values with CSS custom properties, enabling consistent theming across light/dark modes.

**Design Approach**: Reference-based design following modern education platform patterns with geometric sans-serif typography (Inter font family), structured grid layouts, and hierarchical spacing. The system uses numbered badges (01-06) for benefits sections and maintains consistent card-based layouts for courses and content modules.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript, configured for both development and production environments. Development mode uses Vite middleware for HMR, while production serves pre-built static assets.

**API Structure**: RESTful API endpoints organized by resource type:
- Authentication endpoints (`/api/auth/*`) - user session management
- Course endpoints (`/api/courses`, `/api/courses/:slug`) - course catalog and details
- All endpoints use JSON for request/response bodies with automatic error handling

**Development vs Production**: Separate entry points (`index-dev.ts` and `index-prod.ts`) handle environment-specific server configuration. Development mode integrates Vite's development server with middleware mode, while production serves static files from the dist directory.

### Database Architecture

**ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions and automatic TypeScript type generation.

**Database Provider**: Neon serverless PostgreSQL with WebSocket support for connection pooling.

**Schema Design**:
- **Users table**: Stores user profiles with fields for email, names, profile images, and timestamps
- **Sessions table**: Manages authentication sessions (required for Replit Auth) with session ID, data, and expiration
- **Courses table**: Contains course metadata including slug, title, description, difficulty level, duration, instructor, and thumbnail
- **Modules table**: Organizes course content into sequential modules with order tracking
- **Lessons table**: Individual lessons within modules, structured hierarchically
- **Enrollments table**: Tracks user course enrollments with progress and completion status

**Data Seeding**: The storage layer includes a `seedCourses()` method that initializes the database with default course content on server startup, ensuring the platform has demonstration data available.

### Authentication System

**Provider**: Replit Auth using OpenID Connect (OIDC) protocol with Passport.js strategy.

**Session Management**: Express-session with PostgreSQL session store (connect-pg-simple), configured for 7-day session lifetime with secure cookies in production and lax SameSite policy in development.

**Authentication Flow**: 
1. OIDC discovery endpoint queries Replit's identity provider
2. User authentication creates session with claims (user ID, email, profile data)
3. Access and refresh tokens stored in user session
4. `isAuthenticated` middleware protects routes requiring authentication
5. Client-side `useAuth` hook manages authentication state via React Query

**User Data Flow**: Authentication creates/updates user records in the database through the `upsertUser` operation, maintaining user profiles synchronized with OIDC claims.

### Storage Layer

**Pattern**: Repository pattern implementation with `IStorage` interface defining all database operations, enabling easy testing and potential storage backend swaps.

**Operations**:
- User management (get, upsert)
- Course operations (list all, get by slug, get with modules)
- Module and lesson retrieval
- Enrollment management (create, check status, list user enrollments)

**Data Access**: Uses Drizzle ORM query builder with type-safe operations, leveraging Drizzle's `eq`, `and` operators for filtering and relational queries.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (accordion, dialog, dropdown-menu, popover, select, etc.) providing the foundation for the Shadcn UI implementation
- **Lucide React**: Icon library providing consistent iconography across the application
- **class-variance-authority (CVA)**: Utility for managing component variants and conditional styling
- **cmdk**: Command palette component for searchable command menus

### Development Tools
- **Vite**: Build tool and development server with HMR support
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling (Replit-specific)
- **@replit/vite-plugin-dev-banner**: Development banner (Replit-specific)

### Form Management
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Integration layer for schema validation
- **Zod**: TypeScript-first schema validation used with Drizzle for runtime type checking

### Database Tools
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver with WebSocket support
- **drizzle-orm**: TypeScript ORM for type-safe database operations
- **drizzle-kit**: CLI tool for migrations and schema management
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Authentication
- **openid-client**: OpenID Connect client implementation
- **passport**: Authentication middleware framework
- **express-session**: Session management middleware
- **memoizee**: Caching utility for OIDC configuration

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **ws**: WebSocket implementation for Neon database connections
- **clsx**: Utility for conditional className construction
- **tailwind-merge**: Tailwind class merging utility

### Asset Management
The application references assets through Vite's import system with an `@assets` alias, including course illustrations and page graphics stored in the `attached_assets` directory.