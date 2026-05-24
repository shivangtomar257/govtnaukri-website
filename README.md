# 🏛️ Sarkari Naukri Hub - Job Portal Website

A complete, production-ready job portal website for Government and Private sector jobs in India. Built with pure HTML, CSS, and JavaScript — no build step required.

---

## 📁 Project Structure

```
job-portal/
├── index.html                 # Homepage
├── government-jobs.html       # Government Jobs Hub
├── private-jobs.html          # Private Jobs Hub
├── job-detail.html            # Individual Job Detail Page
├── css/
│   └── style.css              # Complete stylesheet (responsive, animations)
├── js/
│   └── data.js                # All job data, filters, render functions
├── robots.txt                 # SEO crawler instructions
├── sitemap.xml                # Google Search Console sitemap
└── images/                    # (Add your images here)
```

---

## 🚀 How to Run This Website

### Method 1: Direct Browser (Easiest)
1. Extract the ZIP file to any folder on your computer
2. Double-click `index.html` — it opens in your default browser
3. That's it! The site works completely offline

### Method 2: VS Code + Live Server (Recommended for Development)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **"Live Server"** extension by Ritwick Dey
3. Open the project folder in VS Code
4. Right-click on `index.html` → **"Open with Live Server"**
5. The site opens at `http://127.0.0.1:5500/`

### Method 3: Python HTTP Server
```bash
# Navigate to the project folder
cd job-portal

# Python 3
python -m http.server 8000

# Open browser to: http://localhost:8000
```

### Method 4: Node.js (http-server)
```bash
# Install http-server globally
npm install -g http-server

# Run server
cd job-portal
http-server -p 8080

# Open browser to: http://localhost:8080
```

### Method 5: Upload to Web Hosting (Production)
1. Extract the ZIP file
2. Upload all files to your web server via FTP/cPanel/File Manager
3. Point your domain to the folder
4. Done! No server-side language needed (PHP/Node not required)

---

## ✨ Features Included

### Government Jobs Section
- ✅ **28 States** — Uttar Pradesh, West Bengal, Bihar, Rajasthan, Tripura, Delhi NCR, etc.
- ✅ **12 Central Departments** — SSC, UPSC, Railway, Banking, Defence, Police, ISRO, KVS, NVS, PSU, Judicial, Postal
- ✅ **12 Education Categories** — 10th Pass, 12th Pass, Diploma, Graduation, Post-Graduation, PhD, Teaching, IT, Lawyer, Medical, CA, MBA
- ✅ **Urgent deadline badges** with pulse animation
- ✅ **Live job ticker** scrolling latest notifications

### Private Jobs Section
- ✅ **6 Experience Levels** — Fresher (0 yrs), 1-3, 3-5, 5-8, 8-12, 12+ Years
- ✅ **Job Type Filters** — Full Time, Part Time, Contract, Internship, Remote/WFH
- ✅ **Top Companies Sidebar** — TCS, Infosys, Wipro, Amazon, Flipkart, HCL, Deloitte
- ✅ **Salary Trend Visualization**

### UI/UX
- ✅ Fully responsive (Desktop, Tablet, Mobile)
- ✅ Smooth animations & hover effects
- ✅ Sticky header with search bar
- ✅ Breadcrumb navigation
- ✅ Social sharing (WhatsApp, Facebook, Twitter, Telegram)
- ✅ Job alert subscription form
- ✅ Mobile hamburger menu
- ✅ Scroll-to-top button
- ✅ Dark footer with quick links

### SEO Ready
- ✅ Meta titles & descriptions on every page
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ robots.txt & sitemap.xml
- ✅ Semantic HTML structure

### AdSense Ready (Future-Proof)
- ✅ Leaderboard slots (728x90) — multiple positions
- ✅ Medium rectangle slots (300x250) — sidebar & inline
- ✅ Skyscraper slots (160x600) — sidebar
- All slots clearly marked: `📢 AdSense ... Slot`

---

## 🔧 Customization Guide

### 1. Change Website Name / Logo
Edit in `index.html`, `government-jobs.html`, `private-jobs.html`, `job-detail.html`:
```html
<!-- Find this in each file -->
<a href="index.html" class="logo">
    <div class="logo-icon">🏛️</div>
    <span>Sarkari Naukri Hub</span>
</a>
```

