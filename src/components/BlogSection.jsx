import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const BlogSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const newsItems = [
    {
      category: "General",
      date: "Dec 24, 2024",
      title: "Partnerships for Smarter Healthcare",
      description: "We've partnered with leading institutions to bring AI technology to the forefront of patient care and healthcare logistics",
      image: "https://images.pexels.com/photos/5213150/pexels-photo-5213150.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      category: "General",
      date: "Dec 24, 2024",
      title: "The Launch of AI Health Scanner",
      description: "Using advanced AI algorithms to help users monitor and offer precise health appointments and proactive insights",
      image: "https://images.pexels.com/photos/8097199/pexels-photo-8097199.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      category: "General",
      date: "Dec 24, 2024",
      title: "The Launch of AI Health Scanner",
      description: "Using advanced AI algorithms to help users monitor and offer precise health appointments and proactive insights",
      image: "https://images.pexels.com/photos/5311485/pexels-photo-5311485.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h2 
            variants={item}
            className="text-6xl font-bold"
          >
            Our News
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Stay updated with the latest developments, innovations, and insights in the healthcare industry
          </motion.p>
        </div>

        {/* Featured Article */}
        <motion.article
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 bg-purple-600">
            <div className="p-8 text-white space-y-4">
              <h1 className="text-5xl font-bold">HealthD</h1>
              <p className="opacity-90">
                Health solution for your wellness needs. Take control of your health journey, stay informed and make smarter decisions with our tools to thrive.
              </p>
            </div>
            <div className="relative h-75 md:h-auto">
              <img 
                src="https://images.pexels.com/photos/8457325/pexels-photo-8457325.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="HaloDoc Application Interface"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-6 bg-white">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <span>Application</span>
              <span>Oct 24, 2024</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">How to use the HaloDoc Application</h3>
            <div className="flex items-center text-purple-600 font-medium">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </motion.article>

        {/* News Grid */}
        <motion.div 
          variants={container}
          className="grid md:grid-cols-3 gap-8"
        >
          {newsItems.map((news, index) => (
            <motion.article
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div className="relative h-48">
                <img
                  src={news.image}
                  alt={news.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{news.category}</span>
                  <span>{news.date}</span>
                </div>
                <h3 className="font-bold text-xl">{news.title}</h3>
                <p className="text-gray-600 text-sm">{news.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          variants={item}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
          >
            View more
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogSection;

