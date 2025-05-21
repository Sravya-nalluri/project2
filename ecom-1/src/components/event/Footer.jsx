import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  ];

  const footerNavs = [
    { title: "About", items: ["The Event", "Our Mission", "Past Events"] },
    { title: "Attend", items: ["Register", "Speakers", "Schedule", "Venue"] },
    { title: "Support", items: ["Sponsors", "Media Kit", "Contact Us", "FAQ"] },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="text-3xl font-bold text-white">
              <span className="gradient-text">Innovate</span>Sphere
            </a>
            <p className="mt-4 text-gray-400 max-w-md">
              The premier conference for tech enthusiasts, innovators, and industry leaders. Join us to explore the future of technology.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors p-2 bg-gray-800 rounded-full"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerNavs.map(nav => (
            <div key={nav.title}>
              <p className="font-semibold text-white mb-4">{nav.title}</p>
              <ul className="space-y-3">
                {nav.items.map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-primary transition-colors text-gray-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-800 text-sm">
            <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>Global Tech Hub Center, Innovation City</span>
            </div>
            <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>+1 (555) INNOVATE (466-6828)</span>
            </div>
            <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>info@innovatesphere.com</span>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} InnovateSphere. All rights reserved. A fictional event by Hostinger Horizons.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;