# Render Deployment Guide

## Prerequisites

- GitHub account with your repository pushed
- Render account (free tier available)
- MongoDB Atlas account for cloud database
- Git installed locally

## Step-by-Step Deployment

### Step 1: Prepare MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account and sign in
3. Create a new cluster
4. Create a database user with username and password
5. Add your Render IP to Network Access (or allow 0.0.0.0/0)
6. Copy the connection string:
   ```
   mongodb+srv://username:password@cluster-name.mongodb.net/greencart?retryWrites=true&w=majority
   ```

### Step 2: Deploy Backend to Render

1. Go to https://render.com and sign in with GitHub
2. Click **New +** → **Web Service**
3. Select your GitHub repository
4. Configure as follows:

   - **Name**: grocery-api (or your preferred name)
   - **Root Directory**: `server`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. Click **Create Web Service**
6. Wait for initial build to complete
7. Once deployed, note the URL (e.g., `https://grocery-api.onrender.com`)

### Step 3: Add Environment Variables to Backend

1. In Render dashboard, go to your backend service
2. Click **Settings** in the left sidebar
3. Scroll to **Environment**
4. Add the following environment variables:

| Key        | Value                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------- |
| MONGO_URI  | `mongodb+srv://username:password@cluster.mongodb.net/greencart?retryWrites=true&w=majority` |
| PORT       | 5000                                                                                        |
| API_PREFIX | /api                                                                                        |
| NODE_ENV   | production                                                                                  |

5. Click **Save Changes**
6. Backend will auto-redeploy with new variables

### Step 4: Deploy Frontend to Render

1. Click **New +** → **Web Service** again
2. Select the same GitHub repository
3. Configure as follows:

   - **Name**: grocery-client (or your preferred name)
   - **Root Directory**: `client`
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Plan**: Free

4. Click **Create Web Service**

### Step 5: Add Environment Variables to Frontend

1. In Render dashboard, go to your frontend service
2. Click **Settings** → **Environment**
3. Add environment variable:

| Key          | Value                                  |
| ------------ | -------------------------------------- |
| VITE_API_URL | `https://grocery-api.onrender.com/api` |

(Replace `grocery-api.onrender.com` with your actual backend URL)

4. Click **Save Changes**
5. Frontend will auto-redeploy

### Step 6: Update Backend CORS (if needed)

If you see CORS errors, update `server/src/index.js`:

```javascript
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://your-frontend-url.onrender.com",
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
```

## Testing Deployment

1. Visit your frontend URL
2. Try navigating through pages
3. Check browser console (F12) for any errors
4. Verify API calls are going to the correct backend URL

## Common Issues

### Issue: "Cannot GET /" on frontend

- **Solution**: Ensure `npm run preview` is the correct start command
- May need to configure a static site instead of web service

### Issue: CORS errors

- **Solution**: Update CORS configuration in backend
- Ensure frontend URL is added to allowed origins

### Issue: Database connection fails

- **Solution**:
  - Verify MongoDB Atlas credentials
  - Check if Render IP is whitelisted in MongoDB Atlas
  - Ensure MONGO_URI is correctly formatted

### Issue: Environment variables not loading

- **Solution**:
  - Redeploy service after adding variables
  - Restart the service from Render dashboard
  - Check variable names match exactly (case-sensitive)

## Monitoring & Logs

1. Go to your service in Render dashboard
2. Click **Logs** tab to see real-time logs
3. Look for any error messages
4. Check MongoDB Atlas logs for database issues

## Redeploying

To redeploy after making changes:

1. Push changes to GitHub
2. Render automatically detects changes
3. Service will rebuild and redeploy
4. Check **Logs** tab to monitor deployment

## Free Tier Limitations

- Services spin down after 15 minutes of inactivity
- First request after spin-down will take ~30 seconds
- Upgrade to paid plan for always-on service

## Next Steps

- Monitor your application in production
- Set up error tracking (optional)
- Consider upgrading to paid plan for better performance
- Regularly update dependencies
