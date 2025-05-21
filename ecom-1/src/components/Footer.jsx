
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-purple-400">Digital</span>
              <span className="font-extrabold">Edge</span>
            </div>
            <p className="text-gray-400 mb-6">
              We help businesses grow through strategic digital marketing solutions that drive results.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 hover:bg-purple-600 transition-colors p-2 rounded-full"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold mb-6">Quick Links</p>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Services",
                "Portfolio",
                "Testimonials",
                "Contact Us"
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-lg font-semibold mb-6">Our Services</p>
            <ul className="space-y-3">
              {[
                "Search Engine Optimization",
                "Pay-Per-Click Advertising",
                "Social Media Marketing",
                "Content Marketing",
                "Web Design & Development",
                "Mobile Marketing"
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-semibold mb-6">Contact Us</p>
            <ul className="space-y-4">
              {[
                {
                  icon: <MapPin className="h-5 w-5 text-purple-400" />,
                  text: "123 Marketing Street, Digital City, DC 10101"
                },
                {
                  icon: <Phone className="h-5 w-5 text-purple-400" />,
                  text: "+1 (555) 123-4567"
                },
                {
                  icon: <Mail className="h-5 w-5 text-purple-400" />,
                  text: "info@digitaledge.com"
                }
              ].map((contact, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-1">{contact.icon}</span>
                  <span className="text-gray-400">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">
                Stay updated with the latest digital marketing trends and insights.
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-md bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="rounded-l-none gradient-bg">
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} DigitalEdge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
