# QuickMart - MERN Stack E-Commerce Application with Render Deployment Guide

Welcome! Your **Grocery Project (QuickMart)** is now configured for secure deployment on **Render**. This file helps you navigate all the documentation.

---

## 📖 Documentation Guide

### Start Here 👈
**[PROJECT_CONFIG_SUMMARY.md](PROJECT_CONFIG_SUMMARY.md)**
- Overview of what was done
- Quick next steps
- Security features implemented
- Key points to remember

### Setup & Configuration
**[ENV_SETUP.md](ENV_SETUP.md)**
- Complete environment variable setup
- Server configuration details
- Client configuration details
- Local development instructions

**[ENV_QUICK_REFERENCE.md](ENV_QUICK_REFERENCE.md)**
- Quick lookup table for all variables
- How to set variables locally and on Render
- Common mistakes to avoid
- Testing your configuration

### Deployment Instructions
**[RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md)**
- Step-by-step Render deployment guide
- Prerequisites checklist
- MongoDB Atlas setup
- Backend deployment process
- Frontend deployment process
- Testing after deployment

### Deployment Checklist
**[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)**
- Complete pre-deployment checklist
- Step-by-step deployment verification
- Post-deployment testing
- Troubleshooting guide
- Maintenance schedule

### Technical Details
**[TECHNICAL_REFERENCE.md](TECHNICAL_REFERENCE.md)**
- How environment variables work
- Server vs Client loading mechanisms
- Render deployment flow
- Security details explained
- Troubleshooting reference

## 🎯 Quick Start Path

### 1. **Local Development Setup** (5 minutes)
   - Read: [ENV_SETUP.md](ENV_SETUP.md) - Section "Local Development"
   - Copy `.env.example` → `.env` in server/
   - Copy `.env.example` → `.env.local` in client/
   - Edit values for your environment
   - Start servers with `npm run dev`

### 2. **Prepare for Deployment** (30 minutes)
   - Read: [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md) - Prerequisites
   - Create MongoDB Atlas account
   - Set up database cluster
   - Get connection string

### 3. **Deploy to Render** (15 minutes)
   - Read: [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md) - Deployment Steps
   - Create Render account
   - Deploy backend service
   - Deploy frontend service
   - Test your live application

