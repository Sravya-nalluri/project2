import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart(product);
  };
  
  const handleCardClick = () => {
    onQuickView(product);
  };

  return (
    <motion.div variants={cardVariants} className="h-full">
      <Card 
        className="h-full flex flex-col overflow-hidden product-card-hover-glow cursor-pointer rounded-lg border-border/70 bg-card shadow-sm hover:shadow-lg"
        onClick={handleCardClick}
      >
        <CardHeader className="p-0 relative">
          <div className="aspect-square w-full overflow-hidden">
            <img  
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              src={product.image}
            />
          </div>
          {product.tag && (
            <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2.5 py-1 text-xs font-semibold rounded-full shadow-md">
              {product.tag}
            </div>
          )}
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-lg font-semibold mb-1.5 leading-tight hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
          <p className="text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            className="w-full sm:w-auto flex-1"
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
            aria-label={`Quick view ${product.name}`}
          >
            <Eye className="mr-2 h-4 w-4" /> Quick View
          </Button>
          <Button 
            className="w-full sm:w-auto flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;