import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Filter, X, RotateCcw } from "lucide-react";

const FilterSidebar = ({ categories, onFilterChange, onPriceChange, onResetFilters, currentFilters }) => {
  const [priceRange, setPriceRange] = useState(currentFilters.priceRange || [0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState(currentFilters.categories || []);

  const handleCategoryToggle = (category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    onFilterChange(newCategories);
  };

  const handlePriceSliderChange = (newRange) => {
    setPriceRange(newRange);
  };
  
  const handlePriceApply = () => {
    onPriceChange(priceRange);
  };
  
  const handleReset = () => {
    setPriceRange([0, 10000]);
    setSelectedCategories([]);
    onResetFilters();
  };

  const MAX_PRICE = 10000; // Example max price

  return (
    <motion.aside 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full lg:w-72 xl:w-80 p-6 bg-card rounded-xl shadow-lg border border-border/70 space-y-6 sticky top-24" // sticky top matches navbar height + padding
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold flex items-center">
          <Filter className="mr-2 h-5 w-5 text-primary" /> Filters
        </h3>
        <Button variant="ghost" size="sm" onClick={handleReset} className="text-xs">
          <RotateCcw className="mr-1 h-3 w-3" /> Reset
        </Button>
      </div>
      <Separator />

      <div>
        <Label className="text-md font-medium mb-3 block">Categories</Label>
        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
          {categories.map((category) => (
            <motion.div 
              key={category}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center justify-between p-2.5 rounded-md cursor-pointer transition-all duration-200 ease-in-out
                ${selectedCategories.includes(category) ? 'bg-primary/10 text-primary ring-1 ring-primary' : 'hover:bg-muted/50'}`}
              onClick={() => handleCategoryToggle(category)}
            >
              <span className="text-sm font-medium">{category}</span>
              {selectedCategories.includes(category) && <X className="h-4 w-4" />}
            </motion.div>
          ))}
        </div>
      </div>
      <Separator />

      <div>
        <Label htmlFor="price-range" className="text-md font-medium mb-3 block">Price Range</Label>
        <Slider
          id="price-range"
          min={0}
          max={MAX_PRICE}
          step={50}
          value={priceRange}
          onValueChange={handlePriceSliderChange}
          className="my-4"
        />
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}{priceRange[1] === MAX_PRICE ? '+' : ''}</span>
        </div>
        <Button onClick={handlePriceApply} className="w-full gradient-text-ecommerce border border-primary hover:opacity-80" variant="outline">Apply Price</Button>
      </div>
    </motion.aside>
  );
};

export default FilterSidebar;