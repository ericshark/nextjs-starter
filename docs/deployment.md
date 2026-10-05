# Deployment Guide

This guide covers deploying the Next.js application to common hosting targets.

## Option 1: Vercel (Recommended)

Next.js is maintained by Vercel and offers zero-configuration deployment:

1. Import the repository into your Vercel Dashboard.
2. Ensure the Framework Preset is set to **Next.js**.
3. Set environment variables (such as `NEXT_PUBLIC_APP_URL`).
4. Trigger the deployment.

Build command:
```bash
npm run build
```

## Option 2: Self-Hosted Node.js Server

To run the standalone production build on any Linux VPS or server:

```bash
# Install dependencies
npm ci

# Build optimized bundles
npm run build

# Start production server
npm run start
```

The application will listen on port `3000` by default. Use a reverse proxy (e.g., Caddy, NGINX) for SSL termination and compression.

## Option 3: Docker Container

A multi-stage Docker build can be used to run the standalone Next.js server with minimal footprint:

```dockerfile
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY . .
RUN npm ci && npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```
