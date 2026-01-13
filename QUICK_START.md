# 🚀 Quick Start: Deploy in 3 Steps

## Step 1: Local Development (5 minutes)

Your `.env` and `.env.local` files are already created. Just test locally:

```bash
# Terminal 1: Start Backend
cd server
npm run dev
# Server runs on http://localhost:5000

# Terminal 2: Start Frontend
cd client
npm run dev
# Frontend runs on http://localhost:5173
```

✅ If everything loads and API calls work, proceed to Step 2.

---

## Step 2: Prepare MongoDB Atlas (10 minutes)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create account (free tier available)
3. Create Cluster
4. Create Database User
5. Click **Connect** → **Drivers** → **Node.js**
6. Copy the connection string that looks like:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/greencart?retryWrites=true&w=majority
   ```

**Save this URL** - you'll need it for Render!

---

## Step 3: Deploy on Render (20 minutes)

### 3a. Deploy Backend

1. Go to https://render.com → Sign up with GitHub
2. Click **New** → **Web Service**
3. Select your GitHub repository
4. Fill in:
   - **Name:** `grocery-api`
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Click **Create Web Service**
6. Wait for deployment ⏳ (takes ~2-3 minutes)
7. **Copy the URL** you see (e.g., `https://grocery-api.onrender.com`)

### 3b. Add Backend Environment Variables

1. While still in your backend service, click **Settings**
2. Scroll to **Environment**
3. Click **Add Environment Variable**
4. Add these variables:

| Key        | Value                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------- |
| MONGO_URI  | `mongodb+srv://username:password@cluster.mongodb.net/greencart?retryWrites=true&w=majority` |
| PORT       | `5000`                                                                                      |
| API_PREFIX | `/api`                                                                                      |
| NODE_ENV   | `production`                                                                                |

5. Click **Save Changes** → Service auto-redeploys ✓

### 3c. Deploy Frontend

1. Click **New** → **Web Service** again
2. Select same GitHub repository
3. Fill in:
   - **Name:** `grocery-client`
   - **Root Directory:** `client`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run preview`
4. Click **Create Web Service**
5. Wait for deployment ⏳ (takes ~2-3 minutes)

### 3d. Add Frontend Environment Variable

1. While in frontend service, click **Settings**
2. Scroll to **Environment**
3. Add variable:

| Key          | Value                                  |
| ------------ | -------------------------------------- |
| VITE_API_URL | `https://grocery-api.onrender.com/api` |

(Replace `grocery-api.onrender.com` with your actual backend URL from Step 3b)

4. Click **Save Changes** → Auto-redeploys ✓

---

## Step 4: Verify It Works (5 minutes)

1. Visit your frontend URL (shown in Render dashboard)
2. Check it loads without errors
3. Open browser console (F12)
4. Try adding a product to cart
5. Try creating an order
6. Check if data persists

✅ **Done!** Your app is live on Render! 🎉

---

## Common Issues

### ❌ "Cannot GET /"

**Solution:** Frontend didn't deploy correctly. Check Render logs.

### ❌ CORS Error in browser console

**Solution:** Your `VITE_API_URL` doesn't match backend URL. Double-check in Render.

### ❌ "Cannot connect to database"

**Solution:**

- Check MongoDB Atlas credentials
- Ensure IP is whitelisted in MongoDB Atlas
- Verify MONGO_URI is correct

### ❌ Services keep spinning down

**Solution:** Free tier spins down after 15 minutes. Normal behavior. Upgrade to paid for always-on.

---

## Files You'll Need to Reference

| Need Help With...          | Read This                                          |
| -------------------------- | -------------------------------------------------- |
| Setting up locally         | [ENV_SETUP.md](ENV_SETUP.md)                       |
| Render deployment details  | [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md)       |
| Troubleshooting            | [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) |
| Understanding how it works | [TECHNICAL_REFERENCE.md](TECHNICAL_REFERENCE.md)   |
| Quick variable lookup      | [ENV_QUICK_REFERENCE.md](ENV_QUICK_REFERENCE.md)   |

---

## Environment Variables Recap

### What They Are

Configuration values stored outside your code so you can:

- Keep secrets safe
- Use different settings for dev vs production
- Change values without touching code

### Your Variables

**Server** (in Render dashboard):

```
MONGO_URI = your MongoDB connection string
PORT = 5000
API_PREFIX = /api
NODE_ENV = production
```

**Client** (in Render dashboard):

```
VITE_API_URL = https://your-backend-url.onrender.com/api
```

### Important Rules

- ✅ Commit `.env.example` files
- ❌ DO NOT commit `.env` files (they're in .gitignore)
- ✅ Use Render dashboard to set production variables
- ❌ DO NOT put secrets in code

---

## URLs After Deployment

Once deployed, you'll have:

```
Frontend: https://grocery-client.onrender.com
Backend:  https://grocery-api.onrender.com

API Endpoint: https://grocery-api.onrender.com/api
```

(Your actual names might be different)

---

## Success Indicators ✓

Your deployment is successful when:

- [ ] Frontend URL loads in browser
- [ ] No CORS errors in console (F12)
- [ ] Products load from API
- [ ] Can add items to cart
- [ ] Can submit an order
- [ ] No 404 errors for API calls

---

## Next Time You Change Code

1. Make changes locally and test with `npm run dev`
2. Commit and push to GitHub: `git push`
3. Render **automatically redeploys** your changes
4. Check Render dashboard logs to verify deployment
5. Visit your URL to see updates live

---

## Estimated Timeline

| Step                 | Time        | Status                 |
| -------------------- | ----------- | ---------------------- |
| 1. Local testing     | 5 min       | ✓ Do this first        |
| 2. MongoDB Atlas     | 10 min      | ⏳ Do this second      |
| 3. Render deployment | 20 min      | ⏳ Do this third       |
| **Total**            | **~35 min** | 🚀 Live in 35 minutes! |

---

## Still Have Questions?

1. **Setup issues?** → [ENV_SETUP.md](ENV_SETUP.md)
2. **Deployment issues?** → [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
3. **How does it work?** → [TECHNICAL_REFERENCE.md](TECHNICAL_REFERENCE.md)
4. **Quick lookup?** → [ENV_QUICK_REFERENCE.md](ENV_QUICK_REFERENCE.md)

---

## Summary

You have:
✅ Environment variables configured
✅ `.env` files created for local development
✅ `.gitignore` set up to protect secrets
✅ `.env.example` templates for documentation
✅ Code using environment variables properly
✅ Comprehensive guides for deployment

**You're ready to deploy!** Follow the 3 steps above to go live. 🎉
