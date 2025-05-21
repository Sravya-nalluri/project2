import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, Mic, Coffee, Users, Award } from "lucide-react";

const scheduleData = {
  day1: [
    { time: "09:00 AM", title: "Registration & Welcome Coffee", icon: <Coffee className="h-5 w-5 text-secondary" />, type: "general" },
    { time: "10:00 AM", title: "Opening Keynote: The Next Tech Frontier", speaker: "Dr. Evelyn Reed", icon: <Mic className="h-5 w-5 text-primary" />, type: "talk" },
    { time: "11:30 AM", title: "Panel: AI in Everyday Life", icon: <Users className="h-5 w-5 text-teal-500" />, type: "panel" },
    { time: "01:00 PM", title: "Lunch Break & Networking", icon: <Coffee className="h-5 w-5 text-secondary" />, type: "general" },
    { time: "02:30 PM", title: "Workshop: Quantum Computing Fundamentals", speaker: "Marcus Chen", icon: <Mic className="h-5 w-5 text-primary" />, type: "workshop" },
    { time: "04:00 PM", title: "Talk: Cybersecurity in the Quantum Age", speaker: "Aisha Khan", icon: <Mic className="h-5 w-5 text-primary" />, type: "talk" },
    { time: "05:30 PM", title: "Day 1 Wrap-up & Evening Reception", icon: <Award className="h-5 w-5 text-pink-500" />, type: "general" },
  ],
  day2: [
    { time: "09:00 AM", title: "Morning Coffee & Networking", icon: <Coffee className="h-5 w-5 text-secondary" />, type: "general" },
    { time: "09:30 AM", title: "Keynote: Sustainable Technology for a Better Future", speaker: "Ben Carter", icon: <Mic className="h-5 w-5 text-primary" />, type: "talk" },
    { time: "11:00 AM", title: "Panel: The Future of Work with AR/VR", icon: <Users className="h-5 w-5 text-teal-500" />, type: "panel" },
    { time: "12:30 PM", title: "Lunch Break", icon: <Coffee className="h-5 w-5 text-secondary" />, type: "general" },
    { time: "02:00 PM", title: "Workshop: Building Ethical AI Systems", icon: <Mic className="h-5 w-5 text-primary" />, type: "workshop" },
    { time: "03:30 PM", title: "Talk: The Metaverse: Hype vs. Reality", icon: <Mic className="h-5 w-5 text-primary" />, type: "talk" },
    { time: "05:00 PM", title: "Closing Remarks & Awards", icon: <Award className="h-5 w-5 text-pink-500" />, type: "general" },
  ],
};

const Schedule = () => {
  const [activeDay, setActiveDay] = React.useState("day1");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };
  
  const getIconColor = (type) => {
    switch(type) {
      case "talk": return "text-primary";
      case "panel": return "text-teal-500";
      case "workshop": return "text-orange-500";
      case "general": return "text-secondary";
      default: return "text-foreground";
    }
  };


  return (
    <section id="schedule" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-primary/10 text-primary">
            Event Itinerary
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Conference <span className="gradient-text">Schedule</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Plan your days with our detailed schedule of talks, workshops, and networking events.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 space-x-4">
          {Object.keys(scheduleData).map((day, index) => (
            <motion.button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
                ${activeDay === day ? "gradient-bg text-primary-foreground shadow-lg" : "bg-muted hover:bg-muted/80"}`}
              whileHover={{ scale: activeDay === day ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Day {index + 1}
            </motion.button>
          ))}
        </div>

        <div className="relative pl-8"> {/* Added pl-8 for timeline line */}
          <motion.div
            key={activeDay}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {scheduleData[activeDay].map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative timeline-item"
              >
                <div className="timeline-dot"></div>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4" style={{borderColor: `hsl(var(--${event.type === 'talk' ? 'primary' : event.type === 'panel' ? 'teal' : event.type === 'workshop' ? 'orange' : 'secondary'}))`}}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg md:text-xl">{event.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1.5" />
                      {event.time}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {event.speaker && (
                      <CardDescription className="text-base">
                        Speaker: <span className="font-semibold text-primary">{event.speaker}</span>
                      </CardDescription>
                    )}
                    <div className={`mt-2 ${getIconColor(event.type)}`}>
                      {React.cloneElement(event.icon, { className: `h-6 w-6` })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;