
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, BarChart2, Globe, Share2, PenTool, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Search className="h-10 w-10 text-purple-600" />,
    title: "Search Engine Optimization",
    description: "Improve your website's visibility in search results and drive organic traffic with our data-driven SEO strategies.",
    color: "purple"
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-blue-600" />,
    title: "Pay-Per-Click Advertising",
    description: "Maximize your ROI with targeted PPC campaigns that deliver results across Google, Bing, and other platforms.",
    color: "blue"
  },
  {
    icon: <Share2 className="h-10 w-10 text-pink-600" />,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage with your audience through strategic social media campaigns.",
    color: "pink"
  },
  {
    icon: <PenTool className="h-10 w-10 text-orange-600" />,
    title: "Content Marketing",
    description: "Create valuable, relevant content that attracts and retains your target audience and drives profitable customer action.",
    color: "orange"
  },
  {
    icon: <Globe className="h-10 w-10 text-green-600" />,
    title: "Web Design & Development",
    description: "Create stunning, high-performing websites that convert visitors into customers and reflect your brand identity.",
    color: "green"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-indigo-600" />,
    title: "Mobile Marketing",
    description: "Reach your customers on the go with mobile-optimized campaigns, apps, and experiences.",
    color: "indigo"
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-800 bg-purple-100 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text">Digital Marketing</span> Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a full range of digital marketing services to help your business grow and succeed online.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card"
            >
              <Card className="h-full border-t-4" style={{ borderTopColor: `var(--brand-${service.color})` }}>
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Strategy Development",
                      "Implementation",
                      "Monitoring & Optimization",
                      "Reporting & Analysis"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}-500 mr-2`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="group w-full justify-between">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg mb-6">
            Not sure which service is right for your business?
          </p>
          <Button className="gradient-bg text-white px-8 py-6 h-auto text-lg">
            Get a Free Strategy Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
