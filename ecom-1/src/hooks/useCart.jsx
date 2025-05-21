import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CART_STORAGE_KEY = 'chronoSelectCart';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const localCart = window.localStorage.getItem(CART_STORAGE_KEY);
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
      return [];
    }
  });
  const { toast } = useToast();

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    toast({
      title: `${product.name} added to cart!`,
      description: `Quantity: ${quantity}`,
      action: <div className="w-12 h-12 rounded-md overflow-hidden"><img  src={product.image} alt={product.name} className="w-full h-full object-cover"/></div>,
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    const removedItem = cart.find(item => item.id === productId);
    if (removedItem) {
      toast({
        title: `${removedItem.name} removed from cart.`,
        variant: "destructive",
      });
    }
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart Cleared!",
      description: "All items have been removed from your cart.",
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};