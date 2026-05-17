# GHOULVERSE Deployment Guide

## Quick Start — Two Ways to Go Live

- **[Option A: Vercel](#option-a-vercel-recommended-for-beginners)** — Easiest setup, great DX, git-based deploys
- **[Option B: Cloudflare Pages](#option-b-cloudflare-pages-recommended-for-performance)** — Free unlimited bandwidth, global CDN, best raw performance

---

## Prerequisites

1. **Node.js 20+** installed locally (`node -v`)
2. A **GitHub repo** containing this project (push this code to GitHub)
3. Your domain: `ghoulverse.com` (or whichever domain you own)

---

## Option A: Vercel (Recommended for Beginners)

### Step 1: Create a Vercel Account
- Go to [vercel.com](https://vercel.com) and sign up with your GitHub account

### Step 2: Install Vercel CLI (optional but handy)
```bash
npm i -g vercel
```

### Step 3: Create the Project

**Via CLI:**
```bash
vercel
# Follow the prompts:
# - Link to existing project? No
# - Project name: ghoulverse
# - Directory: ./ (current)
# - Build Command: npm run build
# - Output Directory: dist
# - Framework: Other (we're using static export)
```

**Via Dashboard:**
1. Click "Add New Project"
2. Import your GitHub repo
3. Configure:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Root Directory:** `./` (leave default)
4. Click "Deploy"

### Step 4: Add Your Custom Domain
1. In the Vercel dashboard, go to your project → **Settings** → **Domains**
2. Enter `ghoulverse.com` and click "Add"
3. Vercel will show you DNS records to add:
   - **Option 1 (Recommended):** Use Vercel Nameservers
     - Go to your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.)
     - Change nameservers to the ones Vercel provides
   - **Option 2:** Add an `A` record pointing to `76.76.21.21` and a `CNAME` for `www` pointing to `cname.vercel-dns.com`
4. Wait 5–60 minutes for DNS propagation
5. Vercel will auto-provision an SSL certificate (Let's Encrypt)

### Step 5: Verify Static Export
This project uses Next.js with `output: 'export'` — meaning it builds to plain static HTML files. All dynamic routes (`/ghouls/[slug]`) are pre-rendered at build time. The `dist/` folder is completely self-contained.

### GitHub Actions (Alternative)
If you prefer GitHub Actions over Vercel's native Git integration:

1. Get your Vercel tokens:
```bash
vercel login
vercel tokens create
```

2. Get your Org and Project IDs from `.vercel/project.json` after running `vercel link`

3. Add these as GitHub Secrets in your repo:
   - `Settings` → `Secrets and variables` → `Actions` → `New repository secret`
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

4. The workflow file is already at `.github/workflows/deploy-vercel.yml`

---

## Option B: Cloudflare Pages (Recommended for Performance)

### Step 1: Create a Cloudflare Account
- Go to [cloudflare.com](https://cloudflare.com) and sign up
- Add your domain to Cloudflare (follow their import wizard — change nameservers at your registrar)

### Step 2: Create a Pages Project
1. In the Cloudflare dashboard, go to **Workers & Pages** → **Create** → **Pages**
2. Choose **"Connect to Git"**
3. Select your GitHub repo
4. Configure build settings:
   - **Project name:** `ghoulverse`
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `/dist`
5. Click **Save and Deploy**

### Step 3: Add Custom Domain
1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter `ghoulverse.com`
4. Cloudflare will add the DNS record automatically (since they manage your DNS)
5. SSL is automatic

### Step 4: GitHub Actions (Optional)
If you prefer deploying via GitHub Actions:

1. Create a Cloudflare API token:
   - Go to [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Click **Create Token**
   - Use the **"Edit Cloudflare Workers"** template
   - Permissions needed: `Cloudflare Pages:Edit`
   - Account Resources: Include your account
   - Zone Resources: Include your domain (or "All zones")
   - Copy the token

2. Get your Account ID:
   - On the right sidebar of any Cloudflare dashboard page, copy **Account ID**

3. Add GitHub Secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

4. The workflow file is already at `.github/workflows/deploy-cloudflare.yml`

---

## Manual Deploy (Emergency / Quick Test)

If you just want to upload the current `dist/` folder without CI:

### Vercel CLI
```bash
npm run build
vercel --prod
```

### Cloudflare Wrangler CLI
```bash
npm run build
npx wrangler pages deploy dist --project-name=ghoulverse
```

### Netlify Drop (Easiest One-Off)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist/` folder onto the page
3. Go to **Site settings** → **Domain management** → **Add custom domain**
4. Configure DNS as instructed

---

## Important: GOO RUNNER Game

The GHOULVERSE site embeds the GOO RUNNER game via iframe at `/play/`. The game files are located in:
- Source: `ghoulverse-game/`
- Built output: `ghoulverse/dist/game/`

**The game is automatically included in the build** because Next.js copies the `public/` folder contents to `dist/`, and the game files are in `public/game/`.

If you update the game independently:
1. Rebuild the game (if applicable)
2. Copy updated files to `ghoulverse/public/game/`
3. Rebuild GHOULVERSE: `npm run build`
4. Redeploy

---

## Post-Deploy Checklist

- [ ] Site loads at `https://ghoulverse.com`
- [ ] `https://www.ghoulverse.com` redirects to the non-www (or vice versa)
- [ ] `/ghouls/` page loads and shows all 8 ghouls
- [ ] Individual ghoul pages work (`/ghouls/goo/`, `/ghouls/zen/`, etc.)
- [ ] `/play/` loads and the GOO RUNNER iframe works
- [ ] `/lore/` loads
- [ ] Security headers pass at [securityheaders.com](https://securityheaders.com/?q=ghoulverse.com)
- [ ] Links to `googhoul.com` work correctly
- [ ] Favicon loads
- [ ] No mixed-content warnings in browser console

---

## Troubleshooting

### Build fails on Vercel/Cloudflare
Make sure the build settings match:
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: `20.x`

### 404 errors on subpages
This project uses `trailingSlash: true` in `next.config.ts`. All routes expect a trailing slash:
- ✅ `https://ghoulverse.com/ghouls/goo/`
- ❌ `https://ghoulverse.com/ghouls/goo`

Your host should handle this. Vercel and Cloudflare Pages both handle trailing slashes well with static files.

### Game iframe shows blank / CSP error
The iframe has a sandbox attribute: `sandbox="allow-scripts allow-same-origin allow-fullscreen"`. If the game doesn't load:
1. Check browser console for CSP violations
2. Verify `dist/game/index.html` exists in the deployed build
3. Check that `frame-src 'self'` is in the CSP (already configured)

### Fonts not loading
If custom fonts fail, verify the CSP allows `font-src 'self'` and that font files are in the build output.
