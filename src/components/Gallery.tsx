import React, { useState } from 'react';

interface GalleryItem {
  before: string;
  after: string;
  category: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems: GalleryItem[] = [
    {
      before: 'https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg',
      after: 'https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg',
      category: 'veneers',
      description: 'Porcelain veneers to correct discolored and misaligned teeth',
    },
    {
      before: 'https://images.pexels.com/photos/3845739/pexels-photo-3845739.jpeg',
      after: 'https://images.pexels.com/photos/3845751/pexels-photo-3845751.jpeg',
      category: 'whitening',
      description: 'Professional teeth whitening to remove years of stains',
    },
    {
      before: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg',
      after: 'https://images.pexels.com/photos/3823528/pexels-photo-3823528.jpeg',
      category: 'braces',
      description: 'Invisible aligners to create a perfectly straight smile',
    },
    {
      before: 'https://images.pexels.com/photos/6502313/pexels-photo-6502313.jpeg',
      after: 'https://images.pexels.com/photos/6502271/pexels-photo-6502271.jpeg',
      category: 'implants',
      description: 'Dental implant to replace a missing front tooth',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Treatments' },
    { id: 'veneers', name: 'Veneers' },
    { id: 'whitening', name: 'Whitening' },
    { id: 'braces', name: 'Braces' },
    { id: 'implants', name: 'Implants' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Smile Transformations</h2>
        <p className="section-subtitle">
          See the remarkable before and after results from our patients who have 
          transformed their smiles with our advanced dental treatments.
        </p>
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 relative">
                  <img 
                    src={item.before} 
                    alt="Before treatment" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-gray-900 bg-opacity-70 text-white px-3 py-1 text-sm">
                    Before
                  </div>
                </div>
                <div className="w-full sm:w-1/2 relative">
                  <img 
                    src={item.after} 
                    alt="After treatment" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 text-sm">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="inline-block bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-xs font-medium mb-2">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#appointment" className="btn-primary">
            Get Your Smile Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;