### 4. **Verify Deployment** (10 minutes)
   - Use: [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Testing section
   - Check frontend loads
   - Test API calls
   - Verify database connection

## 📋 File Structure

```
Grocery Project/
├── PROJECT_CONFIG_SUMMARY.md          ← Start here!
├── ENV_SETUP.md                       ← Setup guide
├── ENV_QUICK_REFERENCE.md             ← Quick lookup
├── RENDER_DEPLOYMENT.md               ← Deployment steps
├── DEPLOYMENT_CHECKLIST.md            ← Verification
├── TECHNICAL_REFERENCE.md             ← How it works
├── README.md (this file)
│
├── server/
│   ├── .env                           ← Your local secrets (not in Git)
│   ├── .env.example                   ← Template (in Git)
│   ├── .gitignore
│   └── src/
│       ├── index.js                   (uses process.env)
│       └── config/
│           └── db.js                  (uses process.env.MONGO_URI)
│
└── client/
    ├── .env.local                     ← Your local config (not in Git)
    ├── .env.example                   ← Template (in Git)
    ├── .gitignore
    └── src/
        └── services/
            └── api.js                 (uses import.meta.env.VITE_API_URL)
```

## 🔑 Environment Variables Summary

### Server (server/.env)
```env
MONGO_URI=mongodb://127.0.0.1:27017/greencart
PORT=5000
API_PREFIX=/api
NODE_ENV=development
```

### Client (client/.env.local)
```env
VITE_API_URL=http://localhost:5000/api
```

## ✅ What Was Configured

- ✅ Environment variable setup for server and client
- ✅ `.env` files created (local development)
- ✅ `.env.example` templates created (for Git)
- ✅ `.gitignore` updated to exclude sensitive files
- ✅ Error messages made environment-agnostic
- ✅ Code already using `process.env` and `import.meta.env`
- ✅ Comprehensive documentation created

## 🚀 Deployment Summary

### Before Deploying
1. Create `.env` and `.env.local` from `.env.example` files
2. Add your local MongoDB URI and settings
3. Test locally with `npm run dev`

### When Deploying
1. Push code to GitHub (`.env` files are NOT committed)
2. Create Render account and Web Services
3. Add environment variables through Render dashboard
4. Services auto-deploy with production settings

### After Deploying
1. Test frontend and backend URLs
2. Verify API calls work
3. Check Render logs for errors
4. Monitor application performance

## 💡 Key Concepts

### Environment Variables
- Store sensitive information outside code
- Different values for dev/production
- Never hardcode secrets
- Loaded at runtime (server) or build-time (client)

### .env Files
- Local development configuration
- NOT committed to Git (security)
- Each developer can have their own settings
- Contains actual credentials and URLs

### .env.example Files
- Template showing what variables are needed
- Committed to Git (no secrets)
- Helps new developers understand setup
- Documents required configuration

### Render Integration
- Web Services for hosting
- Environment Variables tab for secrets
- Auto-deploy when code is pushed
- Logs for monitoring

## 🔒 Security Checklist

Before going live:
- [ ] `.env` files are in `.gitignore`
- [ ] `.env.example` files are committed
- [ ] No credentials in code files
- [ ] Render environment variables are set
- [ ] MongoDB credentials are unique
- [ ] Different passwords for dev/prod
- [ ] CORS is configured correctly

## 📞 Common Tasks

### Change Database URL
1. Update `.env` locally and test
2. For production: Update `MONGO_URI` in Render dashboard
3. Service auto-redeploys

### Change API Endpoint
1. Client: Update `VITE_API_URL` in `.env.local`
2. Production: Update in Render dashboard
3. Rebuild needed for client changes

### Add New Environment Variable
1. Add to `.env` and `.env.example`
2. Use in code: `process.env.NEW_VAR` or `import.meta.env.VITE_NEW_VAR`
3. For production: Add in Render dashboard
4. Restart service

### Debug Environment Variables
```bash
# Server - check what's loaded
node -e "console.log(process.env.MONGO_URI)"

# Client - variables compiled into build
npm run build  # Build includes variables
```

## 🔗 External Resources

- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Getting Started](https://www.mongodb.com/docs/atlas/getting-started/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Node.js dotenv Package](https://github.com/motdotla/dotenv)
- [Environment Variables Best Practices](https://12factor.net/config)

## ❓ Frequently Asked Questions

**Q: Do I need to commit `.env` files?**
A: No! They're in `.gitignore`. Commit `.env.example` instead.

**Q: Why does client use VITE_ prefix?**
A: Vite only exposes variables prefixed with `VITE_` for security.

**Q: Can I use different variables for dev and production?**
A: Yes! That's the whole point. Dev uses `.env`, production uses Render dashboard.

**Q: What if I commit `.env` accidentally?**
A: Go to [GitHub secret scanning](https://docs.github.com/en/code-security/secret-scanning) and rotate credentials immediately.

**Q: How do I change variables after deploying?**
A: Edit in Render dashboard → Variables tab → Save (auto-redeploys).

**Q: Do I need MongoDB Atlas for production?**
A: Yes, local MongoDB won't work. Use MongoDB Atlas for cloud database.

## 📞 Support & Troubleshooting

Refer to the appropriate guide:
- **Setup issues**: See [ENV_SETUP.md](ENV_SETUP.md)
- **Deployment issues**: See [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) → Troubleshooting
- **How things work**: See [TECHNICAL_REFERENCE.md](TECHNICAL_REFERENCE.md)
- **Step-by-step guide**: See [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md)

## 🎉 You're All Set!

Your project is configured and ready for deployment. Start with:
1. [PROJECT_CONFIG_SUMMARY.md](PROJECT_CONFIG_SUMMARY.md) for overview
2. [ENV_SETUP.md](ENV_SETUP.md) for local setup
3. [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md) for deployment

Good luck! 🚀

---

# 🛍️ MERN Stack E-Commerce Web Application (QuickMart)

A full-stack **e-commerce web application** built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.  
It provides a smooth and responsive shopping experience with features like product browsing, add-to-cart, and checkout with real-time feedback.

---

## 🚀 Features

- 🧾 **Product Management:** View, add, and manage product details.  
- 🛒 **Add to Cart:** Add, remove, or update products in your cart.  
- 💳 **Checkout System:** Seamless and interactive checkout process.  
- 🔒 **Secure RESTful API:** Built with Node.js & Express.js for managing products and orders.  
- 📱 **Responsive UI:** Single Page Application (SPA) with React and React Router for smooth navigation.  
- 🗄️ **Database:** MongoDB used to store user, product, and order data efficiently.  

---

## 🧰 Tech Stack

**Frontend:** React, React Router, HTML, CSS, JavaScript  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Architecture:** RESTful API + SPA  

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aayan8081/QuickMart.git
   cd QuickMart
   ```
