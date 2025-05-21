import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Ticket, CalendarCheck2 } from "lucide-react";

const CTA = () => {
  return (
    <section id="register" className="py-20 md:py-28 bg-gradient-to-br from-primary via-purple-600 to-secondary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <CalendarCheck2 className="h-16 w-16 mx-auto mb-6 text-secondary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Miss Out on InnovateSphere 2025!
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Secure your spot today and be part of the most anticipated tech event of the year. Experience innovation, connect with experts, and unlock new opportunities.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <Button 
              size="xl" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Ticket className="mr-3 h-7 w-7" />
              Register Now & Get Early Bird Discount!
            </Button>
          </motion.div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Early bird offer ends August 31, 2025. Limited seats available!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;