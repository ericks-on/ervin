'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Ervin Solutions transformed our IT infrastructure with their innovative networking solutions and reliable support team.",
    author: "Wanjiku Mwangi",
    position: "Managing Director, Savannah Tech Ventures"
  },
  {
    text: "Their supply chain services have significantly improved our operations and cut our overhead costs by 30%.",
    author: "Henry Ochieng",
    position: "Operations Manager, Nairobi Fresh Exports"
  },
  {
    text: "Outstanding service and highly skilled professionals. Their CCTV installation for our retail chain exceeded expectations.",
    author: "Jane Akinyi",
    position: "IT Director, Zawadi Retail Group"
  },
  {
    text: "The network infrastructure Ervin Solutions designed has been running flawlessly for two years now with 99.9% uptime.",
    author: "Mutua John",
    position: "CTO, Simba Financial Services"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses across Kenya to deliver reliable IT and networking solutions
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center relative border-l-4 border-secondary"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-xl pointer-events-none" />
            <Quote className="w-12 h-12 mx-auto mb-6 text-secondary opacity-80" />
            <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex flex-col items-center">
              <div className="w-12 h-1 bg-secondary/30 rounded-full mb-4"></div>
              <div className="font-semibold text-primary text-lg">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {testimonials[currentIndex].position}
              </div>
            </div>
          </motion.div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-8 space-x-2 mb-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-secondary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-2 space-x-4">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};