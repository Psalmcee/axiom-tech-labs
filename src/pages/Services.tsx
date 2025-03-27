import React from 'react';
import { Code2, Globe, Database, Cloud, Smartphone, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business needs and challenges."
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies."
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Database Solutions",
      description: "Robust database design, optimization, and management services for efficient data handling."
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      title: "Cloud Services",
      description: "Cloud migration, hosting, and management solutions for scalable infrastructure."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Security Solutions",
      description: "Comprehensive security assessments and implementations to protect your digital assets."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#98F5E1] to-[#7fffd4]">
      <div className="relative overflow-hidden">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        
        <div className="max-w-7xl mx-auto px-4 pt-36 py-20 relative z-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:transform hover:scale-105 transition-all"
              >
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}