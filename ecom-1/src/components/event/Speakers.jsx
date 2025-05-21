import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const speakersData = [
  {
    name: "Dr. Evelyn Reed",
    title: "AI Ethicist & Futurist",
    bio: "Leading expert on the ethical implications of artificial intelligence and its future impact on society.",
    imageName: "dr-evelyn-reed",
    social: { linkedin: "#", twitter: "#" },
    topic: "The Conscious Machine: Navigating AI Ethics"
  },
  {
    name: "Marcus Chen",
    title: "Quantum Computing Pioneer",
    bio: "Renowned physicist at the forefront of quantum computing research and development.",
    imageName: "marcus-chen",
    social: { linkedin: "#", twitter: "#" },
    topic: "Quantum Leaps: The Next Computing Revolution"
  },
  {
    name: "Aisha Khan",
    title: "Cybersecurity Strategist",
    bio: "Globally recognized cybersecurity expert, advising Fortune 500 companies on digital defense.",
    imageName: "aisha-khan",
    social: { linkedin: "#", twitter: "#" },
    topic: "Fortifying the Future: Advanced Cybersecurity"
  },
  {
    name: "Ben Carter",
    title: "Sustainable Tech Innovator",
    bio: "Founder of GreenSpark, developing cutting-edge technologies for a sustainable future.",
    imageName: "ben-carter",
    social: { linkedin: "#", twitter: "#" },
    topic: "Eco-Tech: Innovating for a Greener Planet"
  },
];

const Speakers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="speakers" className="py-20 md:py-28 bg-background section-bg-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-secondary/10 text-secondary">
            Meet The Experts
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Esteemed <span className="gradient-text">Speakers</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Get inspired by thought leaders and innovators shaping the future of technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {speakersData.map((speaker) => (
            <motion.div key={speaker.name} variants={itemVariants} className="speaker-card">
              <Card className="h-full overflow-hidden text-center bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
                <CardHeader className="p-0">
                  <div className="relative aspect-square">
                    <img  
                      alt={`Portrait of ${speaker.name}`} 
                      className="w-full h-full object-cover"
                     src="https://images.unsplash.com/photo-1603991414220-51b87b89a371" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                       <CardTitle className="text-primary-foreground text-2xl">{speaker.name}</CardTitle>
                       <CardDescription className="text-primary-foreground/80">{speaker.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-foreground/70 mb-3 h-16 overflow-hidden">{speaker.bio}</p>
                  <p className="text-sm font-semibold text-primary mb-4">Topic: {speaker.topic}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors" aria-label={`${speaker.name} LinkedIn Profile`}>
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors" aria-label={`${speaker.name} Twitter Profile`}>
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;