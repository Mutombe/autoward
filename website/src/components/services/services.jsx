import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Cpu, Wrench, Activity, 
  Users, Award, Clock, 
  Phone, Mail, MapPin 
} from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow ${className}`}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ title, children }) => (
  <div className="px-6 py-4 bg-blue-900 text-white">
    <h2 className="text-xl font-semibold">{title}</h2>
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      title: 'Key Programming',
      icon: Settings,
      description: 'Expert key programming services for all vehicle makes and models. We ensure precise coding and integration with your vehicle\'s computer system, whether you need a replacement key or want to add a new one.'
    },
    {
      title: 'Computer Box Repair',
      icon: Cpu,
      description: 'Specialized ECU diagnostics and repair services. Using advanced diagnostic equipment, we identify and resolve issues with your vehicle\'s computer system to restore optimal performance.'
    },
    {
      title: 'Distributor Test',
      icon: Wrench,
      description: 'Comprehensive distributor testing for reliable ignition system performance. Our advanced equipment ensures precise evaluation and optimal spark timing for your vehicle.'
    },
    {
      title: 'Electronic Fuel Injection',
      icon: Activity,
      description: 'Professional EFI system diagnostics and optimization. We ensure your fuel injection system operates at peak efficiency for optimal performance and fuel economy.'
    }
  ];

  return (
    <div className="container mx-auto my-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional automotive electronics solutions delivered by expert technicians
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader title={service.title} />
            <CardContent>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <service.icon className="h-8 w-8 text-blue-900" />
                </div>
                <p className="text-gray-700 flex-1">{service.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const AboutPage = () => {
  const aboutSections = [
    {
      title: 'Our Company',
      icon: Users,
      description: "Autoward Electronics leads the industry in advanced automotive electronics services. Since our founding, we've established ourselves as a trusted partner for both individual and business clients throughout the region"
    },
    {
      title: 'Our Expertise',
      icon: Award,
      description: 'Our team of certified technicians combines extensive experience with continuous training on the latest automotive technologies. We invest in advanced diagnostic equipment to deliver reliable, effective solutions.'
    },
    {
      title: 'Our Commitment',
      icon: Clock,
      description: 'We pride ourselves on responsive service and superior customer satisfaction. With our 24-hour service level agreement, we ensure quick response times and regular status updates for all client needs.'
    }
  ];

  return (
    <div className="container mx-auto my-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Delivering excellence in automotive electronics since 2010
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {aboutSections.map((section, index) => (
          <Card key={index}>
            <CardHeader title={section.title} />
            <CardContent>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <section.icon className="h-8 w-8 text-blue-900" />
                </div>
                <p className="text-gray-700 flex-1">{section.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto my-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with our team of automotive electronics experts
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader title="Send Us a Message" />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Contact Information" />
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+263 772 714 099</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">autowardelectronics@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">
                    Stand 14432 Seke Road,<br />
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