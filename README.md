# Brighters - Climate Action Non-Profit Website

A modern, fully responsive website for a climate-focused non-profit organization dedicated to environmental conservation and sustainable development. Features stunning animations, interactive elements, and an engaging user experience.

## Features

### 🎨 Visual Design
- **Animated Hero Slider**: Auto-sliding background images with smooth left-to-right transitions (2-second intervals)
- **Custom Logo**: Professional branding with optimized logo display
- **Scroll-Triggered Animations**: All sections animate beautifully as you scroll down the page
- **Hover Effects**: Interactive cards with image zoom, shadow effects, and smooth transitions

### 📱 Responsive Design
- **Ultra-Responsive Layout**: Works on devices from 2px to desktop width
- **Enhanced Mobile Navigation**: Modern hamburger menu with animations
- **Touch-Optimized**: 44px minimum touch targets, smooth interactions
- **Adaptive Layouts**: Grid layouts on desktop, optimized stacking on mobile
- **Mobile Typography**: Responsive font scaling and spacing
- **Cross-Device Compatibility**: Seamless experience on all screen sizes

### ✨ Interactive Elements
- **Animated Statistics**: Counter animations that trigger on scroll
- **Leadership Cards**: Expandable founder profiles with hover effects
- **Program Cards**: Beautiful overlay effects with staggered animations
- **Smooth Scrolling**: Enhanced navigation experience
- **Auto-Play Features**: Background slider with seamless transitions

### 🎯 Key Sections
**Homepage (index.html):**
- **Hero Section**: Dynamic background slider with call-to-action
- **Statistics Showcase**: Animated counters displaying impact metrics
- **Leadership Team**: Founder, Chair, and Director profiles with social links
- **Programs**: Three featured programs with Facebook page integrations
- **Contact Footer**: Quick links and contact information

**About Page (about.html):**
- **Hero Section**: Background image with mission statement
- **Company Statistics**: Detailed metrics and social media stats
- **Mission & Vision**: Interactive content tabs
- **Programs Overview**: Detailed program descriptions
- **Team Categories**: Leadership, Ambassadors, and Volunteers
- **Join Process**: Step-by-step guide to joining Brighters

## Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Advanced styling with animations, transitions, and transforms
  - Flexbox & Grid layouts
  - Custom animations (@keyframes)
  - Responsive media queries
  - Smooth transitions and hover effects
- **JavaScript**: Interactive features and dynamic content
  - Intersection Observer API for scroll animations
  - Background slider functionality
  - Mobile navigation toggle
  - Counter animations
  - Touch gesture support
- **Font Awesome 6.0**: Icon library for social media and UI elements
- **Cache-Busting System**: Automatic version management for instant updates

## 🚀 Quick Update System

### Problem Solved
Previously, updates to the website took a long time to appear on GitHub Pages due to browser caching. This has been fixed with an automatic cache-busting system.

### How It Works
All static assets (CSS, JS, images) now include version parameters (`?v=1.0.1`). When you update the version, browsers will fetch the latest files instead of using cached versions.

### Before Publishing Updates

**Option 1: PowerShell (Recommended for Windows)**
```powershell
.\update-version.ps1
```

**Option 2: Node.js Script**
```bash
node update-version.js
```

**Option 3: Batch File**
```cmd
update-version.bat
```

**Option 4: Manual Update**
Edit `index.html` and change all `?v=1.0.1` to a new version number (e.g., `?v=1.0.2`)

### Complete Publishing Workflow
```powershell
# 1. Update cache-busting versions
.\update-version.ps1

# 2. Stage changes
git add .

# 3. Commit with message
git commit -m "Update website content"

# 4. Push to GitHub
git push
```

Your changes will now appear **immediately** on GitHub Pages! 🎉
- **Google Fonts**: Lato font family for modern typography

## File Structure

```
brighters/
│
├── index.html              # Main homepage
├── about.html              # About page with detailed information
├── style.css               # Homepage styling and animations
├── about.css               # About page styling
├── mobile-improvements.css # Enhanced mobile responsive design
├── script.js               # Homepage interactive functionality
├── about.js                # About page functionality
├── logo.png                # Organization logo
├── 2.png                   # Founder profile image
├── 3.png                   # Chair profile image
├── 4.png                   # Director profile image
├── 5.png - 11.png          # Program and hero images
├── 12.png                  # About page background image
├── update-version.ps1      # Cache-busting script
└── README.md               # Documentation
```

## Setup Instructions

1. Clone or download the project files
2. Ensure all image files (logo.png, 2.png - 11.png) are in the root directory
3. Open `index.html` in a modern web browser
4. No build process or dependencies required - pure HTML/CSS/JS

## Customization Guide

### Colors
The main color scheme uses:
- **Primary Green**: `#00a86b` - Main brand color
- **Accent Orange**: `#ffa500` - Call-to-action elements
- **Dark Background**: `#2c3e50` - Footer
- **Light Background**: `#f9f9f9` - Section backgrounds

### Images
Replace the following images with your own:
- `logo.png` - Organization logo (recommended: 100px height)
- `2.png, 3.png, 4.png` - Leadership profile photos (recommended: 200x200px)
- `5.png, 7.png, 8.png` - Program images
- `9.png, 10.png, 11.png` - Hero background slider images (recommended: 1920x1080px)

### Content
Edit `index.html` to update:
- Organization name and mission
- Leadership team information
- Program descriptions and links
- Contact information
- Social media links

### Animations
Adjust animation timing in `style.css`:
- Hero slider interval: Change `2000` in `script.js` (line with `setInterval`)
- Scroll animation speed: Modify `transition` duration values
- Hover effects: Adjust `transition` properties on interactive elements

## Animation Features

### Page Load Animations
- Navbar slides down from top
- Hero content fades in with staggered timing
- Background slider starts automatically

### Scroll Animations
- Stats cards fade in with counter animations
- Leadership section reveals with scale effect
- Program cards slide up with delays
- Footer fades in from bottom

### Hover Animations
- Leadership cards expand with additional information
- Program cards show overlay with details
- Buttons scale up with shadow effects
- Images zoom smoothly

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: > 768px (3-column grid layouts)
- **Mobile**: ≤ 768px (Single column, stacked layout)

## Performance Optimizations

- CSS animations use `transform` and `opacity` for GPU acceleration
- Intersection Observer API for efficient scroll detection
- Optimized image loading
- Minimal JavaScript for fast page load

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast text for readability
- Alt text for all images

## License

This project is open source and available for non-profit organizations.

## Contact

**Brighters Organization**
- Email: info@brighters.org
- Phone: +1 (555) 123-4567

## Social Media

Connect with our leadership team:
- [Founder - Saidur Rahman Siam](https://www.facebook.com/share/17oVAJvGhq/)
- [Chair - Fariha S Aumi](https://www.facebook.com/share/1M6KgxgkTW/)
- [Director - Mohammad Shohanur Amin](https://www.facebook.com/share/1Bur1tRRgY/)

## Programs

- [Youth Cup 2025](https://www.facebook.com/YouthCopBD)
- [Kushtia Youth Climate Summit](https://www.facebook.com/profile.php?id=61575626646834)
- [Climate Olympiad 2025](https://www.facebook.com/profile.php?id=61557581024914)

---

**Built with ❤️ for a sustainable future**
