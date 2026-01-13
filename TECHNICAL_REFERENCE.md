# Technical Reference: How Environment Variables Work

## Overview

Environment variables are key-value pairs that store configuration without hardcoding values in your code. This is essential for:

- Keeping credentials secure
- Using different settings for dev/production
- Deploying to Render without code changes

## How Your Project Uses Them

### Server (Node.js with dotenv)

**File: `server/src/index.js`**

```javascript
require("dotenv").config(); // Load .env file into process.env

const PORT = process.env.PORT || 5000; // Access variables
const apiPrefix = process.env.API_PREFIX || "/api";

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

**File: `server/src/config/db.js`**

```javascript
const connectDB = async () => {
  const mongoUri =
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/greencart";
  // Connect to database using URI from environment
};
```

### Client (Vite with React)

**File: `client/src/services/api.js`**

```javascript
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  timeout: 8000,
});
```

Vite automatically:

1. Reads `.env.local` during build
2. Injects values into `import.meta.env.*`
3. Only exposes variables prefixed with `VITE_`

## Loading Mechanism

### Server (Node.js)

```
1. Process starts
   ↓
2. require('dotenv').config() executes
   ↓
3. Reads .env file from filesystem
   ↓
4. Parses KEY=VALUE pairs
   ↓
5. Populates process.env object
   ↓
6. Code accesses via process.env.KEY
```

**Priority Order:**

1. Environment variables already set in OS
2. Variables from `.env` file
3. Default values in code (fallback)

### Client (Vite)

```
1. npm run dev or npm run build
   ↓
2. Vite reads .env.local
   ↓
3. Parses VITE_KEY=VALUE pairs
   ↓
4. Injects into import.meta.env during compilation
   ↓
5. Code accesses via import.meta.env.VITE_KEY
```

**Important:** Client variables are compiled into the build - they're NOT loaded at runtime.

## Why Different Prefixes?

### Server: `process.env.VARIABLE_NAME`

- Works at runtime
- Can read any variable name
- Loaded from `.env` file via dotenv

### Client: `import.meta.env.VITE_VARIABLE_NAME`

- Requires `VITE_` prefix
- Compiled during build (NOT at runtime)
- Only prefixed variables are exposed (security)

## Your Environment Files Structure

```
server/
├── .env                    ← ACTUAL VALUES (Git-ignored)
│   ├── MONGO_URI
│   ├── PORT
│   ├── API_PREFIX
│   └── NODE_ENV
│
└── .env.example            ← TEMPLATE (Committed to Git)
    └── Shows required keys with example values

client/
├── .env.local              ← ACTUAL VALUES (Git-ignored)
│   └── VITE_API_URL
│
└── .env.example            ← TEMPLATE (Committed to Git)
    └── Shows required keys with example values
```

## How Render Provides Variables

```
Render Web Service Settings
         ↓
   Environment Tab
         ↓
   Add Environment Variable
         ↓
   Key=Value pairs stored securely
         ↓
   Service starts with vars in process.env
         ↓
   Your code accesses via process.env.KEY
```

Unlike local development (where .env file is read), Render:

- Injects variables directly into the service's environment
- Variables are never stored in files on Render
- Each time service restarts, variables are reloaded

## Fallback Values (Defaults)

Your code uses fallback pattern:

```javascript
// If environment variable exists, use it
// Otherwise, use default value
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/greencart";
```

This allows:

- Running locally without `.env` file (uses defaults)
- Production override via environment variables
- Safe defaults for development

## Local Development Flow

```
1. Create server/.env with local values
2. npm run dev in server directory
3. dotenv loads .env → process.env
4. Code reads from process.env
5. Connects to local MongoDB ✓

1. Create client/.env.local with local API URL
2. npm run dev in client directory
3. Vite reads .env.local → import.meta.env
4. Code compiled with API URL injected
5. Frontend requests go to local server ✓
```

## Production (Render) Flow

```
1. Push code to GitHub (NO .env files)
2. Render creates Web Service
3. You set Environment Variables in dashboard
4. Render starts service with variables set
5. Service starts:
   - process.env has Render's variables
   - Code connects to production MongoDB ✓

