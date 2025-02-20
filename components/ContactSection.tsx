'use client';
  import { motion } from 'framer-motion';
  import { Phone, Mail, MapPin } from 'lucide-react';
  
  export const ContactSection = () => {
    return (
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-200">Ready to transform your business? Contact us today!</p>
          </motion.div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Phone",
                details: ["+254 701 838713", "+254 700 120294"],
              },
              {
                icon: Mail,
                title: "Email",
                details: ["info@cbctrack.com"],
              },
              {
                icon: MapPin,
                title: "Location",
                details: ["Nairobi, Kenya"],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-primary-dark/30 backdrop-blur-sm hover:bg-primary-dark/40 transition-colors duration-300"
              >
                <item.icon className="w-8 h-8 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                {item.details.map((detail) => (
                  <p key={detail} className="text-gray-200">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:info@cbctrack.com"
              className="inline-block bg-secondary text-primary-dark px-8 py-3 rounded-lg font-semibold 
                       hover:bg-secondary/90 transition-all duration-300 
                       transform hover:-translate-y-1"
            >
              Send us a message
            </a>
          </motion.div>
        </div>
      </section>
    );
  };