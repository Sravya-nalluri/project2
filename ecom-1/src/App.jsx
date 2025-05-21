import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/hooks/useCart";
import Navbar from "@/components/ecommerce/Navbar";
import FilterSidebar from "@/components/ecommerce/FilterSidebar";
import ProductCard from "@/components/ecommerce/ProductCard";
import ProductModal from "@/components/ecommerce/ProductModal";
import CartView from "@/components/ecommerce/CartView";
import PaymentMockup from "@/components/ecommerce/PaymentMockup";
import Footer from "@/components/ecommerce/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, PackageSearch } from "lucide-react";

const mockProducts = [
  { id: 1, name: "Omega Speedmaster Moonwatch", category: "Luxury", price: 6500, image: "https://images.unsplash.com/photo-1620625440318-978133799502?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1620625440318-978133799502?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", tag: "Best Seller", rating: 5, reviewsCount: 120, description: "Iconic chronograph, worn by astronauts. A true legend in watchmaking.", features: ["Manual-winding", "Chronograph", "Tachymeter Scale", "Hesalite crystal"] },
  { id: 2, name: "Rolex Submariner Date", category: "Luxury", price: 13500, image: "https://images.unsplash.com/photo-1580490C24312-203699188807?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1580490C24312-203699188807?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", tag: "Iconic", rating: 5, reviewsCount: 250, description: "The quintessential diver's watch. Robust, reliable, and timeless.", features: ["Automatic movement", "Oystersteel case", "Cerachrom bezel", "300m water resistance"] },
  { id: 3, name: "Seiko Prospex SPB143", category: "Dive", price: 1200, image: "https://images.unsplash.com/photo-1619982179864-746a9706d1d7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1619982179864-746a9706d1d7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", tag: "Value Pick", rating: 4, reviewsCount: 85, description: "Modern re-interpretation of Seiko's first diver's watch from 1965.", features: ["Automatic 6R35 Caliber", "Stainless steel case", "Sapphire crystal", "200m water resistance"] },
  { id: 4, name: "TAG Heuer Carrera Chronograph", category: "Sport", price: 5800, image: "https://images.unsplash.com/photo-1610994001383-e8a785759f32?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1610994001383-e8a785759f32?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", rating: 4, reviewsCount: 60, description: "A classic sports chronograph with a rich motorsport heritage.", features: ["Automatic Calibre Heuer 02", "Skeleton dial option", "Ceramic bezel", "Chronograph function"] },
  { id: 5, name: "Cartier Tank Must SolarBeat", category: "Dress", price: 3500, image: "https://images.unsplash.com/photo-1633111686561-6cce9082f7e4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1633111686561-6cce9082f7e4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", tag: "Eco-Friendly", rating: 4, reviewsCount: 45, description: "Timeless elegance meets modern technology with a solar-powered movement.", features: ["SolarBeat™ photovoltaic movement", "Classic Tank design", "Leather strap", "Up to 16 years autonomy"] },
  { id: 6, name: "G-Shock GA2100 'CasiOak'", category: "Casual", price: 110, image: "https://images.unsplash.com/photo-1644030799730-792939decalee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1644030799730-792939decalee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", rating: 5, reviewsCount: 300, description: "The popular octagonal G-Shock, known for its toughness and style.", features: ["Carbon Core Guard structure", "Shock resistant", "200m water resistance", "World time"] },
  { id: 7, name: "Tissot PRX Powermatic 80", category: "Dress", price: 675, image: "https://images.unsplash.com/photo-1670526816027-0300510483f1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1670526816027-0300510483f1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", tag: "Popular", rating: 4, reviewsCount: 150, description: "Retro-inspired design with an impressive 80-hour power reserve.", features: ["Powermatic 80 movement", "Integrated bracelet", "Sapphire crystal", "Interchangeable strap system"] },
  { id: 8, name: "Hamilton Khaki Field Mechanical", category: "Field", price: 545, image: "https://images.unsplash.com/photo-1590000459472-1a6d5a19910c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1590000459472-1a6d5a19910c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", rating: 4, reviewsCount: 95, description: "A faithful recreation of its original 1960s military counterpart.", features: ["Hand-wound H-50 caliber", "80-hour power reserve", "NATO strap", "Matte stainless steel case"] },
  { id: 9, name: "Breitling Navitimer B01 Chronograph", category: "Pilot", price: 9200, image: "https://images.unsplash.com/photo-1587290399907-539f0336314c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1587290399907-539f0336314c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", rating: 5, reviewsCount: 70, description: "The legendary pilot's chronograph with its iconic circular slide rule.", features: ["Breitling Manufacture Caliber 01", "Chronograph function", "Bidirectional slide rule bezel", "COSC-certified chronometer"] },
  { id: 10, name: "Citizen Promaster Dive 'Eco-Zilla'", category: "Dive", price: 450, image: "https://images.unsplash.com/photo-1607300576801-58e898a7b13c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1607300576801-58e898a7b13c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", rating: 4, reviewsCount: 110, description: "A robust and distinctive diver's watch powered by Eco-Drive technology.", features: ["Eco-Drive technology (solar powered)", "300m water resistance", "Large, luminous hands and markers", "Durable stainless steel case"] },
  { id: 11, name: "Longines Spirit Zulu Time", category: "Pilot", price: 3050, image: "https://images.unsplash.com/photo-1675215483789-042831570099?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1675215483789-042831570099?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", tag: "New Release", rating: 5, reviewsCount: 30, description: "A modern pilot's watch with GMT functionality and COSC certification.", features: ["Automatic L844.4 caliber", "GMT function", "Silicon balance-spring", "Interchangeable strap system"] },
  { id: 12, name: "Junghans Max Bill Automatic", category: "Dress", price: 1100, image: "https://images.unsplash.com/photo-1608491293489-c2905707303a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", imageModal: "https://images.unsplash.com/photo-1608491293489-c2905707303a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200", rating: 4, reviewsCount: 55, description: "A Bauhaus-inspired design classic, known for its minimalist aesthetics.", features: ["Automatic J800.1 caliber", "Plexiglass with SICRALAN coating", "Minimalist dial design", "Date function"] },
];
const allCategories = ["All", ...new Set(mockProducts.map(p => p.category))];