For client:
1. You set VITE_API_URL in Render dashboard
2. npm run build includes VITE_API_URL value
3. Frontend built with production API URL
4. Requests go to production backend ✓
```

## Security Details

### Why .env files aren't committed:

```
BAD (if .env is committed):
- Database password visible in Git history
- Anyone with repo access has production credentials
- Can't change credentials without new commit
- Credentials remain in Git history forever

GOOD (with .gitignore):
- Only .env.example (template) is committed
- Actual passwords stored locally only
- Render uses dashboard (encrypted storage)
- Easy to rotate credentials
- Old commits don't expose secrets
```

### Environment Variable Encryption:

**Local (.env file):**

- Stored unencrypted on your machine
- Only you have access (file permissions)
- Never committed to Git

**Render (Environment Tab):**

- Encrypted at rest in Render's database
- Encrypted in transit (HTTPS)
- Only shown when you're logged in
- Not visible in logs or error messages

## Common Patterns

### Pattern 1: Required Variables

```javascript
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("MONGO_URI environment variable is required");
}
```

### Pattern 2: Optional with Defaults

```javascript
const port = process.env.PORT || 5000;
const logLevel = process.env.LOG_LEVEL || "info";
```

### Pattern 3: Different Values per Environment

```javascript
const isDevelopment = process.env.NODE_ENV === "development";
const apiUrl = isDevelopment
  ? "http://localhost:5000/api"
  : process.env.VITE_API_URL;
```

### Pattern 4: Parsing Values

```javascript
const port = parseInt(process.env.PORT, 10) || 5000;
const enableDebug = process.env.DEBUG === "true";
```

## Troubleshooting

### "Variable is undefined"

- Check spelling (case-sensitive)
- Ensure `.env` file exists
- Restart server after creating `.env`
- Verify variable name doesn't have typos

### Client variable undefined

- Must start with `VITE_`
- Must be in `.env.local` before build
- Rebuild after changing `.env.local`
- Check browser console, not terminal

### Different values locally vs production

- Local: Check `.env` file contents
- Production: Check Render dashboard
- Remember to restart services after changes

### "MONGO_URI is not a valid MongoDB URI"

- Check MongoDB Atlas connection string
- Verify username and password are correct
- Ensure database credentials are URL-encoded
- Check IP whitelist in MongoDB Atlas

## Best Practices

1. **Use descriptive names**

   ```
   ✓ MONGO_URI
   ✓ API_TIMEOUT
   ✗ db
   ✗ timeout
   ```

2. **Group related variables**

   ```
   # Database
   MONGO_URI=...

   # Server
   PORT=5000
   API_PREFIX=/api
   ```

3. **Document in .env.example**

   ```
   # Required. MongoDB connection string
   MONGO_URI=mongodb://...

   # Optional. Default: 5000
   PORT=5000
   ```

4. **Use different credentials per environment**

   ```
   Development: dev@example.com / dev_password
   Production: prod@example.com / prod_password_longer_and_stronger
   ```

5. **Never hardcode values that might change**
   ```
   ✗ const apiUrl = 'http://localhost:5000/api';
   ✓ const apiUrl = import.meta.env.VITE_API_URL;
   ```

## File Syntax

### `.env` file format

```
# Comments start with #
KEY=value
ANOTHER_KEY=another value

# No spaces around =
CORRECT=value
WRONG = value  # This won't work correctly

# Strings don't need quotes (but can have them)
STRING=hello world
QUOTED="hello world"
```

### `.env.example` (same format)

```
# Template file - describe what each variable is for
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/greencart?retryWrites=true&w=majority
PORT=5000
```

## Summary

| Aspect                | Local Dev          | Production (Render)          |
| --------------------- | ------------------ | ---------------------------- |
| **Variable Source**   | `.env` file        | Render dashboard             |
| **Stored Where**      | Your computer      | Render's servers             |
| **Encrypted**         | No                 | Yes                          |
| **How Loaded**        | dotenv reads file  | Render injects into process  |
| **Visible In Code**   | No (good!)         | No (good!)                   |
| **How Changed**       | Edit .env, restart | Edit dashboard, auto-restart |
| **Example Committed** | Yes (.env.example) | No (only settings)           |

Your project is properly configured! 🚀