### 2. Update Contact Information
Edit in all HTML files:
```html
<div class="header-top-container">
    <span>📧 contact@sarkarinaukrihub.com</span>
    <span>📞 Helpline: 1800-123-4567</span>
</div>
```

### 3. Add / Edit Jobs
Open `js/data.js` and modify the `JOBS_DB` array:
```javascript
{
    id: 999,
    title: 'Your New Job Title',
    org: 'Organization Name',
    orgShort: 'ORG',
    type: 'government',        // 'government' or 'private'
    category: 'central',       // 'central', 'state', 'it', 'management', etc.
    subcategory: 'ssc',        // state id or central dept id
    state: 'up',               // for state jobs
    education: 'graduation',   // education level
    experience: 'fresher',     // for private jobs
    location: 'All India',
    salary: '₹ 30,000 - 50,000/month',
    deadline: '2026-12-31',
    posted: '2026-05-24',
    vacancies: 1000,
    ageLimit: '18-30 Years',
    qualification: 'Bachelor's Degree',
    description: 'Job description here...',
    highlights: ['Point 1', 'Point 2', 'Point 3'],
    selectionProcess: ['Step 1', 'Step 2', 'Step 3'],
    tags: ['Tag1', 'Tag2', 'Tag3'],
    urgent: true,
    logo: 'ORG',
}
```

### 4. Add New States
Edit `STATES` array in `js/data.js`:
```javascript
{ id: 'newstate', name: 'New State', icon: '🏛️', count: 50 },
```

### 5. Add New Central Departments
Edit `CENTRAL_JOBS` array in `js/data.js`:
```javascript
{ id: 'newdept', name: 'New Dept', fullName: 'Full Department Name', icon: '📋', count: 25 },
```

### 6. Change Colors
Edit `css/style.css` — CSS variables at the top:
```css
:root {
    --primary: #1e40af;        /* Main blue */
    --primary-dark: #1e3a8a;   /* Darker blue */
    --secondary: #f59e0b;      /* Amber/Orange accent */
    --accent: #10b981;         /* Green for success */
    --danger: #ef4444;         /* Red for urgent */
}
```

### 7. Add Google AdSense
Replace the placeholder divs in all HTML files:
```html
<!-- BEFORE -->
<div class="adsense-slot leaderboard">📢 AdSense Leaderboard Ad Slot (728x90)</div>

<!-- AFTER -->
<div class="adsense-slot leaderboard">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID"></script>
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-YOUR_ID"
         data-ad-slot="YOUR_SLOT_ID"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>
```

### 8. Update Domain in SEO Files
Edit `robots.txt`:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

Edit `sitemap.xml` — replace all `https://yourdomain.com/` with your actual domain.

---

## 📱 Responsive Breakpoints

| Device | Width | Layout Changes |
|--------|-------|----------------|
| Desktop | > 1024px | Full layout with sidebar |
| Tablet | 768-1024px | 2-column grids, sidebar hidden |
| Mobile | < 768px | Single column, hamburger menu |
| Small Mobile | < 480px | Compact cards, smaller text |

---

## 🌐 Browser Support

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure & SEO |
| CSS3 | Styling, animations, responsive design |
| Vanilla JavaScript | Data, filters, rendering, interactions |
| No frameworks | Zero dependencies, fast loading |

---

## 📊 SEO Checklist

Before going live, complete these:

- [ ] Replace `yourdomain.com` in all files with your actual domain
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Add Google Analytics tracking code
- [ ] Add Google AdSense code (when approved)
- [ ] Update meta descriptions for your target keywords
- [ ] Add favicon (`<link rel="icon" href="images/favicon.ico">`)
- [ ] Test all internal links
- [ ] Test mobile responsiveness
- [ ] Enable HTTPS on your hosting

---

## 🎯 Google Search Traffic Optimization

Your site is already optimized for these search queries:

**Government Jobs:**
- "sarkari naukri 2026"
- "government jobs in [state name]"
- "SSC jobs 2026"
- "UPSC recruitment 2026"
- "12th pass government jobs"
- "railway jobs 2026"

**Private Jobs:**
- "private jobs for freshers"
- "IT jobs 1-3 years experience"
- "TCS jobs for freshers"
- "software engineer jobs Bangalore"

---

## 📝 License

This project is built for your personal/commercial use. Modify freely.

---

## 💬 Support

For issues or customization help:
- Email: contact@sarkarinaukrihub.com
- Helpline: 1800-123-4567

---

**Built with ❤️ for Job Seekers in India**
