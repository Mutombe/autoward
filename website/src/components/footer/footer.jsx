import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Resources', to: '/resources' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { icon: Github, href: '#', color: 'hover:bg-gray-800' }
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Stand 14432 Seke Road, Graniteside, Harare' },
    { icon: Phone, text: '+263 772 714 099' },
    { icon: Mail, text: 'autowardelectronics@gmail.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for the latest updates and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Howard Electronics</h4>
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 mb-4 text-gray-400"
              >
                <item.icon className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-white flex items-center space-x-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full bg-gray-800 ${social.color} transition-colors`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-bold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Autoward Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
