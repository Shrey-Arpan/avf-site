# 🛠️ Decap CMS Setup & Guide (Asian Computers & Asian Video Films)

Decap CMS (formerly Netlify CMS) allows you to manage all shop data (Branches, Products, Services, Portfolio, Reviews, Settings) directly from `/admin`. Every edit commits directly to your GitHub repository without any server or database.

---

## 🚀 How to use Decap CMS

### Option 1: Local Development (Instant, Zero Setup)
Decap CMS has a built-in proxy server that lets you edit files locally without needing GitHub authentication.

1. In your project root, run:
   ```bash
   npx decap-server
   ```
2. In another terminal, start any local web server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
3. Open your browser to `http://localhost:8000/admin/` (or port used by `npx serve`).
4. You will immediately be in the Decap CMS dashboard! Any edits made will directly write to `data/*.json` on your disk.

---

### Option 2: Live on GitHub Pages (Production Setup)
When your website is hosted on GitHub Pages:

1. Open `admin/config.yml` and replace `your-username/avf-site` with your actual GitHub username and repository name:
   ```yaml
   backend:
     name: github
     repo: YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME
     branch: main
   ```
2. To allow your browser to authenticate with GitHub and commit directly, you have two free zero-cost methods:

#### Method A: Free External OAuth Proxy (Easiest)
Use a free public OAuth proxy like **Decap CMS OAuth Proxy** or **SStatic CMS OAuth**:
- Follow the official Decap CMS GitHub OAuth documentation: [https://decapcms.org/docs/github-backend/](https://decapcms.org/docs/github-backend/)
- Or deploy a 1-click free OAuth gateway on Vercel / Netlify / Cloudflare Workers:
  - Repository: `https://github.com/vencax/netlify-cms-github-oauth-provider`
  - In `admin/config.yml`, add:
    ```yaml
    backend:
      name: github
      repo: YOUR_USERNAME/YOUR_REPO
      branch: main
      base_url: https://your-oauth-provider.vercel.app # URL of your free proxy
    ```

#### Method B: Netlify Free Identity (Alternative)
If you also mirror or connect this repo to Netlify (which has a 100% free tier with Git Gateway):
- Enable **Identity** in Netlify settings.
- Enable **Git Gateway** under Identity > Services.
- In `admin/config.yml`, set:
  ```yaml
  backend:
    name: git-gateway
    branch: main
  ```

---

## 📂 Managed Content Files
- `data/settings.json`: General shop branding, primary contacts, tagline, statistics.
- `data/branches.json`: Shop branches (Delhi Branch & Ambedkar Nagar Branch).
- `data/products.json`: Retail product inventory, categories, pricing, specs, and photos.
- `data/services.json`: Studio video production & IT hardware repair services.
- `data/gallery.json`: Portfolio photography & cinematic shots.
- `data/reviews.json`: Customer testimonials & ratings.
- `assets/uploads/`: Uploaded product, store, and service images.
