import React from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHeartbeat } from 'react-icons/fa'
import { img2, img3, img4, img5 } from '../assets/image'

const Team = () => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
  
    const teamMembers = [
      {
        name: "Dr. Ferdous",
        role: "CEO HealthDoc",
        image: img2
      },
      {
        name: "Dr. Danilyuk",
        role: "Radiology Specialist",
        image: img3
      },
      {
        name: "Dr. Shakir",
        role: "Marketing HealthDoc",
        image: img4
      },
      {
        name: "Dr. Angelina Julie",
        role: "CTO of HealthDoc",
        image: img5
      }
    ]
  
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          staggerChildren: 0.2
        }
      }
    }
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6
        }
      }
    }
  
    const logoVariants = {
      hidden: { scale: 1, opacity: 0 },
      visible: {
        scale: [1, 1.1, 1], // Smooth scaling effect without exceeding layout boundaries
        opacity: [1, 0.8, 1], // Pulsating effect using opacity
        transition: {
          duration: 2, // Adjust duration as needed
          repeat: Infinity,
          repeatType: "loop",
        },
      },
    };
    
  
    return (
      <section className="py-20 px-4 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16  "
        >
        {/* Logo */}
<motion.div 
  className="flex justify-center mb-8"
  variants={logoVariants}
  initial="hidden"
  animate="visible"
>
  <FaHeartbeat className="text-[#22c55e] text-4xl" />
</motion.div>
  
          {/* Heading */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We create innovative solutions that transform the healthcare industry.
          </motion.h2>
  
          {/* Subheading */}
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            By combining cutting-edge technology and expert insights, we deliver smarter, more efficient healthcare solutions that prioritize your well-being
          </motion.p>
        </motion.div>
  
        {/* Team Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative w-full aspect-square rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10 transform group-hover:bg-green-600 group-hover:text-white translate-y-0 transition-transform duration-300">
                <h3 className="text-black-400 text-lg font-semibold">{member.name}</h3>
                <p className="text-black-400 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
  )
}

export default Team
