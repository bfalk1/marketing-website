'use client'

import { useState } from 'react'
import { 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield,
  Code,
  Smartphone,
  Cloud,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary-600">ModernTech</h1>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium">Features</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Home</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Features</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Services</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Contact</a>
              <button className="w-full text-left bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition duration-200">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-bg text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with 
              <span className="block text-yellow-300">Modern Technology</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              We deliver cutting-edge web development, mobile apps, and cloud solutions 
              that drive growth and innovation for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 flex items-center justify-center">
                Get Started Today <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition duration-200">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-lg opacity-80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">98%</div>
                <div className="text-lg opacity-80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-lg opacity-80">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ModernTech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver 
              exceptional results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-200">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Our optimized solutions ensure blazing-fast performance and exceptional user experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-200">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and 99.9% uptime guarantee keep your business protected.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-200">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated team of experts available 24/7 to support your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group hover:transform hover:scale-105 transition duration-200">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Code className="text-primary-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Custom websites and web applications built with modern frameworks and best practices.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />React & Next.js</li>
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Node.js & Express</li>
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Database Integration</li>
                </ul>
              </div>
            </div>
            
            <div className="group hover:transform hover:scale-105 transition duration-200">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Smartphone className="text-primary-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
                <p className="text-gray-600 mb-4">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />React Native</li>
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Flutter</li>
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />App Store Publishing</li>
                </ul>
              </div>
            </div>
            
            <div className="group hover:transform hover:scale-105 transition duration-200">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <Cloud className="text-primary-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Scalable cloud infrastructure and deployment solutions.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />AWS & Azure</li>
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />DevOps & CI/CD</li>
                  <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={16} />Monitoring & Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "ModernTech transformed our online presence completely. The new website is fast, 
                beautiful, and has increased our conversions by 300%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold">SJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">CEO, TechCorp</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Outstanding work on our mobile app. The team delivered exactly what we needed 
                on time and within budget. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Roberts</h4>
                  <p className="text-sm text-gray-500">Founder, StartupXYZ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The cloud migration was seamless. Our applications are now faster and more 
                reliable than ever. Excellent technical expertise."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold">EL</span>
                </div>
                <div>
                  <h4 className="font-semibold">Emily Lee</h4>
                  <p className="text-sm text-gray-500">CTO, InnovateCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business? Let's discuss your project and 
              create something amazing together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-primary-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">hello@moderntech.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-primary-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-primary-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600">123 Innovation Drive<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition duration-200 flex items-center justify-center"
                >
                  Send Message <ArrowRight className="ml-2" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ModernTech</h3>
              <p className="text-gray-300">
                Transforming businesses with innovative technology solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Cloud Solutions</li>
                <li>Consulting</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          
          <hr className="border-gray-700 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © 2024 ModernTech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}