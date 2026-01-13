# Deployment Checklist for Render

## Pre-Deployment Setup ✓

### Local Environment

- [x] Create `.env` file in `server/` directory
- [x] Create `.env.local` file in `client/` directory
- [x] Update `.gitignore` to exclude environment files
- [x] Create `.env.example` files for documentation
- [x] Remove hardcoded sensitive information from code

### Environment Variables Configured

- [x] Server: `MONGO_URI`, `PORT`, `API_PREFIX`, `NODE_ENV`
- [x] Client: `VITE_API_URL`

### Code Changes

- [x] Server uses `process.env` for configuration
- [x] Client uses `import.meta.env` for Vite variables
- [x] Error messages don't reveal hardcoded URLs

## Files Created/Modified

### New Files Created:

1. `server/.env` - Server environment variables (local dev)
2. `server/.env.example` - Template for server variables
3. `client/.env.local` - Client environment variables (local dev)
4. `client/.env.example` - Template for client variables
5. `ENV_SETUP.md` - Detailed environment setup guide
6. `RENDER_DEPLOYMENT.md` - Step-by-step Render deployment guide
7. `DEPLOYMENT_CHECKLIST.md` - This file

### Modified Files:

1. `server/.gitignore` - Cleaned up PowerShell syntax
2. `client/.gitignore` - Added explicit .env exclusion
3. `client/src/App.jsx` - Updated generic error message

## Deployment Steps

### Step 1: Prepare MongoDB Atlas

- [ ] Create MongoDB Atlas account
- [ ] Create cluster
- [ ] Create database user
- [ ] Whitelist Render IPs
- [ ] Copy connection string

### Step 2: Prepare GitHub Repository

- [ ] Commit all changes
- [ ] Push to GitHub
- [ ] Verify `.env` files are NOT in repository (git status)
- [ ] Verify `.env.example` files ARE in repository

### Step 3: Deploy Backend

- [ ] Create Render account
- [ ] Create Web Service for backend
- [ ] Connect GitHub repository
- [ ] Set root directory to `server`
- [ ] Set build command: `npm install`
- [ ] Set start command: `npm start`
- [ ] Add environment variables:
  - `MONGO_URI` = your MongoDB Atlas connection string
  - `PORT` = 5000
  - `API_PREFIX` = /api
  - `NODE_ENV` = production
- [ ] Deploy and note the URL (e.g., `https://grocery-api.onrender.com`)
- [ ] Wait for deployment to complete
- [ ] Test health endpoint: `https://grocery-api.onrender.com/api/health`

### Step 4: Deploy Frontend

- [ ] Create Web Service for frontend
- [ ] Connect GitHub repository
- [ ] Set root directory to `client`
- [ ] Set build command: `npm install && npm run build`
- [ ] Set start command: `npm run preview`
- [ ] Add environment variable:
  - `VITE_API_URL` = `https://your-backend-url.onrender.com/api`
- [ ] Deploy and note the URL
- [ ] Wait for deployment to complete

### Step 5: Post-Deployment Verification

- [ ] Visit frontend URL
- [ ] Check browser console for errors (F12)
- [ ] Test loading products
- [ ] Test loading categories
- [ ] Test adding items to cart
- [ ] Test order creation
- [ ] Check Render logs for any errors

## Environment Variables Reference

### Server (.env)

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/greencart?retryWrites=true&w=majority
PORT=5000
API_PREFIX=/api
NODE_ENV=production
```

### Client (.env.local in build process)

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## Important Security Notes

✅ **DO:**

- Use environment variables for all sensitive data
- Keep `.env` files in `.gitignore`
- Use different credentials for dev/production
- Regenerate credentials after deployment
- Enable CORS only for trusted origins
- Regularly rotate API keys and database passwords

❌ **DON'T:**

- Commit `.env` files to GitHub
- Hardcode database URLs or passwords
- Use the same credentials for dev and production
- Share environment files
- Commit production credentials anywhere

## Troubleshooting

### Issue: "Service failed to start"

1. Check Render logs for error messages
2. Verify environment variables are set correctly
3. Ensure MongoDB URI is valid
4. Check if any npm dependencies failed to install

### Issue: "Cannot connect to API"

1. Verify backend is running
2. Check frontend environment variable `VITE_API_URL`
3. Verify CORS is configured correctly
4. Check browser network tab (F12) for failed requests

### Issue: "MongoDB connection error"

1. Verify MongoDB Atlas connection string
2. Check if Render IP is whitelisted
3. Verify username and password are correct
4. Ensure database is not paused

### Issue: "Service spinning down"

- This is normal on free tier - service spins down after 15 minutes
- First request after spin-down takes ~30 seconds
- Upgrade to paid plan for always-on service

## After Deployment

1. Monitor application in Render dashboard
2. Check logs regularly for errors
3. Set up automated backups for database
4. Plan to upgrade to paid plan if needed
5. Implement error tracking (optional)
6. Set up status monitoring (optional)

## Maintenance Checklist

Weekly:

- [ ] Check Render logs for errors
- [ ] Verify MongoDB space usage

Monthly:

- [ ] Review and rotate sensitive credentials
- [ ] Update dependencies
- [ ] Backup database

Quarterly:

- [ ] Security audit of environment variables
- [ ] Review CORS configuration
- [ ] Performance optimization

## Resources

- Render Docs: https://render.com/docs
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Vite Environment Variables: https://vitejs.dev/guide/env-and-mode.html
- Node.js dotenv: https://github.com/motdotla/dotenv
