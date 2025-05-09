import React, { useState } from 'react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive care for your overall oral health, including cleanings, check-ups, and preventive treatments.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M8 2a4 4 0 0 0-4 4v10.5a5.5 5.5 0 0 0 11 0V6a4 4 0 0 0-4-4Z"></path>
          <path d="M9 16V6a1 1 0 0 0-2 0v10"></path>
        </svg>
      ),
      features: ['Check-ups', 'Cleanings', 'Fillings', 'Preventive Care'],
      image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg',
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic procedures designed to enhance the appearance of your teeth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 22a9 9 0 0 0 9-9l-9-6.95-9 6.95a9 9 0 0 0 9 9Z"></path>
          <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
        </svg>
      ),
      features: ['Teeth Whitening', 'Veneers', 'Dental Bonding', 'Smile Makeovers'],
      image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg',
    },
    {
      title: 'Orthodontics',
      description: 'Correct teeth alignment and bite issues with our range of orthodontic treatments for patients of all ages.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M11 5h4a4 4 0 0 1 0 8h-4V5Z"></path>
          <path d="m15 13-4 6"></path>
          <path d="M5 5v14"></path>
        </svg>
      ),
      features: ['Braces', 'Clear Aligners', 'Retainers', 'Early Intervention'],
      image: 'https://images.pexels.com/photos/6627401/pexels-photo-6627401.jpeg',
    },
    {
      title: 'Restorative Dentistry',
      description: 'Restore damaged or missing teeth with our advanced restorative treatments for improved function and aesthetics.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M13 2H7a5 5 0 0 0-5 5v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-8"></path>
          <path d="M10 14H7"></path>
          <path d="M15 10v4"></path>
          <path d="M15 4V2"></path>
          <path d="m15 8-2-2 4-4 2 2-4 4Z"></path>
        </svg>
      ),
      features: ['Dental Implants', 'Crowns & Bridges', 'Dentures', 'Root Canal Therapy'],
      image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer a comprehensive range of dental services to meet all your oral health needs,
          from routine check-ups to advanced cosmetic and restorative procedures.
        </p>

        <div className="flex flex-wrap mb-8 border-b">
          {services.map((service, index) => (
            <button
              key={index}
              className={`px-4 py-3 text-sm md:text-base font-medium transition-colors
                ${activeTab === index 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-600 hover:text-primary-500'
                }
              `}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex items-center">
                <span className="mr-2">{service.icon}</span>
                <span>{service.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">{services[activeTab].title}</h3>
            <p className="text-gray-700 mb-6">{services[activeTab].description}</p>
            
            <ul className="space-y-3 mb-6">
              {services[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="bg-primary-100 text-primary-700 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <a href="#appointment" className="btn-primary">
              Book This Service
            </a>
          </div>
          
          <div className="w-full md:w-1/2 pl-0 md:pl-8">
            <img 
              src={services[activeTab].image} 
              alt={services[activeTab].title} 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;