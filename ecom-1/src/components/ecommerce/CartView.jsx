import React from "react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { ShoppingCart, Trash2, PlusCircle, MinusCircle, CreditCard, X } from "lucide-react";

const CartView = ({ isOpen, onClose, onCheckout }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 100 }
    })
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 pb-4 border-b">
          <SheetTitle className="text-2xl font-semibold flex items-center">
            <ShoppingCart className="mr-3 h-6 w-6 text-primary" /> Your Cart
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <ShoppingCart className="h-20 w-20 text-muted-foreground/50 mb-6" />
            <p className="text-xl font-semibold mb-2">Your cart is empty</p>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
            <Button onClick={onClose} className="gradient-text-ecommerce border border-primary hover:opacity-80" variant="outline">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  layout
                  className="flex items-start gap-4 pb-4 border-b last:border-b-0"
                >
                  <div className="w-20 h-20 rounded-md overflow-hidden border bg-muted flex-shrink-0">
                    <img  src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm mb-1">{item.name}</p>
                    <p className="text-primary font-medium text-sm">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                      <span className="mx-2 text-sm w-5 text-center">{item.quantity}</span>
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <PlusCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive h-7 w-7" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
            <SheetFooter className="p-6 border-t bg-secondary/50">
              <div className="w-full space-y-3">
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground text-center">Shipping & taxes calculated at checkout.</p>
                <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3"
                    onClick={() => { onClose(); onCheckout();}}
                >
                  <CreditCard className="mr-2.5 h-5 w-5" /> Proceed to Checkout
                </Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
        <SheetClose asChild>
            <Button variant="ghost" size="icon" className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5"/>
            </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default CartView;