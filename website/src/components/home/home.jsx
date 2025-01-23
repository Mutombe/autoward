import React, { useState, useEffect } from 'react';
import { Settings, Cog, Wrench, Activity, Users, Award, Clock, Phone, Mail, MapPin, Cpu, Battery, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const Homepage = () => {
  const carouselImages = [
    '/cbr.jpg',
    '/cbr2.jpg',
    '/key1.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services1 = [
    { icon: Settings, title: 'Key Programming' },
    { icon: Settings, title: 'Computer Box Repair' },
    { icon: Settings, title: 'Distributor Test' },
    { icon: Settings, title: 'Electronic Fuel Injection' }
  ];

  const services = [
    { icon: Cog, title: 'Key Programming', description: 'Advanced key programming and duplication services' },
    { icon: Cpu, title: 'Computer Box Repair', description: 'Expert ECU diagnostics and repair' },
    { icon: Battery, title: 'Distributor Test', description: 'Comprehensive distributor testing and maintenance' },
    { icon: Zap, title: 'Electronic Fuel Injection', description: 'Precision EFI system optimization' }
  ];

  return (
    <div>
      {/* Responsive Carousel */}
      <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden">
        {carouselImages.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Carousel Item ${index}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold">Autoward Electronics</h1>
          <p className="mt-2 md:mt-4 text-sm md:text-lg">Specialists in Automotive Electronics</p>
          <div className="mt-4 md:mt-8 flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm md:text-base">
              Explore Services
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded text-sm md:text-base">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="container mx-auto my-8 md:my-12 px-4 grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white shadow-md rounded p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">About Autoward Electronics</h2>
          <p className="text-sm md:text-base">
            Autoward Electronics is a leading provider of advanced automotive
            electronics services. With years of experience and a team of highly
            skilled technicians, we are dedicated to delivering exceptional
            solutions to our clients.
          </p>
          <p className="mt-2 md:mt-4 text-sm md:text-base">
            At Autoward Electronics, we pride ourselves on our commitment to
            customer satisfaction. We work closely with our clients to
            understand their unique needs and provide tailored solutions.
          </p>
        </div>
        
        <div className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
};

export default Homepage;