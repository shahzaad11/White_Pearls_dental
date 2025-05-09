import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

interface Service {
  id: string;
  name: string;
  price: string;
}

const AppointmentBooking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const services: Service[] = [
    { id: 'check-up', name: 'Regular Check-up', duration: '30 min', price: '$80' },
    { id: 'cleaning', name: 'Professional Cleaning', duration: '45 min', price: '$120' },
    { id: 'whitening', name: 'Teeth Whitening', duration: '60 min', price: '$250' },
    { id: 'consultation', name: 'Cosmetic Consultation', duration: '45 min', price: '$100' },
  ];

  const doctors = [
    { id: 'dr-johnson', name: 'Dr. Sarah Johnson' },
    { id: 'dr-chen', name: 'Dr. Michael Chen' },
    { id: 'dr-rodriguez', name: 'Dr. Emily Rodriguez' },
    { id: 'dr-wilson', name: 'Dr. James Wilson' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const selectedServiceDetails = services.find(s => s.id === selectedService);
      const selectedDoctorDetails = doctors.find(d => d.id === selectedDoctor);

      const templateParams = {
        to_name: formData.name,
        to_email: formData.email,
        appointment_date: selectedDate,
        appointment_time: selectedTime,
        service: selectedServiceDetails?.name || 'Not specified',
        doctor: selectedDoctorDetails?.name || 'Any available doctor',
        phone: formData.phone,
        notes: formData.notes,
      };

      await emailjs.send(
        'service_w1w2bfa',
        'template_kxpj9hc',
        templateParams,
        'vBTohtwE9NgHXRfUx'
      );

      await Swal.fire({
        icon: 'success',
        title: 'Appointment Booked!',
        text: 'We have sent you a confirmation email with the appointment details.',
        showConfirmButton: true,
        confirmButtonColor: '#475569',
        timer: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        notes: '',
      });
      setSelectedDate('');
      setSelectedTime('');
      setSelectedService('');
      setSelectedDoctor('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again.',
        confirmButtonColor: '#475569',
      });
    }
  };

  return (
    <section id="appointment" className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="section-subtitle">
            Schedule your visit with our easy-to-use booking system. Select your preferred 
            date, time, service, and dentist.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-4">Pick a Date & Time</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Available Time Slots
                    </label>
                    <select
                      id="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service
                    </label>
                    <select
                      id="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} ({service.duration}, {service.price})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Dentist
                    </label>
                    <select
                      id="doctor"
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">No preference</option>
                      {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Your Information</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us about any concerns or special requirements"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Confirm Appointment
                </button>
                <p className="text-center text-sm text-gray-600 mt-3">
                  You'll receive a confirmation email and SMS once your appointment is confirmed.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;