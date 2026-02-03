# 🚀 Quick Setup Guide for WebStorm + GitHub Copilot

## Getting Started in 5 Minutes

### 1️⃣ Open Project in WebStorm
1. Open WebStorm
2. File → Open → Select the `portfolio-project` folder
3. WebStorm will auto-detect it's a Next.js project

### 2️⃣ Install Dependencies
In WebStorm's terminal (Alt+F12 / Option+F12):
```bash
npm install
```

### 3️⃣ Start Development Server
```bash
npm run dev
```
Portfolio will be live at: http://localhost:3000

### 4️⃣ Customize Your Content

#### Quick Personalization Checklist:
- [ ] **Hero Section** (`components/Hero.tsx`)
  - Change "Your Name" (line 68)
  - Update job title (line 76)
  - Modify description (line 82)
  
- [ ] **About Section** (`components/About.tsx`)
  - Update bio text (lines 111-121)
  - Change technologies list (line 123)
  
- [ ] **Skills** (`components/Skills.tsx`)
  - Adjust skill percentages
  - Add/remove skills
  
- [ ] **Projects** (`components/Projects.tsx`)
  - Replace featured projects (lines 18-51)
  - Update GitHub username (line 55)
  
- [ ] **Experience** (`components/Experience.tsx`)
  - Update work history
  
- [ ] **Contact** (`components/Contact.tsx`)
  - Add your email (line 15)
  - Add phone (line 20)
  - Add location (line 25)
  - Update social links (lines 30-51)
  
- [ ] **Navbar** (`components/Navbar.tsx`)
  - Update GitHub link (line 46)
  - Update LinkedIn link (line 54)
  
- [ ] **Metadata** (`app/layout.tsx`)
  - Update title, description (lines 13-14)
  - Change Twitter handle (line 27)

### 5️⃣ Using GitHub Copilot

Enable Copilot in WebStorm:
1. Settings → Tools → GitHub Copilot
2. Sign in with your GitHub account
3. Start coding - Copilot will suggest code as you type!

**Pro Tips:**
- Write comments describing what you want, Copilot will generate code
- Use Tab to accept suggestions
- Use Alt+] / Option+] for next suggestion

### 6️⃣ Deploy to Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Done! 🎉

### 7️⃣ Common Commands

```bash
# Development
npm run dev          # Start dev server

# Building
npm run build        # Build for production
npm run start        # Run production build

# Linting
npm run lint         # Check code quality
```

### 🎨 Customizing Colors

The portfolio uses a blue-purple-pink gradient theme.

To change colors, edit `tailwind.config.js`:
```javascript
// Line 20-30: Change primary colors
primary: "221.2 83.2% 53.3%",  // Blue
// Change to your preferred color (HSL format)
```

### 🖼️ Adding Your Photo

Replace the emoji (👨‍💻) in `components/About.tsx` (line 90):
```tsx
// Instead of emoji, use an image:
<img 
  src="/your-photo.jpg" 
  alt="Your Name"
  className="w-full h-full rounded-full object-cover"
/>
```

Put your photo in the `public/` folder.

### 📸 Project Screenshots

Add screenshots to featured projects:
1. Take screenshots of your projects
2. Upload to Unsplash or use your own URLs
3. Update image URLs in `components/Projects.tsx`

### ⚡ Performance Tips

Before deploying:
1. ✅ Test on mobile devices
2. ✅ Check all links work
3. ✅ Optimize images (use WebP format)
4. ✅ Test contact form
5. ✅ Remove any console.logs

### 🐛 Troubleshooting

**Problem:** Three.js shows warnings
**Solution:** Normal in dev mode, won't appear in production

**Problem:** Port 3000 busy
**Solution:** `PORT=3001 npm run dev`

**Problem:** Build fails
**Solution:** 
```bash
rm -rf .next node_modules
npm install
npm run build
```

### 📱 Mobile Testing

Test your portfolio on mobile:
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Open `http://YOUR_IP:3000` on your phone
3. Make sure both devices are on same WiFi

---

## Ready for Career Fair? ✅

Before the big day:
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Check mobile responsiveness
- [ ] Ensure all links work
- [ ] Practice your demo (30 seconds, 1 minute, 5 minutes)
- [ ] Have business cards with QR code
- [ ] Test on career fair WiFi if possible
- [ ] Bookmark your live URL
- [ ] Charge your devices fully!

---

**Need help?** Check README.md for detailed documentation.

**Good luck! You've got this! 🚀**
