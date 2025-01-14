import React from 'react';
import { motion } from 'framer-motion';
import { RiStarLine, RiMessage2Line, RiHeartLine, RiPulseLine } from 'react-icons/ri';

const FeatureSection = () => {
  const features = [
    {
      icon: RiStarLine,
      title: "AI health scanner for our body",
      description: "Advanced tools to monitor and analyze your health effortlessly"
    },
    {
      icon: RiMessage2Line,
      title: "Culsuntation with a good Doctor",
      description: "Receive expert advice anytime, enhanced by AI for accurate and personalized healthcare"
    },
    {
      icon: RiHeartLine,
      title: "Daily Tracking Health",
      description: "Keep track of your well-being every day with smart insights"
    },
    {
      icon: RiPulseLine,
      title: "AI health scanner for our body",
      description: "By blending innovative design principles with cutting-edge AI technology"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-16"
      >
        {/* Header Section */}
        <motion.div 
          className="text-center space-y-4"
          variants={itemVariants}
        >
          {/* <p className="text-sm font-medium">Features</p> */}
          <button className='text-sm font-medium text-gray-600 border-solid border-2 border-indigo-600 rounded-[50px] px-4 py-1'>Features</button>
          <h2 className="text-4xl md:text-7xl ">
            Our Approach to<br />Design and AI
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Revolutionizing your experience with innovative features that blend intelligent AI 
            and user-centric design, empowering you to achieve more effortlessly
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
              className="bg-gray-50 rounded-2xl p-6 transition-colors hover:bg-white shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4"
              >
                <feature.icon className="w-6 h-6 text-gray-600" />
              </motion.div>
              <h3 className="font-semibold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-md">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureSection;

