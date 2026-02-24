# 🚀 DEPLOYMENT GUIDE - CCEP World Cup 2026 Campaign

Complete step-by-step instructions to deploy your campaign website to the internet for FREE using GitHub Pages.

## 📋 Prerequisites

- GitHub account (create at https://github.com/signup)
- Git installed (download from https://git-scm.com/) - Optional for command line

---

## 🎯 STEP-BY-STEP DEPLOYMENT

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ccep-worldcup2026` (or your preferred name)
3. Description: "CCEP World Cup 2026 B2B Rewards Campaign"
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** check "Add a README file" (we already have one)
6. Click **"Create repository"**

### Step 2: Prepare Your Files

Ensure you have all these files in one folder:
```
your-folder/
├── index.html
├── styles.css
├── script.js
├── README.md
├── LICENSE
└── .gitignore
```

### Step 3: Upload to GitHub

#### Option A: Using GitHub Website (Easiest)

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL 6 files
3. Commit message: "Initial commit - CCEP World Cup 2026 campaign"
4. Click **"Commit changes"**

#### Option B: Using Git Command Line

Open Terminal/Command Prompt in your folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - CCEP World Cup 2026 campaign"

# Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/ccep-worldcup2026.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top right)
3. Scroll down and click **"Pages"** (left sidebar)
4. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**

### Step 5: Wait for Deployment (2-3 minutes)

GitHub will automatically build and deploy your site. Refresh the Pages settings page after 2-3 minutes.

### Step 6: Get Your Live URL

You'll see:
```
✅ Your site is live at https://YOUR-USERNAME.github.io/ccep-worldcup2026/
```

**Click the link!** 🎉

---

## 🌐 CUSTOM DOMAIN (Optional)

Want `www.ccep-campaign.com` instead of `github.io`?

### 1. Buy a Domain

Purchase from:
- Namecheap: https://www.namecheap.com
- Google Domains: https://domains.google
- GoDaddy: https://www.godaddy.com

### 2. Configure GitHub Pages

1. In Settings → Pages
2. Enter your custom domain (e.g., `campaign.ccep.com`)
3. Click "Save"

### 3. Configure DNS Records

In your domain registrar's DNS settings:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### 4. Wait for DNS Propagation

Can take 24-48 hours for changes to take effect globally.

---

## 🔄 UPDATING YOUR WEBSITE

### Method 1: GitHub Website

1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Click "Commit changes"
6. Website updates automatically in 1-2 minutes

### Method 2: Git Command Line

```bash
# Make your changes locally
# Then:

git add .
git commit -m "Updated countdown date"
git push
```

Site updates automatically after push!

---

## ⚙️ CUSTOMIZATION GUIDE

### Update Campaign End Date

In `script.js`, line 1014:
```javascript
var CAMPAIGN_END_DATE = new Date('2026-06-01T23:59:59Z');
```

### Change Brand Colors

In `styles.css`, lines 11-15:
```css
:root {
  --red: #E61A14;
  --gold: #D4A017;
  /* ... */
}
```

### Modify Point Values

In `index.html`, Points section:
- Change registration points (default: +5)
- Update pre-order tier points
- Adjust milestone thresholds

### Update Business Name

Search and replace "CCEP" with your organization name throughout `index.html`.

---

## ✅ POST-DEPLOYMENT CHECKLIST

After deployment, verify:

- [ ] Website loads at your GitHub Pages URL
- [ ] All sections display correctly
- [ ] Countdown timer is working
- [ ] Demo widget functions properly
- [ ] Navigation smooth scrolls to sections
- [ ] Responsive design works on mobile
- [ ] All buttons and links work
- [ ] Animations trigger on scroll

---

## 🐛 TROUBLESHOOTING

### Problem: Website not loading
**Solution:**
- Wait 5 minutes and refresh
- Check GitHub Pages is enabled (Settings → Pages)
- Ensure repository is Public

### Problem: Styles not applying
**Solution:**
- Verify `styles.css` is in same folder as `index.html`
- Check file names are exact (case-sensitive)
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Problem: JavaScript not working
**Solution:**
- Check browser console for errors (F12)
- Verify `script.js` is properly linked in `index.html`
- Ensure no typos in file names

### Problem: Countdown showing wrong date
**Solution:**
- Update `CAMPAIGN_END_DATE` in `script.js`
- Use ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`

---

## 🔌 BACKEND INTEGRATION

This is a frontend-only website. To add backend functionality:

### 1. Authentication System
- Implement user registration/login
- Store user profiles and business categories
- Track session state

### 2. Points Tracking API
- Create endpoints for point operations
- Store point history in database
- Real-time point updates

### 3. Leaderboard System
- Database to store rankings
- WebSocket for live updates
- Caching for performance

### 4. Admin Dashboard
- Manage campaigns
- View analytics
- Export data

**Backend Options:**
- Node.js + Express + MongoDB
- PHP + Laravel + MySQL
- Python + Django + PostgreSQL
- Serverless (AWS Lambda, Google Cloud Functions)

See `script.js` lines 1173-1202 for detailed API integration guide.

---

## 📈 ANALYTICS (Optional)

### Add Google Analytics

1. Create account at https://analytics.google.com
2. Get tracking ID
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🆘 NEED HELP?

1. **GitHub Pages Docs:** https://docs.github.com/en/pages
2. **Git Tutorial:** https://try.github.io/
3. **Stack Overflow:** https://stackoverflow.com/questions/tagged/github-pages
4. **GitHub Community:** https://github.community/

---

## 🎓 ADDITIONAL RESOURCES

- **HTML/CSS/JS Reference:** https://developer.mozilla.org/
- **Git Handbook:** https://guides.github.com/introduction/git-handbook/
- **GitHub Pages Guide:** https://pages.github.com/

---

## 🎉 CONGRATULATIONS!

Your CCEP World Cup 2026 campaign website is now live and accessible worldwide!

**Share your link:**
- With business partners
- In email campaigns
- On social media
- At events

**Your Live URL:**
```
https://YOUR-USERNAME.github.io/ccep-worldcup2026/
```

---

**Ready to launch? Let's go! 🚀⚽**
