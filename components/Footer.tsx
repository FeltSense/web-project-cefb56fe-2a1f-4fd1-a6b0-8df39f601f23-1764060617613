'use client';

import { Building2, Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, ChevronRight, Award } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const propertyTypes = [
    { name: 'Luxury Estates', href: '#properties' },
    { name: 'Penthouses', href: '#properties' },
    { name: 'Waterfront Villas', href: '#properties' },
    { name: 'Historic Mansions', href: '#properties' },
    { name: 'Private Islands', href: '#properties' },
    { name: 'Golf Course Properties', href: '#properties' },
  ];

  const services = [
    { name: 'Property Buying', href: '#services' },
    { name: 'Property Selling', href: '#services' },
    { name: 'Property Management', href: '#services' },
    { name: 'Investment Advisory', href: '#services' },
    { name: 'Virtual Tours', href: '#properties' },
    { name: 'Market Analysis', href: '#services' },
  ];

  const resources = [
    { name: 'Mortgage Calculator', href: '#calculator' },
    { name: 'Neighborhood Guides', href: '#neighborhoods' },
    { name: 'Market Reports', href: '#insights' },
    { name: 'Luxury Living Blog', href: '#blog' },
    { name: 'Investment Tips', href: '#blog' },
    { name: 'FAQs', href: '#faq' },
  ];

  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#agents' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press & Media', href: '#press' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  ];

  const certifications = [
    'Luxury Property Specialist',
    'Certified Luxury Home Marketing',
    'International Property Specialist',
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-xl font-bold">Luxe Estate</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner in luxury real estate. Specializing in exceptional properties for discerning clients worldwide since 2003.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+15551234567" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
              <a href="mailto:luxury@luxeestate.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">luxury@luxeestate.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">5th Avenue, Suite 2000<br />New York, NY 10022</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-start gap-2 text-slate-400">
              <Award className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed">
                {certifications.join(' • ')}
              </div>
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white font-semibold mb-4">Property Types</h3>
            <ul className="space-y-3">
              {propertyTypes.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 pt-12 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold mb-2">Subscribe to Our Luxury Newsletter</h3>
            <p className="text-slate-400 mb-6">
              Receive exclusive listings, market insights, and luxury living trends delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-slate-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-slate-400 text-sm text-center lg:text-left">
              <p>© {currentYear} Luxe Estate Properties. All rights reserved.</p>
              <p className="mt-1">Licensed Real Estate Broker • Equal Housing Opportunity</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-slate-500">
            <span>🏆 Top 1% of Luxury Agents Nationwide</span>
            <span className="hidden sm:inline">•</span>
            <span>📊 $2B+ in Closed Transactions</span>
            <span className="hidden sm:inline">•</span>
            <span>⭐ 4.9/5 Average Client Rating</span>
            <span className="hidden sm:inline">•</span>
            <span>🔒 Secure & Confidential Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}