function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  
  const [activeFilters, setActiveFilters] = useState({
    searchQuery: "",
    categories: [],
    priceRange: [0, 10000],
  });

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      let products = mockProducts;

      if (activeFilters.searchQuery) {
        products = products.filter(p => 
          p.name.toLowerCase().includes(activeFilters.searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(activeFilters.searchQuery.toLowerCase())
        );
      }

      if (activeFilters.categories.length > 0 && !activeFilters.categories.includes("All")) {
        products = products.filter(p => activeFilters.categories.includes(p.category));
      }
      
      products = products.filter(p => p.price >= activeFilters.priceRange[0] && p.price <= activeFilters.priceRange[1]);

      setFilteredProducts(products);
      setIsLoading(false);
    }, 700);
  }, [activeFilters]);

  const handleSearch = (query) => {
    setActiveFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const handleCategoryFilter = (categories) => {
    setActiveFilters(prev => ({ ...prev, categories: categories }));
  };
  
  const handlePriceFilter = (priceRange) => {
    setActiveFilters(prev => ({ ...prev, priceRange: priceRange }));
  };
  
  const handleResetFilters = () => {
    setActiveFilters({
      searchQuery: "",
      categories: [],
      priceRange: [0, 10000],
    });
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  const handleCheckout = () => {
    setIsCartOpen(false); 
    setIsPaymentOpen(true);
  };
  const handleClosePayment = () => setIsPaymentOpen(false);


  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <Navbar 
          onSearch={handleSearch} 
          onCategoryChange={(cat) => handleCategoryFilter(cat === "All" ? [] : [cat])} 
          categories={allCategories.filter(c => c !== "All")}
          onCartClick={handleOpenCart}
        />
        
        <main className="flex-grow container mx-auto px-4 md:px-6 pt-24 pb-12"> {/* pt-24 for fixed navbar */}
          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar 
              categories={allCategories.filter(c => c !== "All")} 
              onFilterChange={handleCategoryFilter}
              onPriceChange={handlePriceFilter}
              onResetFilters={handleResetFilters}
              currentFilters={activeFilters}
            />
            
            <div className="flex-1">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-card p-4 rounded-lg shadow space-y-3">
                      <div className="skeleton-loader h-48 w-full"></div>
                      <div className="skeleton-loader h-6 w-3/4"></div>
                      <div className="skeleton-loader h-4 w-1/2"></div>
                      <div className="skeleton-loader h-8 w-1/3"></div>
                      <div className="flex gap-2 mt-2">
                        <div className="skeleton-loader h-10 flex-1"></div>
                        <div className="skeleton-loader h-10 flex-1"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredProducts.length === 0 ? (
                 <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <PackageSearch className="w-24 h-24 text-muted-foreground/40 mb-6" />
                    <h2 className="text-2xl font-semibold mb-2">No Watches Found</h2>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      We couldn't find any watches matching your current filters. Try adjusting your search or filters.
                    </p>
                    <Button onClick={handleResetFilters} variant="outline" className="gradient-text-ecommerce border border-primary hover:opacity-80">
                      Clear All Filters
                    </Button>
                  </div>
              ) : (
                <motion.div 
                  layout 
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8"
                >
                  <AnimatePresence>
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </div>
        </main>
        
        <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <CartView isOpen={isCartOpen} onClose={handleCloseCart} onCheckout={handleCheckout} />
        <PaymentMockup isOpen={isPaymentOpen} onClose={handleClosePayment} />
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;