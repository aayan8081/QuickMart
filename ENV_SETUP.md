# Environment Configuration Guide

## Overview

This project uses environment variables to manage sensitive information and configuration. All environment variables should be defined in `.env` files (which are ignored by Git).

## Server Configuration

### Setup

1. Create a `.env` file in the `server/` directory (copy from `.env.example`)
2. Configure the following variables:

```env
# MongoDB Configuration
MONGO_URI=mongodb://127.0.0.1:27017/greencart

# Server Configuration
PORT=5000
API_PREFIX=/api

# Environment
NODE_ENV=development
```

### Variable Descriptions

- **MONGO_URI**: MongoDB connection string
  - Local: `mongodb://127.0.0.1:27017/greencart`
  - MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/greencart?retryWrites=true&w=majority`
- **PORT**: Server port (default: 5000)
- **API_PREFIX**: API route prefix (default: /api)
- **NODE_ENV**: Environment (development/production)

## Client Configuration

### Setup

1. Create a `.env.local` file in the `client/` directory
2. Configure the following variable:

```env
VITE_API_URL=http://localhost:5000/api
```

### Variable Descriptions

- **VITE_API_URL**: Backend API URL
  - Local: `http://localhost:5000/api`
  - Production (Render): `https://your-backend-url.onrender.com/api`

## Deploying to Render

### Backend Deployment

1. **Create a Render account** at https://render.com

2. **Create a new Web Service**:

   - Connect your GitHub repository
   - Select the `server` directory as root
   - Set Build command: `npm install`
   - Set Start command: `npm start`

3. **Add Environment Variables** in Render dashboard:

   - Go to Settings → Environment
   - Add all variables from your `.env` file:
     ```
     MONGO_URI=mongodb+srv://...
     PORT=5000
     API_PREFIX=/api
     NODE_ENV=production
     ```

4. **Database Setup**:
   - Use MongoDB Atlas for cloud database
   - Get connection string from MongoDB Atlas
   - Add to `MONGO_URI` in Render environment variables

### Frontend Deployment

1. **Create another Render Web Service** for the client:

   - Connect your GitHub repository
   - Select the `client` directory as root
   - Set Build command: `npm install && npm run build`
   - Set Start command: `npm run preview`

2. **Add Environment Variables**:

   - Add `VITE_API_URL` pointing to your deployed backend:
     ```
     VITE_API_URL=https://your-backend-url.onrender.com/api
     ```

3. **Update CORS**:
   - Ensure your backend CORS configuration accepts requests from your frontend URL
   - Update server code if needed to allow production domain

### Important Notes

- **Never commit .env files** - they're in .gitignore
- Use `.env.example` files to document required variables
- Always use environment variables for:
  - Database credentials
  - API keys
  - Server ports
  - API endpoints
  - Sensitive configuration

## Local Development

```bash
# Server
cd server
npm install
# Create .env file with local settings
npm run dev

# Client
cd client
npm install
# Create .env.local file with local settings
npm run dev
```

## Security Best Practices

1. ✅ Use `.env` files for local development
2. ✅ Add `.env` to `.gitignore` (already done)
3. ✅ Use Render's environment variable management for production
4. ✅ Never hardcode sensitive information
5. ✅ Use different credentials for development and production
6. ✅ Rotate database passwords regularly
