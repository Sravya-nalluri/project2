import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Search, Menu, X, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart"; 

const Navbar = ({ onSearch, onCategoryChange, categories, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cart } = useCart();

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "All Watches", href: "#all" },
    ...categories.slice(0,3).map(cat => ({ name: cat, href: `#${cat.toLowerCase()}`})),
  ];

  const handleNavLinkClick = (category) => {
    if (category === "All Watches" || category === "#all") {
      onCategoryChange("All");
    } else if (category === "Home" || category === "#") {
      onCategoryChange("All"); 
      onSearch("");
      setSearchQuery("");
    }
    else {
      onCategoryChange(category.replace("#", ""));
    }
    setIsMobileMenuOpen(false);
  };


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-lg shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <motion.a
          href="#"
          onClick={() => handleNavLinkClick("Home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center text-2xl font-bold"
        >
          <Watch className="h-7 w-7 mr-2 text-primary" />
          <span className="gradient-text-ecommerce">Chrono</span>Select
        </motion.a>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => handleNavLinkClick(link.name)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <form onSubmit={handleSearchSubmit} className="hidden sm:flex relative">
            <Input
              type="search"
              placeholder="Search watches..."
              className="pr-10 h-9 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-9 w-9">
              <Search className="h-4 w-4 text-muted-foreground" />
            </Button>
          </form>
          <Button variant="ghost" size="icon" onClick={onCartClick} className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>
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
              <form onSubmit={handleSearchSubmit} className="sm:hidden flex relative mb-3">
                <Input
                  type="search"
                  placeholder="Search watches..."
                  className="pr-10 h-10 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-10 w-10">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </Button>
              </form>
              {navLinks.map((link) => (
                <a
                  key={`mobile-${link.name}`}
                  href={link.href}
                  onClick={() => handleNavLinkClick(link.name)}
                  className="block px-3 py-3 text-base font-medium text-foreground/90 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;