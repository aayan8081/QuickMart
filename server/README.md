# GreenCart API (Express + MongoDB)

## Prerequisites

- Node.js 18+
- Local MongoDB instance running on `mongodb://127.0.0.1:27017`

## Setup

```bash
cd server
npm install
```

Create a `.env` file with the following values (defaults will be used if omitted):

```bash
MONGO_URI=mongodb://127.0.0.1:27017/greencart
PORT=5000
API_PREFIX=/api
```

## Development

```bash
npm run dev
```

The server seeds starter categories and products the first time it connects to an empty database.

## Available Endpoints

- `GET /api/health` – quick server status check
- `GET /api/products` – all products (supports `category`, `featured`, `bestSeller`, `search`, `sortBy`, `order` query params)
- `GET /api/products/featured` – featured highlights
- `GET /api/products/:slug` – detail view
- `GET /api/categories` – category listing
- `GET /api/content` – hero slides, testimonials, FAQs, blog highlights
- `POST /api/orders` – capture checkout requests

All endpoints return JSON in the shape `{ data: ... }` (or `{ message, data }` for mutations / errors).

