# Code Snippets to Add - Sprinkle Haven Improvements

## Part 1: Update Navigation Component (Already in App.jsx)

Find the Navigation component and replace with:

```javascript
// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ADD THIS LINE

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false); // ADD THIS LINE
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo">
          sprinkle <span>haven</span>
        </div>
        {/* ADD mobile-active class toggle */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a></li>
          <li><a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')}>Pricing</a></li> {/* ADD THIS */}
          <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
          <li><a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
        </ul>
        <a href="#contact" className="cta-button" onClick={(e) => scrollToSection(e, '#contact')}>
          Get a Quote
        </a>
        {/* REPLACE the button with this */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};
```

## Part 2: Add New Components

Add these components BEFORE the Footer component in [App.jsx](src/App.jsx):

```javascript
// Promotional Banner Component
const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-content">
        <span className="promo-icon">🎉</span>
        <span className="promo-text">
          <strong>New Customer Special:</strong> 20% off your first deep cleaning service!
        </span>
        <a href="#contact" className="promo-cta">Claim Offer</a>
      </div>
    </div>
  );
};

// Trust Badges Component
const TrustBadges = () => {
  const badges = [
    { icon: '🏆', label: 'Award Winning Service' },
    { icon: '🔒', label: 'Licensed & Insured' },
    { icon: '✅', label: 'BBB Accredited' },
    { icon: '🌟', label: 'Top Rated on Yelp' },
    { icon: '💼', label: 'Bonded Professionals' }
  ];

  return (
    <section className="trust-badges">
      <div className="badges-container">
        {badges.map((badge, index) => (
          <div key={index} className="badge-item">
            <div className="badge-icon">{badge.icon}</div>
            <p>{badge.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// [See FULL-COMPONENTS.md for Pricing, ServiceAreas, and FAQ components]
```

## Part 3: Update Main App Component

Replace the App component's return statement:

```javascript
function App() {
  return (
    <div className="App">
      <Navigation />
      <PromoBanner />           {/* NEW */}
      <Hero />
      <TrustBadges />          {/* NEW */}
      <Services />
      <Pricing />              {/* NEW */}
      <WhyUs />
      <ServiceAreas />         {/* NEW */}
      <Testimonials />
      <FAQ />                  {/* NEW */}
      <Contact />
      <Footer />
    </div>
  );
}
```

## Part 4: CSS Additions

Add to the END of [App.css](src/App.css):

```css
/* Promotional Banner */
.promo-banner {
  background: linear-gradient(135deg, var(--gold), #C19B2E);
  padding: 0.9rem 5%;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.promo-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.promo-cta {
  background: var(--white);
  color: var(--gold);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.promo-cta:hover {
  background: var(--charcoal);
  color: var(--white);
}

/* Adjust nav and hero for promo banner */
nav { top: 45px; }
.hero { margin-top: 125px; }

/* [See FULL-STYLES.md for complete CSS] */
```

## Part 5: Update Footer FAQ Link

In the Footer component, update the FAQ link:

```javascript
<li><a href="#faq">FAQ</a></li>  // Change from href="#" to href="#faq"
```

## Quick Implementation Checklist

- [ ] Update Navigation component with mobile menu state
- [ ] Add PromoBanner component before Main App
- [ ] Add TrustBadges component before Main App
- [ ] Add Pricing component before Main App
- [ ] Add ServiceAreas component before Main App
- [ ] Add FAQ component before Main App
- [ ] Update Main App component's return statement
- [ ] Add new CSS styles to App.css
- [ ] Test on desktop browser
- [ ] Test mobile responsiveness (F12 → Toggle device toolbar)

## Files Included

1. **IMPLEMENTATION-GUIDE.md** - Overview and benefits
2. **CODE-TO-ADD.md** - This file with snippets
3. **FULL-COMPONENTS.jsx** - Complete component code (create if needed)
4. **FULL-STYLES.css** - Complete CSS code (create if needed)

## Testing

After implementation:
1. `npm start` (if not running)
2. Check http://localhost:3000
3. Verify all sections appear in order
4. Test mobile menu (resize browser or use dev tools)
5. Test FAQ accordion (click questions)
6. Verify promo banner is sticky at top

## Need Help?

All components follow the same React patterns already in your codebase. They use:
- useState for interactive elements
- map() for rendering lists
- Inline event handlers
- CSS classes for styling

The implementation maintains your existing design system (colors, fonts, spacing).
