import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  treatment: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      name: 'Emma Thompson',
      treatment: 'Invisalign',
      content: 'I was always self-conscious about my smile, but Dr. Johnson changed everything. The team was amazing throughout my Invisalign treatment, and now I can\'t stop smiling!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    {
      name: 'David Martinez',
      treatment: 'Dental Implants',
      content: 'After losing my front tooth in an accident, I thought my smile would never be the same. Dr. Wilson placed an implant that looks and feels exactly like my natural tooth!',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
    {
      name: 'Sophie Chen',
      treatment: 'Veneers',
      content: 'My teeth were stained and slightly crooked. Dr. Chen recommended porcelain veneers, and the results are incredible! I receive compliments everywhere I go.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
    {
      name: 'Michael Garcia',
      treatment: 'Root Canal',
      content: 'I was terrified of getting a root canal, but Dr. Rodriguez made the procedure completely painless. The staff was supportive, and I didn\'t feel a thing!',
      rating: 5,
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Patient Testimonials</h2>
        <p className="section-subtitle">
          Hear from our satisfied patients about their experiences and the 
          transformative results of their dental treatments.
        </p>
        
        <div className="relative overflow-hidden">
          <div 
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill={i < testimonial.rating ? "#F59E0B" : "none"}
                            stroke={i < testimonial.rating ? "#F59E0B" : "currentColor"}
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="mr-1"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                        ))}
                      </div>
                      <p className="italic text-gray-700 mb-4">"{testimonial.content}"</p>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-primary-600">{testimonial.treatment} Patient</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M2 16V8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"/><circle cx="12" cy="12" r="0"/></svg>
              <span className="font-medium">Watch Video Testimonials</span>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-0 pb-[56.25%] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-primary-600 mb-2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                    <p className="text-gray-800 font-bold">Video Testimonials</p>
                    <p className="text-gray-600 text-sm">Click to watch our patients share their stories</p>
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

export default Testimonials;