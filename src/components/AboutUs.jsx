import React from 'react'
import { motion } from 'framer-motion'
import { FaVideo, FaMicrophone, FaVolumeUp, FaPhoneAlt } from 'react-icons/fa'
import { img5, img6 } from '../assets/image'
const AboutUs = () => {
    const sections = [
        {
          tag: "About Us",
          title: "Culsuntation with a good Doctor",
          description: "Experience the perfect blend of advanced AI technology and human expertise. Our platform connects you with professional doctors to provide personalized and efficient healthcare solutions, ensuring your well-being is always a priority.",
          type: "consultation",
          reverse: false
        },
        {
          tag: "AI Xelie",
          title: "Check Your Health With Our AI Xelie",
          description: "Unlock a new level of health monitoring with AI Xelie. Experience accurate, real-time insights designed to help you take control of your well-being effortlessly.",
          type: "ai",
          reverse: true
        }
      ]
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3 }
        }
      }
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 }
        }
      }
    
      return (
        <div className="max-w-7xl mx-auto px-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-16`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Text Content */}
              <motion.div 
                className="flex-1 max-w-xl"
                variants={itemVariants}
              >
                <span className="text-sm text-purple-600 mb-2 block">{section.tag}</span>
                <h2 className="text-6xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <motion.button
                  className="bg-[#7c3aed] text-white px-6 py-3 rounded-full hover:bg-[#6d28d9] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                </motion.button>
              </motion.div>
    
              {/* Image/Interface Content */}
              <motion.div 
                className="flex-1 w-full max-w-xl"
                variants={itemVariants}
              >
                {section.type === 'consultation' ? (
                  <div className="bg-gray-100 rounded-3xl p-6 relative">
                    <span className="text-sm text-gray-500 mb-4 block">end-to-end encryption</span>
                    <div className="aspect-square max-w-sm mx-auto bg-white rounded-full overflow-hidden">
                      <img
                        src= {img5}
                        alt="Doctor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="font-semibold">Dr. Vinayak Kamble</h3>
                      <p className="text-sm text-gray-500">Specialist Pediatrician</p>
                    </div>
                    <div className="flex justify-center gap-4 mt-6">
                      {[
                        { icon: <FaVideo />, color: 'bg-gray-200' },
                        { icon: <FaMicrophone />, color: 'bg-gray-200' },
                        { icon: <FaVolumeUp />, color: 'bg-gray-200' },
                        { icon: <FaPhoneAlt />, color: 'bg-red-500 text-white' }
                      ].map((btn, idx) => (
                        <motion.button
                          key={idx}
                          className={`p-4 ${btn.color} rounded-full`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {btn.icon}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-3xl p-6 relative">
                    <div className="flex justify-between mb-4">
                      <div className="text-center">
                        <span className="text-2xl font-bold">120</span>
                        <p className="text-sm text-gray-500">mmHg</p>
                      </div>
                      <div className="text-center">
                        <span className="text-2xl font-bold">86</span>
                        <p className="text-sm text-gray-500">Bpm</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-3xl p-6">
                      <img
                        src={img6}
                        style={{height: '400px', width:'750px', borderRadius:'10px'}}
                        alt="Health AI Bot"
                        className="w-full h-auto "
                      />
                      <p className="text-center mt-4 text-lg font-semibold text-green-600">
                        Check your health with<br />our Health AI
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      )
    }
    

export default AboutUs
