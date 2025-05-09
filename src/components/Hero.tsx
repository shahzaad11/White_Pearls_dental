import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-20 md:pt-28 md:pb-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg')",
          filter: "brightness(0.9)"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 z-10"></div>
      
      <div className="container-custom relative z-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 pb-8 md:pb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in">
              Your Smile, <br />
              <span className="text-secondary-600">Our Passion</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-lg animate-slide-up">
              Experience luxury dental care with state-of-the-art technology 
              and a team dedicated to creating your perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a href="#appointment" className="btn-primary">
                Book Your Visit
              </a>
              <button className="btn-outline">
                Virtual Consultation
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-8 animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3845751/pexels-photo-3845751.jpeg" 
                alt="Beautiful smile transformation" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-success-500 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-gray-800">99% Satisfaction</p>
                    <p className="text-sm text-gray-600">From our patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;