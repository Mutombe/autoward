import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  Settings, Cog, Wrench, Activity, 
  Users, Award, Clock, 
  Phone, Mail, MapPin 
} from 'lucide-react';

// Reusable Card Component
const Card = ({ children, className = '' }) => (
  <div className={`bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 ${className}`}>
    {children}
  </div>
);

// Reusable CardHeader Component
const CardHeader = ({ title, children }) => (
  <div className="px-6 py-4 border-b border-gray-100">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    {children}
  </div>
);

// Reusable CardContent Component
const CardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);

// Services Page Component
const ServicesPage = () => {
  const services = [
    {
      title: 'Key Programming',
      icon: Settings,
      description: 'Our skilled technicians are experts in key programming, ensuring that your vehicle\'s keys are properly coded and integrated with the onboard computer system. Whether you need a replacement key or want to add a new one, we have the tools and expertise to get the job done right.'
    },
    {
      title: 'Computer Box Repair',
      icon: Cog,
      description: 'Autoward Electronics specializes in the diagnosis and repair of vehicle computer boxes. Our technicians use state-of-the-art diagnostic equipment to identify and address any issues with your vehicle\'s onboard computer, ensuring optimal performance and reliability.'
    },
    {
      title: 'Distributor Test',
      icon: Wrench,
      description: 'Proper distributor testing is essential for maintaining the health and performance of your vehicle\'s ignition system. Our experienced technicians use advanced equipment to thoroughly evaluate the distributor, ensuring that it is functioning correctly and delivering optimal spark timing.'
    },
    {
      title: 'Electronic Fuel Injection',
      icon: Activity,
      description: 'Autoward Electronics provides comprehensive services for electronic fuel injection systems. Our team is highly skilled in diagnosing and repairing any issues with your vehicle\'s fuel injection components, ensuring optimal fuel efficiency and performance.'
    }
  ];

  return (
    <div className="container mx-auto my-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader title={service.title} />
            <CardContent>
              <div className="flex items-center space-x-4">
                <service.icon className="h-8 w-8 text-blue-600" />
                <p className="text-gray-700">{service.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  const aboutSections = [
    {
      title: 'Our Company',
      icon: Users,
      description: 'Autoward Electronics is a leading provider of advanced automotive electronics services. Founded in 2010, our company has grown to become a trusted partner for individuals and businesses throughout the region. With a team of highly skilled technicians, we are dedicated to delivering exceptional solutions that meet the unique needs of our clients.'
    },
    {
      title: 'Our Expertise',
      icon: Award,
      description: 'At Autoward Electronics, we pride ourselves on our deep expertise in a wide range of automotive electronics services. Our technicians undergo continuous training and use the latest diagnostic equipment to ensure that we always provide the most reliable and effective solutions. Whether you need key programming, computer box repair, distributor testing, or electronic fuel injection services, you can trust that our team has the knowledge and skills to get the job done right.'
    },
    {
      title: 'Our Commitment',
      icon: Clock,
      description: 'At Autoward Electronics, we are committed to providing our clients with the highest level of customer satisfaction. We work closely with each customer to understand their unique needs and provide tailored solutions that exceed their expectations. Our team takes pride in their work and is dedicated to delivering prompt, reliable, and efficient service every time. With a 24-hour SLA for initial response and status updates, you can count on Autoward Electronics to be there when you need us.'
    }
  ];

  return (
    <div className="container mx-auto my-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">About Autoward Electronics</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {aboutSections.map((section, index) => (
          <Card key={index}>
            <CardHeader title={section.title} />
            <CardContent>
              <div className="flex items-center space-x-4">
                <section.icon className="h-8 w-8 text-blue-600" />
                <p className="text-gray-700">{section.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto my-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader title="Get in Touch" />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Contact Details" />
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Phone className="h-8 w-8 mt-1 text-blue-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">+263 772 714 099</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-8 w-8 mt-1 text-blue-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">autowardelectronics@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 mt-1 text-blue-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    Stand 14432 Seke Road,
                    <br />
                    Graniteside, Harare
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { ServicesPage, AboutPage, ContactPage };