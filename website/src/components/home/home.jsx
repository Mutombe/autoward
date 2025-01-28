import React, { useState, useEffect } from 'react';
import { Settings, Wrench, Activity, Cpu, Battery, Zap } from 'lucide-react';

export const Homepage = () => {
  const services = [
    { 
      icon: Settings, 
      title: 'Key Programming', 
      description: 'Advanced automotive key programming and duplication services for all vehicle makes and models' 
    },
    { 
      icon: Cpu, 
      title: 'Computer Box Repair', 
      description: 'Expert ECU diagnostics and repair services to restore your vehicle\'s optimal performance' 
    },
    { 
      icon: Activity, 
      title: 'Computer Diagnosis Test', 
      description: 'Comprehensive computer diagnostics to identify and resolve electronic system issues' 
    },
    { 
      icon: Wrench, 
      title: 'Distributor Test', 
      description: 'Professional distributor testing and maintenance for optimal engine performance' 
    },
    { 
      icon: Zap, 
      title: 'Electronic Fuel Injection', 
      description: 'Precision EFI system optimization and repair services' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autoward Electronics
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Specialists in Automotive Electronics
              <br />
              Key Programming | Computer Box Repair | Electronic Systems
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                Our Services
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-md font-semibold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Specialized Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold mb-2">Location</span>
                <p>Stand 14432 Seke Road, Graniteside, Harare</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold mb-2">Phone</span>
                <p>+263 772 714 099</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold mb-2">Email</span>
                <p>autowardelectronics@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
