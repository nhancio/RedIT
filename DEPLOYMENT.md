# Netlify Deployment Guide

This guide will help you deploy your RedDot IT Training website to Netlify.

## Prerequisites

1. Make sure all dependencies are installed: `npm install`
2. Test the build locally: `npm run build`
3. Have a Netlify account (sign up at https://netlify.com if needed)

## Deployment Methods

### Method 1: Netlify CLI (Recommended for Continuous Deployment)

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify
```bash
netlify login
```
This will open your browser to authenticate.

#### Step 3: Initialize Netlify in your project
```bash
netlify init
```
Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name (or leave blank for auto-generated)
- Build command: `npm run build`
- Directory to deploy: `dist`

#### Step 4: Deploy
```bash
netlify deploy --prod
```

### Method 2: Netlify Dashboard (Drag & Drop)

#### Step 1: Build your project
```bash
npm run build
```

#### Step 2: Deploy
1. Go to https://app.netlify.com
2. Log in to your account
3. Drag and drop the `dist` folder from your project to the Netlify dashboard
4. Your site will be live in seconds!

**Note:** This method requires manual deployment for each update.

### Method 3: Git Integration (Best for Continuous Deployment)

#### Step 1: Push your code to GitHub/GitLab/Bitbucket
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Connect to Netlify
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `18` (or latest)

#### Step 3: Deploy
Netlify will automatically:
- Build your site
- Deploy it
- Provide a URL (e.g., `your-site-name.netlify.app`)

Every time you push to your main branch, Netlify will automatically rebuild and redeploy!

## Build Configuration

The project includes:
- `netlify.toml` - Netlify configuration file
- `public/_redirects` - SPA routing support

## Environment Variables

If you need to add environment variables (like Firebase config):
1. Go to Site settings → Environment variables
2. Add your variables
3. They'll be available as `import.meta.env.VITE_YOUR_VAR`

## Custom Domain

To add a custom domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Troubleshooting

### Build fails
- Check that all dependencies are in `package.json`
- Ensure Node version is 18 or higher
- Check build logs in Netlify dashboard

### Routes not working (404 errors)
- The `_redirects` file should handle this
- Make sure it's in the `public` folder
- Verify `netlify.toml` has the redirect rule

### Environment variables not working
- Use `VITE_` prefix for Vite env variables
- Restart build after adding variables

## Quick Deploy Commands

```bash
# Build locally
npm run build

# Deploy to Netlify (CLI)
netlify deploy --prod

# Preview deployment
netlify deploy
```

