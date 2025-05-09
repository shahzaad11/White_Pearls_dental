import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import DentistTeam from './components/DentistTeam';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import AppointmentBooking from './components/AppointmentBooking';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Login from './components/admin/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminAppointments from './components/admin/AdminAppointments';
import AdminPatients from './components/admin/AdminPatients';
import AdminBlog from './components/admin/AdminBlog';
import AdminReviews from './components/admin/AdminReviews';
import AdminAvailability from './components/admin/AdminAvailability';
import AdminAnalytics from './components/admin/AdminAnalytics';
import PrivateRoute from './components/admin/PrivateRoute';
import { createClient } from '@supabase/supabase-js';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={
          <PrivateRoute>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/appointments" element={<AdminAppointments />} />
              <Route path="/patients" element={<AdminPatients />} />
              <Route path="/blog" element={<AdminBlog />} />
              <Route path="/reviews" element={<AdminReviews />} />
              <Route path="/availability" element={<AdminAvailability />} />
              <Route path="/analytics" element={<AdminAnalytics />} />
            </Routes>
          </PrivateRoute>
        } />
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Navbar scrolled={scrolled} />
            <Hero />
            <Services />
            <WhyChooseUs />
            <DentistTeam />
            <Gallery />
            <Testimonials />
            <AppointmentBooking />
            <Footer />
            <div className="fixed bottom-6 right-6 z-50">
              <button 
                onClick={() => setShowChat(!showChat)}
                className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
                aria-label="Chat with Dr. Denti"
              >
                {showChat ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                )}
              </button>
            </div>
            {showChat && <ChatBot onClose={() => setShowChat(false)} />}
          </div>
        } />
      </Routes>
    </Router>
  );
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);


export default App;