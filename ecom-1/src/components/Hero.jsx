
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden hero-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-purple-100 text-purple-800"
            >
              #1 Digital Marketing Agency
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              Boost Your Brand's <span className="gradient-text">Digital Presence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We help businesses grow through strategic digital marketing solutions that drive results. Our data-driven approach ensures maximum ROI for your marketing budget.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button className="gradient-bg text-white px-8 py-6 h-auto text-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 h-auto text-lg">
                Our Services
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {[
                { icon: <BarChart2 className="h-6 w-6 text-purple-600" />, text: "Data-Driven" },
                { icon: <Zap className="h-6 w-6 text-blue-600" />, text: "Fast Results" },
                { icon: <TrendingUp className="h-6 w-6 text-green-600" />, text: "Scalable Growth" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="mb-2 p-2 rounded-full bg-gray-100">{item.icon}</div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img  alt="Digital marketing team working on strategy" className="w-full h-auto" src="https://images.unsplash.com/photo-1657727534442-d436ab275ce2" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
            
            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-10 -left-10 md:left-auto md:-right-10 bg-white rounded-lg shadow-xl p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-green-100">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Average ROI</p>
                  <p className="text-xl font-bold">287%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-100 rounded-tr-full opacity-30"></div>
    </section>
  );
};

export default Hero;
