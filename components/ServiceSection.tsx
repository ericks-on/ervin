'use client';
import { motion } from 'framer-motion';
import { services } from '@/constants/data';
import { Computer, Database, Truck } from 'lucide-react';

const icons = {
    "computer": Computer,
    "truck": Truck,
    "database": Database
}

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Solutions
          </h2>
          <p className="text-gray-600">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = icons[service.icon as keyof typeof icons];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary 
                           hover:shadow-xl transition-shadow duration-300"
              >
                {IconComponent && <IconComponent className="w-12 h-12 text-primary mb-4" />}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item: string) => (
                    <li key={item} className="text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};