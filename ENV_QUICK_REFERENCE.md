# Quick Reference: Environment Variables

## Environment Variable Format

Environment variables are configuration values stored outside your code. Render and services like MongoDB Atlas use them to securely pass sensitive information to your application without hardcoding it.

## Your Project's Environment Variables

### Server (`server/.env` for local, Render dashboard for production)

| Variable     | Purpose                   | Local Value                           | Production Value                                        |
| ------------ | ------------------------- | ------------------------------------- | ------------------------------------------------------- |
| `MONGO_URI`  | MongoDB connection string | `mongodb://127.0.0.1:27017/greencart` | `mongodb+srv://user:pass@cluster.mongodb.net/greencart` |
| `PORT`       | Server port number        | `5000`                                | `5000`                                                  |
| `API_PREFIX` | API route prefix          | `/api`                                | `/api`                                                  |
| `NODE_ENV`   | Environment mode          | `development`                         | `production`                                            |

### Client (`client/.env.local` for local, Render dashboard for production)

| Variable       | Purpose              | Local Value                 | Production Value                       |
| -------------- | -------------------- | --------------------------- | -------------------------------------- |
| `VITE_API_URL` | Backend API endpoint | `http://localhost:5000/api` | `https://grocery-api.onrender.com/api` |

## How to Set Variables

### Locally (Development)

**Server:**

```bash
cd server
# Create/edit .env file
echo "MONGO_URI=mongodb://127.0.0.1:27017/greencart" > .env
echo "PORT=5000" >> .env
echo "API_PREFIX=/api" >> .env
echo "NODE_ENV=development" >> .env
npm run dev
```

**Client:**

```bash
cd client
# Create/edit .env.local file
echo "VITE_API_URL=http://localhost:5000/api" > .env.local
npm run dev
```

### On Render (Production)

1. Go to your service on Render dashboard
2. Click **Settings** → **Environment**
3. Add each variable by clicking **Add Environment Variable**
4. Enter Key and Value
5. Click **Save Changes**
6. Service will auto-redeploy with new variables

## How the Code Uses These Variables

### Server (Node.js)

```javascript
// Access with process.env
const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/greencart";
const port = process.env.PORT || 5000;
const apiPrefix = process.env.API_PREFIX || "/api";
const environment = process.env.NODE_ENV || "development";
```

### Client (Vite/React)

```javascript
// Access with import.meta.env (Vite prefix: VITE_)
const apiUrl = import.meta.env.VITE_API_URL || "/api";
```

## File Structure

```
server/
  ├── .env                 ← Your local variables (DO NOT COMMIT)
  ├── .env.example         ← Template for variables (COMMIT THIS)
  └── src/
      ├── index.js         ← Uses process.env
      └── config/
          └── db.js        ← Uses process.env.MONGO_URI

client/
  ├── .env.local          ← Your local variables (DO NOT COMMIT)
  ├── .env.example        ← Template for variables (COMMIT THIS)
  └── src/
      └── services/
          └── api.js      ← Uses import.meta.env.VITE_API_URL
```

## Common Mistakes to Avoid

❌ **WRONG:**

```javascript
// Hardcoded - NEVER do this!
const apiUrl = "http://localhost:5000/api";
const mongoUri = "mongodb+srv://user:pass@cluster.mongodb.net/db";
```

✅ **CORRECT:**

```javascript
// Uses environment variable
const apiUrl = import.meta.env.VITE_API_URL;
const mongoUri = process.env.MONGO_URI;
```

❌ **WRONG:**

```env
# Committing .env to Git - NEVER do this!
git add .env
git commit -m "Add environment variables"
```

✅ **CORRECT:**

```bash
# Only commit .env.example
git add .env.example
git commit -m "Add environment variables template"
```

## Getting Your MongoDB URI

1. Go to MongoDB Atlas: https://www.mongodb.com/cloud/atlas
2. Create/sign into your cluster
3. Click **Connect** → **Drivers**
4. Select **Node.js**
5. Copy the connection string:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/greencart?retryWrites=true&w=majority
   ```
6. Replace `<username>`, `<password>` with your database credentials

## Render Environment Variables

To add variables in Render:

1. Select your service from dashboard
2. Go to **Settings** tab
3. Scroll to **Environment** section
4. Click **Add Environment Variable**
5. Fill in:
   - **Key**: (e.g., `MONGO_URI`)
   - **Value**: (e.g., your MongoDB connection string)
6. Click **Save Changes**
7. Service auto-redeploys in ~1 minute

## Testing Your Variables

### Check Server Variables

```bash
# In server directory
node -e "console.log(process.env.MONGO_URI)"
node -e "console.log(process.env.PORT)"
```

### Check Client Variables (During Build)

```bash
# In client directory
# Variables are compiled during build
npm run build
# Check the .env.local file exists
cat .env.local
```

## Security Checklist

- [ ] `.env` files are in `.gitignore`
- [ ] `.env.example` files are committed (without actual values)
- [ ] No credentials appear in code files
- [ ] Render environment variables are set correctly
- [ ] MongoDB credentials are unique and strong
- [ ] Different credentials for dev and production
- [ ] CORS is restricted to your domain

## Support

For more information:

- See `ENV_SETUP.md` for detailed setup
- See `RENDER_DEPLOYMENT.md` for deployment steps
- See `DEPLOYMENT_CHECKLIST.md` for full checklist
