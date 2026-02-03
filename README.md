# 🚀 Modern Portfolio Website

A stunning, high-performance portfolio website built with Next.js, React, TypeScript, Framer Motion, and Three.js. Perfect for showcasing your frontend development and UI/UX skills to recruiters!

![Portfolio Preview](https://via.placeholder.com/1200x600/1e293b/60a5fa?text=Your+Amazing+Portfolio)

## ✨ Features

- 🎨 **Stunning UI/UX** - Modern, clean design with smooth animations
- 🎭 **Framer Motion Animations** - Buttery smooth page transitions and micro-interactions
- 🎲 **3D Elements** - Subtle Three.js 3D floating shapes for visual appeal
- 📱 **Fully Responsive** - Looks perfect on all devices
- 🌙 **Dark Mode** - Beautiful dark theme optimized for readability
- ⚡ **Lightning Fast** - Optimized for performance with Next.js 14
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards
- 📊 **GitHub Integration** - Automatically fetch and display your latest repos
- 🎪 **Glass Morphism** - Modern glass-like UI elements
- 🌈 **Gradient Accents** - Eye-catching color gradients throughout
- 📮 **Contact Form** - Working contact form (ready for integration)
- 🧩 **shadcn/ui Components** - Professional, accessible UI components

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js + React Three Fiber + Drei
- **UI Components:** shadcn/ui (Radix UI)
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Git

### Step 1: Clone or Download

```bash
# If using Git
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Or simply extract the files to your project folder
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### Step 3: Configure Your Portfolio

Edit the following files to personalize your portfolio:

1. **Personal Information** - Update in each component:
   - `components/Hero.tsx` - Your name, title, description
   - `components/About.tsx` - Your bio and highlights
   - `components/Skills.tsx` - Your skills and technologies
   - `components/Projects.tsx` - Your projects
   - `components/Experience.tsx` - Your work history
   - `components/Contact.tsx` - Your contact information

2. **GitHub Integration** - In `components/Projects.tsx`:
   ```typescript
   // Line ~50: Replace with your GitHub username
   fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=6')
   ```

3. **Social Links** - Update in `components/Navbar.tsx` and `components/Contact.tsx`:
   - GitHub URL
   - LinkedIn URL
   - Twitter URL
   - Email address

4. **Metadata** - Edit `app/layout.tsx`:
   - Site title
   - Description
   - Keywords
   - Social media handles

### Step 4: Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Customization Guide

### Colors & Theme

The portfolio uses a gradient color scheme. To customize:

1. **Tailwind Config** (`tailwind.config.js`):
   - Modify color variables
   - Change animation timings
   - Adjust breakpoints

2. **CSS Variables** (`app/globals.css`):
   - Update color HSL values
   - Modify gradient stops
   - Change animation keyframes

### Components

Each component is in the `components/` folder and is fully customizable:

- `Navbar.tsx` - Navigation bar with scroll effect
- `Hero.tsx` - Landing section with 3D background
- `About.tsx` - About section with highlights
- `Skills.tsx` - Skills with animated progress bars
- `Projects.tsx` - Projects grid with GitHub integration
- `Experience.tsx` - Timeline of experience
- `Contact.tsx` - Contact form and info
- `Footer.tsx` - Footer with links

### Adding New Sections

1. Create a new component in `components/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (Vercel auto-detects Next.js)

Your portfolio will be live at `your-project.vercel.app`

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

### Other Platforms

The portfolio works on any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 📝 Adding Projects

### Featured Projects (Manual)

Edit `components/Projects.tsx` and add to the `featuredProjects` array:

```typescript
{
  title: 'Your Project Name',
  description: 'Project description',
  image: 'https://images.unsplash.com/photo-...',
  tech: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/you/project',
  demo: 'https://your-demo.com',
}
```

### GitHub Projects (Automatic)

Your latest GitHub repos are automatically fetched and displayed!

Just make sure:
- Repos are public
- Have good descriptions
- Use topics/tags for categorization
- Star your best projects

## 🎯 Performance Optimization

The portfolio is already optimized, but you can improve further:

1. **Images:** Use Next.js Image component for automatic optimization
2. **Fonts:** Already using next/font for optimal font loading
3. **Code Splitting:** Automatic with Next.js App Router
4. **Analytics:** Add Vercel Analytics or Google Analytics
5. **Lazy Loading:** Use React Suspense for heavy components

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm run dev
```

### Three.js warnings in console
These are normal in development mode and won't appear in production.

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Tips for Career Fair

1. **Test on mobile** - Recruiters often use phones
2. **Fast internet** - Ensure smooth 3D animations
3. **Business cards** - Add QR code linking to your portfolio
4. **Practice demo** - Know how to quickly show your best projects
5. **Backup plan** - Have screenshots ready in case of internet issues
6. **Custom domain** - Consider buying yourname.dev or similar
7. **Analytics** - Track visits to see recruiter interest

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Reach out on Twitter/LinkedIn
- Check Next.js documentation

---

**Made with ❤️ for developers looking to land their dream job!**

Good luck at your career fair! 🚀
