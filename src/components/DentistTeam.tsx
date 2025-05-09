import React from 'react';

interface DentistProps {
  name: string;
  specialty: string;
  experience: string;
  languages: string[];
  rating: number;
  image: string;
}

const DentistCard: React.FC<DentistProps> = ({ name, specialty, experience, languages, rating, image }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-hover transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{specialty}</p>
        
        <div className="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 mr-2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
          <span className="text-gray-700 text-sm">{experience}</span>
        </div>
        
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 mr-2"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
          <span className="text-gray-700 text-sm">{languages.join(', ')}</span>
        </div>
        
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill={i < Math.floor(rating) ? "#F59E0B" : "none"}
                stroke={i < Math.floor(rating) ? "#F59E0B" : "currentColor"}
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-1"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
            <span className="ml-1 text-gray-700 text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DentistTeam: React.FC = () => {
  const dentists: DentistProps[] = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cosmetic Dentistry',
      experience: '15 years experience',
      languages: ['English', 'Spanish'],
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Orthodontics',
      experience: '12 years experience',
      languages: ['English', 'Mandarin'],
      rating: 4.8,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatric Dentistry',
      experience: '10 years experience',
      languages: ['English', 'Spanish', 'Portuguese'],
      rating: 4.7,
      image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg',
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Restorative Dentistry',
      experience: '20 years experience',
      languages: ['English', 'French'],
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg',
    },
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Meet Our Dentists</h2>
        <p className="section-subtitle">
          Our team of experienced dental professionals is committed to providing 
          personalized care and creating beautiful, healthy smiles.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {dentists.map((dentist, index) => (
            <DentistCard key={index} {...dentist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DentistTeam;