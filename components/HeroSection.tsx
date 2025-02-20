'use client';
import { motion } from 'framer-motion';
import { Server, Shield, Code, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Animated Tech Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 40 + 20 + 'px',
              height: Math.random() * 40 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            initial={{ opacity: 0.1, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 10 + 15,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-1/4 -left-4 text-white/20"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ repeat: Infinity, duration: 20 }}
      >
        <Server size={180} strokeWidth={1} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 -right-4 text-white/20"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ repeat: Infinity, duration: 25 }}
      >
        <Code size={160} strokeWidth={1} />
      </motion.div>
      
      <motion.div
        className="absolute top-3/4 left-1/3 text-white/10"
        animate={{ 
          x: [0, 30, 0],
          y: [0, 20, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ repeat: Infinity, duration: 22 }}
      >
        <Shield size={120} strokeWidth={1} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block py-1 px-4 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6">
            Leading IT & Networking Solutions Provider
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Powering Digital <br />
          <span className="text-secondary">Transformation</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90"
        >
          Enterprise-grade networking, security systems, and IT solutions 
          tailored for the modern business landscape
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-secondary text-primary-dark px-8 py-4 rounded-lg font-semibold 
                     hover:bg-secondary/90 transition-all duration-300 
                     transform hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Get Started <span className="ml-1">→</span>
          </a>
          <a
            href="#services"
            className="border border-white/30 backdrop-blur-sm hover:bg-white/10 
                       px-8 py-4 rounded-lg font-medium transition-all duration-300 
                       w-full sm:w-auto justify-center flex items-center"
          >
            Explore Services
          </a>
        </motion.div>
        
        {/* Stats Counter */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10K+", label: "Network Devices Managed" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "24/7", label: "Support Available" },
            { value: "3000+", label: "Security Cameras Installed" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-1"
              >
                {stat.value}
              </motion.div>
              <p className="text-xs md:text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
};