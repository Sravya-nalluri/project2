import React from "react";
import { Watch, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  ];

  const footerSections = [
    {
      title: "Shop",
      links: ["All Watches", "New Arrivals", "Luxury Brands", "Mens", "Womens", "Sale"]
    },
    {
      title: "Customer Service",
      links: ["Contact Us", "FAQ", "Shipping & Returns", "Warranty", "Track Order"]
    },
    {
      title: "About ChronoSelect",
      links: ["Our Story", "Authenticity Guarantee", "Careers", "Press"]
    }
  ];

  return (
    <footer className="bg-secondary/50 text-foreground/80 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center text-2xl font-bold text-foreground mb-4">
              <Watch className="h-7 w-7 mr-2 text-primary" />
              <span className="gradient-text-ecommerce">Chrono</span>Select
            </a>
            <p className="text-sm mb-6 max-w-md">
              Discover your perfect timepiece from our curated collection of luxury and designer watches. Authenticity guaranteed.
            </p>
            <div className="flex items-center mb-4">
              <Input type="email" placeholder="Enter your email for updates" className="rounded-r-none h-10 text-sm flex-1" />
              <Button className="rounded-l-none h-10 bg-primary hover:bg-primary/80 text-primary-foreground">Subscribe</Button>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 bg-background rounded-full border hover:border-primary/50"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerSections.map(section => (
            <div key={section.title}>
              <p className="font-semibold text-foreground mb-4">{section.title}</p>
              <ul className="space-y-2.5">
                {section.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t text-sm">
            <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span>123 Watch Avenue, Timepiece City, TX 75001</span>
            </div>
            <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span>+1 (800) CHRONOS (247-6667)</span>
            </div>
            <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2.5 text-primary flex-shrink-0" />
                <span>support@chronoselect.com</span>
            </div>
        </div>

        <div className="mt-10 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} ChronoSelect. All rights reserved. This is a fictional e-commerce website by Hostinger Horizons for demonstration purposes.</p>
          <p className="mt-1">Images sourced from Unsplash.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;