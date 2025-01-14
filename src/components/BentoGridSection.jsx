import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Smartphone, Globe, Asterisk } from 'lucide-react';

const BentoGridSection = () => {
  const stats = [
    { number: "100", label: "Our Partners" },
    { number: "50+", label: "Doctor Specialist" },
    { number: "100k", label: "Positive Review" }
  ];
  const imageUrls = [
    'https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/27086491/pexels-photo-27086491/free-photo-of-elderly-man-using-tablet-with-stylus-in-hand.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  const platformIcons = [
    { icon: Apple, label: "iOS App" },
    { icon: Smartphone, label: "Android App" },
    { icon: Globe, label: "Web App" }
  ];

  const hoverAnimation = {
    scale: 1.05,
    rotate: 2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-12 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* App Card */}
            <motion.div 
              whileHover={hoverAnimation}
              className="flex items-start gap-6 mb-8 bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <div className="bg-purple-600 rounded-3xl p-6 shadow-lg">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <Asterisk className="w-12 h-12 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-4">300+</h3>
                <p className="text-gray-600 text-sm mb-2">Trusted User</p>
                <div className="flex -space-x-3">
                {imageUrls.map((url, i) => (
  <motion.img
    key={i}
    src={url} // Dynamically set the image source
    alt={`User ${i + 1}`} // Update alt text for accessibility
    style={{ height: '32px', width: '32px' }}
    className="w-8 h-8 rounded-full border-2 border-background"
    whileHover={{ scale: 1.2, zIndex: 10 }}
  />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* App Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 bg-gray-100 p-3"
            >
              <h2 className="text-5xl font-bold mb-4">
                Application<br />health #1
              </h2>
              <p className="text-gray-600 max-w-sm">
                Collaborate with technology that transforms your aspirations into exceptional results, seamlessly and effectively
              </p>
            </motion.div>

            {/* Platform Icons */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex gap-4">
                {platformIcons.map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={label}
                    whileHover={hoverAnimation}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-sm"
                  >
                    <Icon className="w-6 h-6 text-gray-600" />
                  </motion.div>
                ))}
              </div>
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -z-10 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute w-4 h-4 bg-gray-200 rounded-full top-0 left-1/4" />
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full bottom-0 right-1/4" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Main Heading */}
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Revolutionizing Your Health with{' '}
              <span className="text-gray-400">AI-Powered Care</span>
            </motion.h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map(({ number, label }) => (
                <motion.div
                  key={label}
                  whileHover={hoverAnimation}
                  className="text-center p-4 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <motion.div 
                    className="text-3xl font-bold mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {number}
                  </motion.div>
                  <motion.div 
                    className="text-gray-600 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BentoGridSection

