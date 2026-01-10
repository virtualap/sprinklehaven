import React, { useState, useEffect } from 'react';
import './App.css';

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo">
          sprinkle <span>haven</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
          <li><a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
        </ul>
        <a href="#contact" className="cta-button" onClick={(e) => scrollToSection(e, '#contact')}>
          Get a Quote
        </a>
        <button className="mobile-menu-btn">☰</button>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Where Clean Meets <span className="accent">Exceptional</span>
          </h1>
          <p>
            Transform your space with our premium residential and commercial cleaning solutions. 
            We bring sparkle, care, and pristine results to every corner.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">Schedule Service</a>
            <a href="#services" className="secondary-btn">Our Services</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop" 
              alt="Professional cleaning service" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description, features, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const element = document.getElementById(`service-${title.replace(/\s+/g, '-')}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [title]);

  return (
    <div 
      id={`service-${title.replace(/\s+/g, '-')}`}
      className={`service-card ${isVisible ? 'fade-in-visible' : ''}`}
      style={{ animationDelay: delay }}
    >
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Residential Cleaning',
      description: 'Experience the joy of coming home to a spotless space. Our residential cleaning services are designed to make your home a haven of comfort and cleanliness.',
      features: [
        'Deep cleaning & regular maintenance',
        'Kitchen & bathroom sanitization',
        'Floor care & carpet cleaning',
        'Window & glass cleaning'
      ],
      delay: '0s'
    },
    {
      icon: '🏢',
      title: 'Commercial Cleaning',
      description: 'Keep your business space professional and inviting. We provide thorough commercial cleaning that maintains the highest standards for your workplace.',
      features: [
        'Office & workspace cleaning',
        'Retail space maintenance',
        'Restroom sanitization',
        'Floor & surface care'
      ],
      delay: '0.2s'
    },
    {
      icon: '✨',
      title: 'Deep Cleaning',
      description: 'Go beyond the surface with our intensive deep cleaning services. Perfect for seasonal cleanings, move-ins, or when you need that extra level of clean.',
      features: [
        'Detailed appliance cleaning',
        'Baseboards & trim detailing',
        'Cabinet & closet organization',
        'Hard-to-reach area cleaning'
      ],
      delay: '0.4s'
    },
    {
      icon: '🌿',
      title: 'Eco-Friendly Options',
      description: 'Care for your space and the planet. Our eco-friendly cleaning uses green products and sustainable practices without compromising on quality.',
      features: [
        'Non-toxic cleaning products',
        'Sustainable practices',
        'Safe for children & pets',
        'Allergen-conscious cleaning'
      ],
      delay: '0.6s'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Comprehensive cleaning solutions tailored to your needs, delivered with excellence and attention to detail.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

// Feature Item Component
const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">{icon}</div>
      <div className="feature-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ number, label }) => {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

// Why Us Section
const WhyUs = () => {
  const features = [
    {
      icon: '🛡️',
      title: 'Fully Insured & Bonded',
      description: 'Complete protection and peace of mind for your property'
    },
    {
      icon: '👥',
      title: 'Trained Professionals',
      description: 'Background-checked, skilled team members you can trust'
    },
    {
      icon: '💚',
      title: 'Eco-Conscious Approach',
      description: 'Green cleaning products that are safe for everyone'
    },
    {
      icon: '⭐',
      title: 'Satisfaction Guaranteed',
      description: 'We\'re not happy until you\'re thrilled with the results'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '5,000+', label: 'Spaces Cleaned' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="why-us">
      <div className="why-us-content">
        <div className="why-us-text">
          <h2>Why Sprinkle Haven Stands Apart</h2>
          <p>
            We're not just another cleaning service. We're your partners in creating spaces that shine, 
            inspire, and provide peace of mind. With years of expertise and a commitment to excellence, 
            we deliver results that exceed expectations.
          </p>
          <div className="features-list">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ text, author, role, initials }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <div className="author-avatar">{initials}</div>
        <div className="author-info">
          <h5>{author}</h5>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      text: 'Absolutely incredible service! They transformed our office space and now our employees look forward to coming to work. The attention to detail is unmatched.',
      author: 'Jennifer Martinez',
      role: 'Business Owner',
      initials: 'JM'
    },
    {
      text: 'I\'ve tried several cleaning services, but Sprinkle Haven is in a league of their own. Professional, thorough, and they use eco-friendly products. Highly recommend!',
      author: 'David Kim',
      role: 'Homeowner',
      initials: 'DK'
    },
    {
      text: 'The team is always on time, respectful, and does an amazing job. My home has never looked better. Worth every penny and more!',
      author: 'Sarah Reynolds',
      role: 'Residential Client',
      initials: 'SR'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="section-header">
        <h2>What Our Clients Say</h2>
        <p>Don't just take our word for it. Here's what our valued clients have to say about their experience with Sprinkle Haven.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          required
        />
      </div>
      <div className="form-group">
        <label>Service Type</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service</option>
          <option value="residential">Residential Cleaning</option>
          <option value="commercial">Commercial Cleaning</option>
          <option value="deep">Deep Cleaning</option>
          <option value="eco">Eco-Friendly Cleaning</option>
        </select>
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your cleaning needs..."
          required
        />
      </div>
      <button type="submit" className="submit-btn">Request Quote</button>
    </form>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Ready for a Spotless Space?</h2>
          <p>
            Get in touch with us today for a free quote. Whether you need residential or commercial 
            cleaning, we're here to help make your space shine.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <span>(210) 123-4567</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <span>info@sprinklehavencleaning.com</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <span>123 Clean Street, Suite 100<br />San Antonio, TX 12345</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <span>Mon-Fri: 8am-6pm<br />Sat: 9am-4pm</span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-about">
          <h3>Sprinkle Haven</h3>
          <p>
            Transforming spaces with exceptional cleaning services since 2013. 
            Your satisfaction is our priority, and cleanliness is our passion.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">f</a>
            <a href="#" className="social-link">in</a>
            <a href="#" className="social-link">ig</a>
            <a href="#" className="social-link">tw</a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Residential</a></li>
            <li><a href="#services">Commercial</a></li>
            <li><a href="#services">Deep Cleaning</a></li>
            <li><a href="#services">Eco-Friendly</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Booking</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sprinkle Haven Cleaning Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
