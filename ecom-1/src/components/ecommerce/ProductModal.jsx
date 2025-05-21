import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Star, CheckCircle, ShieldCheck } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: "easeIn" } }
  };
  
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`} />
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent 
            className="max-w-3xl p-0 overflow-hidden" 
            as={motion.div}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square md:aspect-auto">
                <img  
                  src={product.imageModal || product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                 />
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 text-sm font-semibold rounded-full shadow-lg">
                    {product.tag}
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8 flex flex-col">
                <DialogHeader className="mb-4 text-left">
                  <DialogTitle className="text-3xl font-bold mb-1">{product.name}</DialogTitle>
                  <DialogDescription className="text-md text-muted-foreground">{product.category}</DialogDescription>
                </DialogHeader>
                
                <div className="flex items-center mb-4">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-muted-foreground">({product.reviewsCount} reviews)</span>
                </div>

                <p className="text-3xl font-extrabold text-primary mb-6">${product.price.toFixed(2)}</p>
                
                <div className="text-sm text-foreground/80 mb-6 space-y-1 flex-grow">
                  <p>{product.description || "No description available."}</p>
                  {product.features && product.features.length > 0 && (
                    <ul className="list-disc list-inside pl-1 mt-3 space-y-0.5">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
                
                <div className="space-y-3 mt-auto">
                   <div className="flex items-center text-sm text-green-600">
                     <CheckCircle className="h-4 w-4 mr-1.5" /> In Stock - Ships in 24 hours
                   </div>
                   <div className="flex items-center text-sm text-muted-foreground">
                     <ShieldCheck className="h-4 w-4 mr-1.5 text-primary" /> 2-Year International Warranty
                   </div>
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3.5"
                    onClick={() => { addToCart(product); onClose(); }}
                  >
                    <ShoppingCart className="mr-2.5 h-5 w-5" /> Add to Cart
                  </Button>
                </div>
              </div>
            </div>
            <DialogPrimitive.Close onClick={onClose} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=open]:bg-accent data-[state=open]:text-muted-foreground md:bg-transparent md:text-foreground">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

const DialogPrimitive = { Close: ({children, ...props}) => <button {...props}>{children}</button> };

export default ProductModal;