import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Lock, CalendarDays, User, X, CheckCircle, Loader2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";


const PaymentMockup = ({ isOpen, onClose }) => {
  const { cart, clearCart } = useCart();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = totalAmount > 0 ? 15.00 : 0; // Example shipping
  const taxes = totalAmount * 0.08; // Example 8% tax
  const finalTotal = totalAmount + shippingCost + taxes;

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setPaymentSuccess(true);
      toast({
        title: "Payment Successful!",
        description: "Your order has been placed. Thank you for shopping with ChronoSelect!",
        variant: "success", 
      });
      clearCart();
    }, 2500); 
  };
  
  const handleCloseModal = () => {
    setPaymentSuccess(false); // Reset for next time
    onClose();
  }


  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-w-xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 border-b bg-secondary/30">
          <DialogTitle className="text-2xl font-semibold flex items-center">
            <CreditCard className="mr-3 h-6 w-6 text-primary" /> Secure Checkout
          </DialogTitle>
          <DialogDescription>
            Complete your purchase for ChronoSelect. All transactions are secure and encrypted.
          </DialogDescription>
        </DialogHeader>

        {paymentSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 flex flex-col items-center text-center"
          >
            <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
            <h2 className="text-2xl font-bold mb-3">Payment Confirmed!</h2>
            <p className="text-muted-foreground mb-8">
              Your order is being processed. You'll receive an email confirmation shortly.
            </p>
            <Button onClick={handleCloseModal} className="w-full sm:w-auto gradient-text-ecommerce border border-primary hover:opacity-80" variant="outline">
              Continue Shopping
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmitPayment}>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
              <div className="md:col-span-2">
                <h4 className="text-lg font-medium mb-3">Order Summary</h4>
                <div className="space-y-2 text-sm p-4 bg-muted/50 rounded-md">
                  <div className="flex justify-between"><span>Subtotal:</span> <span>${totalAmount.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span>Shipping:</span> <span>${shippingCost.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span>Taxes (8%):</span> <span>${taxes.toFixed(2)}</span></div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold text-md"><span>Total:</span> <span>${finalTotal.toFixed(2)}</span></div>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="cardNumber">Card Number</Label>
                <div className="relative">
                  <Input id="cardNumber" type="text" placeholder="•••• •••• •••• ••••" required className="pl-10"/>
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="cardName">Name on Card</Label>
                <div className="relative">
                  <Input id="cardName" type="text" placeholder="John Doe" required className="pl-10"/>
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <div className="relative">
                  <Input id="expiryDate" type="text" placeholder="MM / YY" required className="pl-10"/>
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="cvv">CVV</Label>
                <div className="relative">
                  <Input id="cvv" type="text" placeholder="•••" required className="pl-10"/>
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
            
            <DialogFooter className="p-6 border-t bg-secondary/30">
              <Button type="button" variant="outline" onClick={handleCloseModal} disabled={isLoading}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                disabled={isLoading || cart.length === 0}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Lock className="mr-2 h-4 w-4" />
                )}
                Pay ${finalTotal.toFixed(2)}
              </Button>
            </DialogFooter>
          </form>
        )}
         <DialogPrimitiveClose onClick={handleCloseModal} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
        </DialogPrimitiveClose>
      </DialogContent>
    </Dialog>
  );
};

const DialogPrimitiveClose = ({children, ...props}) => <button {...props}>{children}</button>;


export default PaymentMockup;