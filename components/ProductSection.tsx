'use client';
import { motion } from 'framer-motion';
import { Server, Database, Code, Cpu, LineChart, Video } from 'lucide-react';
import Image from 'next/image';

// Updated tech-focused products data
const techProducts = [
  {
    category: "Networking Solutions",
    description: "Enterprise-grade networking infrastructure and managed services",
    image: "/images/networking.png",
    icon: Server,
    items: [
      "Enterprise Routers & Switches",
      "Network Security Appliances",
      "Wireless Infrastructure",
      "Network Monitoring & Management"
    ]
  },
  {
    category: "Data Services",
    description: "Comprehensive data management and analytics solutions",
    image: "/images/dataservices.png",
    icon: Database,
    items: [
      "Data Warehousing",
      "Business Intelligence Tools",
      "Big Data Processing",
      "Data Migration Services"
    ]
  },
  {
    category: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    image: "/images/software.png",
    icon: Code,
    items: [
      "Web Application Development",
      "Mobile App Development",
      "API Integration Services",
      "Legacy System Modernization"
    ]
  },
  {
    category: "CCTV Systems",
    description: "Advanced surveillance and security monitoring solutions",
    image: "/images/securitycams.webp",
    icon: Video,
    items: [
      "IP Camera Systems",
      "NVR & DVR Solutions",
      "Remote Monitoring Setup",
      "Integrated Security Systems"
    ]
  },
  {
    category: "Hardware Solutions",
    description: "Enterprise and consumer hardware for modern computing needs",
    image: "/images/It-hardware.jpg",
    icon: Cpu,
    items: [
      "Workstations & Thin Clients",
      "Enterprise Laptops & Desktops",
      "Networking Hardware",
      "IoT Devices & Solutions"
    ]
  },
  {
    category: "Analytics Services",
    description: "Transform your data into actionable business insights",
    image: "/images/analytics.png",
    icon: LineChart,
    items: [
      "Predictive Analytics",
      "Customer Behavior Analysis",
      "Real-time Data Dashboards",
      "Machine Learning Solutions"
    ]
  }
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Tech Solutions
          </h2>
          <p className="text-gray-600">Specialized IT, networking and security services for modern businesses</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative">
                  <Image
                    width={500}
                    height={300} 
                    src={product.image} 
                    alt={`${product.category} illustration`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-semibold">{product.category}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-primary mr-3" />
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {product.items.map((item) => (
                      <li key={item} className="text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};