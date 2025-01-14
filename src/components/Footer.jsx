import React from 'react'
import { motion } from 'framer-motion'
import { FaHeartbeat, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const textRevealVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const iconVariants = {
    hover: { 
      scale: 1.2, 
      rotate: 8,
      transition: { duration: 0.2 }
    }
  }
  return (
   
      <motion.footer 
        className="bg-[#111827] text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto max-w-7xl p-8 md:p-12 lg:p-16 rounded-[32px]">
          {/* Newsletter Section */}
          <motion.div 
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 pb-16 border-b border-gray-800"
            variants={itemVariants}
          >
            <div className="mb-8 md:mb-0">
              <motion.div 
                className="overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={textRevealVariants}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Join Our News<br />Letter</h2>
              </motion.div>
              <p className="text-gray-400">Up to date with everything</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="w-full md:w-[300px] px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button 
                className="px-8 py-3 bg-[#7c3aed] rounded-lg whitespace-nowrap"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: '#6d28d9'
                }}
                transition={{ duration: 0.2 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
  
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {/* Company Info */}
            <motion.div 
              className="max-w-md"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 mb-4">
                <FaHeartbeat className="text-[#22c55e] text-2xl" />
                <span className="font-semibold text-xl">HealthDoc</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering your projects with innovative design and tailored solutions that bring your ideas to life
              </p>
              <div className="flex gap-4">
                {[FaInstagram, FaLinkedin, FaDiscord].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
  
            {/* Navigation Links */}
            <motion.nav 
              className="flex flex-col md:flex-row gap-4 md:gap-8"
              variants={itemVariants}
            >
              {['About us', 'Blog', 'Contact', 'Download'].map((link, index) => (
                <motion.a
                  key={index}
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                  variants={itemVariants}
                >
                  {link}
                </motion.a>
              ))}
            </motion.nav>
          </div>
  
          {/* Bottom Section */}
          <motion.div 
            className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
            variants={itemVariants}
          >
            <div className="text-gray-400">
              © healthdoc 2025
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Term of use
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy policy
              </a>
            </div>
          </motion.div>
        </div>
      </motion.footer>
  )
}

export default Footer
