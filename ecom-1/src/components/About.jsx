
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { value: "10+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { value: "250+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { value: "15+", label: "Team Members", icon: <Users className="h-6 w-6" /> },
    { value: "30+", label: "Countries Served", icon: <Globe className="h-6 w-6" /> },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-3 py-1 text-sm font-medium text-purple-800 bg-purple-100 rounded-full mb-4"
          >
            About Us
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            We're More Than Just a <span className="gradient-text">Marketing Agency</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We're a team of passionate digital experts committed to helping businesses thrive in the digital landscape.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img  alt="Our digital marketing team" className="w-full h-auto" src="https://images.unsplash.com/photo-1657737185882-4403efaaa92d" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-5 -left-5 w-full h-full bg-purple-200 rounded-xl"></div>
            <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full bg-blue-200 rounded-xl"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold mb-6"
            >
              Driving Digital Success Since 2013
            </motion.h3>
            
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-6"
            >
              DigitalEdge was founded with a simple mission: to help businesses navigate the complex digital landscape and achieve measurable results. We combine data-driven strategies with creative excellence to deliver campaigns that not only look good but perform exceptionally well.
            </motion.p>
            
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-8"
            >
              Our approach is collaborative and transparent. We work closely with our clients to understand their unique challenges and opportunities, developing tailored solutions that align with their business goals.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="space-y-4 mb-8"
            >
              {[
                "Data-driven marketing strategies",
                "Transparent reporting and communication",
                "Dedicated account managers",
                "Continuous optimization for maximum ROI"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-purple-100 text-purple-600">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
