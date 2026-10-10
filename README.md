# Asian Computers & Asian Video Films (AVF) 🛒🎥

> **Zero-Backend Retail Shop & Studio Website with Git-based Decap CMS, optimized for 100% free hosting on GitHub Pages.**

---

## 🌟 Overview

This website is custom-built for **Asian Computers & Asian Video Films**, providing a unified digital storefront for retail computer hardware sales, Apple products, gaming rigs, CCTV security systems, and high-end cinematic wedding videography and studio photography.

### 📍 Shop Branches Included
1. **Delhi Branch (Delhi NCR)**:
   - **Address:** Main Wazirabad Road, Biharipur Extension / Sonia Vihar, Shahdara North, Delhi - 110094
   - **Google Maps:** [https://maps.app.goo.gl/bcLu8VQqSZ9xo7dh7](https://maps.app.goo.gl/bcLu8VQqSZ9xo7dh7)
   - **Phones:** `+91 9999999776` / `+91 9007199254`
   - **Specialties:** Retail Desktops, Laptops, Custom PC Assembly, IT Hardware, Apple Repairs, CCTV Systems.

2. **Ambedkar Nagar Branch (Head Office & Production Hub)**:
   - **Address:** Iltifatganj to Akbarpur Road, Nawsanda / Kedar Nagar, Gauhaniya, Tanda, Ambedkar Nagar, Uttar Pradesh - 224230
   - **Google Maps:** [https://maps.app.goo.gl/XHpWwRbCYaPwpJ6X7](https://maps.app.goo.gl/XHpWwRbCYaPwpJ6X7)
   - **Phones:** `+91 9452352700` / `+91 9794445700`
   - **Specialties:** 4K Cinematic Wedding Films, Drone Coverage, Pre-Wedding Shoots, Photo Studio, Tech Store.

---

## ⚡ Zero-Backend Architecture with Decap CMS

* **100% Free & Zero Server:** No Node.js backend server, PHP, or SQL database required.
* **Git-as-a-Database:** Content is stored as clean JSON files inside the `data/` directory.
* **Decap CMS (`/admin`):** Access the visual content manager at `https://your-username.github.io/your-repo/admin/` or `http://localhost:8000/admin/`. Any changes made in the dashboard commit directly to your GitHub repository!
* **Instant WhatsApp Orders & Inquiries:** Customers can add products or services to their **Inquiry List** and click **"Send Inquiry via WhatsApp"**, which formats a neat itemized order message with selected branch, prices, and SKUs.

---

## 📁 Project Structure

```
avf-site/
├── .nojekyll                   # Ensures GitHub Pages serves all raw static files
├── index.html                  # Main responsive retail store & studio website
├── 404.html                    # 404 handler for GitHub Pages
├── favicon.svg                 # SVG Brand favicon
├── README.md                   # Project documentation
├── admin/
│   ├── config.yml              # Decap CMS schema configuration
│   ├── index.html              # Decap CMS single page app
│   └── README.md               # Decap CMS setup & OAuth guide
├── assets/
│   ├── css/
│   │   └── style.css           # Styling, animations, responsive helpers
│   ├── js/
│   │   ├── app.js              # Application logic, filters, cart, WhatsApp generator
│   │   └── default-data.js     # Bundled dataset for offline/file:// reliability
│   ├── images/
│   │   └── logo.svg            # Vector logo
│   └── uploads/                # Media uploads from Decap CMS
└── data/
    ├── settings.json           # Store details, contacts, announcements, stats
    ├── branches.json           # Delhi & Ambedkar Nagar branch data
    ├── products.json           # Retail inventory & pricing
    ├── services.json           # Studio & IT services
    ├── gallery.json            # Portfolio photos & video highlights
    └── reviews.json            # Customer testimonials & Google ratings
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository & Push Code
1. Initialize and push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit of Asian Computers & Asian Video Films site"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**:
   - **Source:** Choose `Deploy from a branch`
   - **Branch:** Select `main`
   - **Folder:** Select `/ (root)`
4. Click **Save**.
5. Within 1-2 minutes, your website will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`

### Step 3: Configure Decap CMS for Your Repository
Open `admin/config.yml` and replace:
```yaml
backend:
  name: github
  repo: your-username/avf-site # Replace with your actual GitHub username/repo
  branch: main
```
*For production GitHub authentication, see the detailed instructions in `admin/README.md`.*

---

## 💻 Local Testing & Decap CMS Editing

You can test and edit the site locally right now:

### Run Decap CMS Proxy:
```bash
npx decap-server
```

### Start any local web server:
```bash
npx serve .
# or
python -m http.server 8000
```
- Open `http://localhost:8000/` to view the website.
- Open `http://localhost:8000/admin/` to manage products, branches, and content. Any changes made in the admin will write directly to your local JSON files!

---

## 📞 Support & Store Contact
- **Delhi Branch:** +91 9999999776 / +91 9007199254
- **Ambedkar Nagar Branch:** +91 9452352700 / +91 9794445700
- **WhatsApp:** +91 9452352700
