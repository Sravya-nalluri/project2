import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#speakers", label: "Speakers" },
    { href: "#schedule", label: "Schedule" },
    { href: "#venue", label: "Venue" },
    { href: "#sponsors", label: "Sponsors" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - (isScrolled ? 70 : 80);
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-lg shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <motion.a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold flex-shrink-0"
        >
          <span className="gradient-text">Innovate</span>Sphere
        </motion.a>

        <nav className="hidden md:flex items-center space-x-6 mx-auto">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden sm:block"
          >
            <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity">
              <Ticket className="mr-2 h-5 w-5" />
              Register Now
            </Button>
          </motion.div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 shadow-xl absolute w-full"
          >
            <nav className="flex flex-col px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={`mobile-${link.href}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-3 py-3 text-base font-medium text-foreground/90 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity w-full mt-4 sm:hidden">
                <Ticket className="mr-2 h-5 w-5" />
                Register Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;