import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Ticket, ArrowRight } from "lucide-react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <span className="text-3xl md:text-5xl font-bold gradient-text">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="text-xs uppercase text-foreground/70">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex space-x-4 md:space-x-8">
      {timerComponents.length ? timerComponents : <span className="text-2xl font-semibold text-primary">Event Started!</span>}
    </div>
  );
};

const Hero = () => {
  const eventDate = "2025-10-20T09:00:00"; 

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 hero-bg-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-primary/10 text-primary"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 120 }}
          >
            October 20-22, 2025 • Tech Hub Center
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
            The Future of <span className="gradient-text">Technology</span> is Here
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto">
            Join industry leaders, innovators, and visionaries at InnovateSphere 2025. Discover groundbreaking ideas, network with experts, and shape the future of tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-12"
        >
          <CountdownTimer targetDate={eventDate} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="xl" className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity shadow-lg">
            <Ticket className="mr-2 h-6 w-6" />
            Register Now
          </Button>
          <Button variant="outline" size="xl" className="shadow-lg">
            View Schedule
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-foreground/70"
        >
          <div className="flex items-center">
            <CalendarDays className="h-5 w-5 mr-2 text-primary" />
            <span>3 Days of Innovation</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-secondary" />
            <span>Global Tech Hub Center</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2 text-teal-500" />
            <span>50+ Expert Speakers</span>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
    </section>
  );
};

const Users = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);


export default Hero;