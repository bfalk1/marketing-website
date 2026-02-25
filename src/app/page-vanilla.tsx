'use client'

import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-container">
          <div className="nav-brand">ModernTech</div>
          
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            <li><a href="#" className="btn btn-primary">Get Started</a></li>
          </ul>

          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>
            Transform Your Business with 
            <br /><span className="highlight">Modern Technology</span>
          </h1>
          <p>
            We deliver cutting-edge web development, mobile apps, and cloud solutions 
            that drive growth and innovation for businesses worldwide.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get Started Today →</a>
            <a href="#services" className="btn btn-outline">Learn More</a>
          </div>
          
          <div className="stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose ModernTech?</h2>
            <p>
              We combine cutting-edge technology with proven methodologies to deliver 
              exceptional results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Our optimized solutions ensure blazing-fast performance and exceptional user experiences.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">🛡️</div>
              <h3>Secure & Reliable</h3>
              <p>
                Enterprise-grade security and 99.9% uptime guarantee keep your business protected.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">👥</div>
              <h3>Expert Support</h3>
              <p>
                Dedicated team of experts available 24/7 to support your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">💻</div>
              <h3>Web Development</h3>
              <p>
                Custom websites and web applications built with modern frameworks and best practices.
              </p>
              <ul className="features-list">
                <li>React & Next.js</li>
                <li>Node.js & Express</li>
                <li>Database Integration</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>
                Native and cross-platform mobile applications for iOS and Android.
              </p>
              <ul className="features-list">
                <li>React Native</li>
                <li>Flutter</li>
                <li>App Store Publishing</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">☁️</div>
              <h3>Cloud Solutions</h3>
              <p>
                Scalable cloud infrastructure and deployment solutions.
              </p>
              <ul className="features-list">
                <li>AWS & Azure</li>
                <li>DevOps & CI/CD</li>
                <li>Monitoring & Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it - hear from our satisfied clients.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="testimonial">
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="testimonial-text">
                "ModernTech transformed our online presence completely. The new website is fast, 
                beautiful, and has increased our conversions by 300%."
              </p>
              <div className="testimonial-author">
                <div className="avatar">SJ</div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="testimonial-text">
                "Outstanding work on our mobile app. The team delivered exactly what we needed 
                on time and within budget. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <div className="avatar">MR</div>
                <div className="author-info">
                  <h4>Michael Roberts</h4>
                  <p>Founder, StartupXYZ</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="testimonial-text">
                "The cloud migration was seamless. Our applications are now faster and more 
                reliable than ever. Excellent technical expertise."
              </p>
              <div className="testimonial-author">
                <div className="avatar">EL</div>
                <div className="author-info">
                  <h4>Emily Lee</h4>
                  <p>CTO, InnovateCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>
              Ready to transform your business? Let's discuss your project and 
              create something amazing together.
            </p>
          </div>
          
          <div className="grid grid-2">
            <div className="contact-info">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Contact Information</h3>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>hello@moderntech.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>123 Innovation Drive<br />Tech City, TC 12345</p>
                </div>
              </div>
            </div>
            
            <div>
              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-input" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-input" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="john@example.com" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-input" placeholder="Project Inquiry" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" rows={6} placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>ModernTech</h3>
              <p style={{ color: '#d1d5db' }}>
                Transforming businesses with innovative technology solutions.
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Mobile Apps</a></li>
                <li><a href="#">Cloud Solutions</a></li>
                <li><a href="#">Consulting</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul className="footer-links">
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p style={{ color: '#d1d5db' }}>
              © 2024 ModernTech Solutions. All rights reserved.
            </p>
            <ul className="footer-links-inline">
              <li><a href="#" style={{ color: '#d1d5db' }}>Privacy</a></li>
              <li><a href="#" style={{ color: '#d1d5db' }}>Terms</a></li>
              <li><a href="#" style={{ color: '#d1d5db' }}>Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}