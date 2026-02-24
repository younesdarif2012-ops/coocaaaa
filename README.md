# CCEP × World Cup 2026 — Score More, Win More

A modern, interactive B2B rewards campaign website for Coca-Cola Europacific Partners' World Cup 2026 promotion. Built with vanilla HTML, CSS, and JavaScript.

![CCEP World Cup 2026](https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80)

## 🏆 Campaign Overview

This website powers a points-based rewards campaign where CCEP business partners can:
- Earn points through various tasks and pre-orders
- Track progress toward reward milestones (50, 75, 100 points)
- Compete on a live leaderboard
- Unlock exclusive business rewards
- Enter for a chance to win FIFA World Cup 2026 Final tickets

## ✨ Features

- **Interactive Demo Widget** - Try the points system before registering
- **Real-time Countdown** - Campaign end date timer
- **Milestone Progress Tracking** - Visual progress bars and status indicators
- **Business Category Tabs** - Tailored rewards for different business types
- **Live Leaderboard** - Rankings of top performers
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Smooth Animations** - Scroll-triggered reveals and transitions
- **Accessibility** - ARIA labels, keyboard navigation, semantic HTML

## 📋 Sections

1. **Announcement Bar** - Campaign countdown timer
2. **Navigation** - Sticky nav with smooth scroll
3. **Hero Section** - Animated 3D football with key messaging
4. **Interactive Demo** - Sticky widget showing how points work
5. **How It Works** - 3-step process explanation
6. **Points & Tasks** - Detailed breakdown of earning opportunities
7. **Rewards Milestones** - Visual track with 3 reward tiers
8. **Fairness & Conditions** - Transparent rules and timeline
9. **Business Categories** - Customized rewards by business type
10. **Leaderboard** - Live rankings
11. **FAQ** - Common questions answered
12. **Footer** - Links and legal information

## 🚀 Quick Start

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/YOUR-USERNAME/ccep-worldcup2026.git
cd ccep-worldcup2026
```

2. Open `index.html` in your browser or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000`

### GitHub Pages Deployment

1. Push code to GitHub
2. Go to repository Settings → Pages
3. Select "main" branch as source
4. Your site will be live at: `https://YOUR-USERNAME.github.io/ccep-worldcup2026/`

## 📁 File Structure

```
ccep-worldcup2026/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file
└── LICENSE             # MIT License
```

## 🎨 Technology Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, animations
- **JavaScript (ES6)** - Vanilla JS, no frameworks
- **Google Fonts** - Barlow Condensed & Barlow
- **CSS Variables** - Easy theming and customization

## 🔧 Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --red: #E61A14;           /* Primary brand color */
  --red-dark: #B01010;      /* Darker accent */
  --red-light: #FF3B35;     /* Lighter accent */
  --gold: #D4A017;          /* Gold tier color */
  /* ... */
}
```

### Campaign End Date

Update in `script.js`:

```javascript
var CAMPAIGN_END_DATE = new Date('2026-06-01T23:59:59Z');
```

### Points & Rewards

Modify point values in the HTML sections:
- Onboarding tasks section
- Pre-order points section
- Reward milestone thresholds

## 🔌 Backend Integration

The website is frontend-ready and includes integration points for:

1. **Authentication** - User sessions and profiles
2. **Points API** - Real-time point tracking
3. **Milestones** - Eligibility status
4. **Leaderboard** - Live rankings with WebSocket support
5. **Rewards** - Redemption system

See detailed API documentation in `script.js` comments (lines 1173-1202).

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- ARIA labels and roles
- Keyboard navigation
- Screen reader friendly
- Semantic HTML structure
- Color contrast compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Created for Coca-Cola Europacific Partners World Cup 2026 Campaign

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built for CCEP Business Partners** 🥤⚽
