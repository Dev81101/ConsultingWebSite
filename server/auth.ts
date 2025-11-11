import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import session from 'express-session';
import { type Express, type Request, type Response, type NextFunction } from 'express';
import { MongoDBAdminStorage } from './mongodb';

const adminStorage = new MongoDBAdminStorage();

// Session configuration
export const sessionConfig = {
  secret: process.env.SESSION_SECRET || 'wvp-plus-consulting-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // HTTPS in production
    maxAge: 1000 * 60 * 60 * 24, // 24 hours
    sameSite: 'lax' as const,
  },
};

// Configure passport
export function setupPassport() {
  // Local strategy for username/password authentication
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const isValid = await adminStorage.verifyPassword(username, password);
        if (!isValid) {
          return done(null, false, { message: 'Invalid username or password' });
        }

        const user = await adminStorage.getAdminUserByUsername(username);
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        // Update last login time
        await adminStorage.updateAdminLastLogin(username);

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );

  // Serialize user to session
  passport.serializeUser((user: any, done) => {
    done(null, user.username);
  });

  // Deserialize user from session
  passport.deserializeUser(async (username: string, done) => {
    try {
      const user = await adminStorage.getAdminUserByUsername(username);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}

// Middleware to check if user is authenticated
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized - Please log in' });
}

// Middleware to log admin actions
export function createAdminLogger(adminStorage: MongoDBAdminStorage) {
  return async (
    req: Request,
    action: string,
    resourceType?: string,
    resourceId?: string,
    details?: string
  ) => {
    if (!req.user) return;

    const user = req.user as { id: string; username: string };

    try {
      await adminStorage.createAdminLog({
        adminUserId: user.id,
        adminUsername: user.username,
        action: action as any,
        resourceType,
        resourceId,
        details,
        ipAddress: req.ip || req.socket.remoteAddress,
        userAgent: req.headers['user-agent'],
      });
    } catch (error) {
      console.error('Failed to log admin action:', error);
    }
  };
}

// Initialize authentication for the app
export function initializeAuth(app: Express) {
  app.use(session(sessionConfig));
  app.use(passport.initialize());
  app.use(passport.session());
  setupPassport();
}

// Export admin storage for use in routes
export { adminStorage };
