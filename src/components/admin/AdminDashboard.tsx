import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Appointments',
      value: '128',
      change: '+12.5%',
      positive: true,
    },
    {
      title: 'Active Patients',
      value: '1,024',
      change: '+5.2%',
      positive: true,
    },
    {
      title: 'Reviews',
      value: '96',
      change: '+8.1%',
      positive: true,
    },
    {
      title: 'Blog Posts',
      value: '24',
      change: '+2',
      positive: true,
    },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
              <div className={`flex items-center mt-2 ${
                stat.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                <span className="text-sm font-medium">{stat.change}</span>
                <svg
                  className={`w-4 h-4 ml-1 ${stat.positive ? 'rotate-0' : 'rotate-180'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Recent Appointments</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Patient</th>
                    <th className="text-left py-2">Service</th>
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">John Doe</td>
                    <td className="py-2">Cleaning</td>
                    <td className="py-2">Dec 15, 2023</td>
                    <td className="py-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        Confirmed
                      </span>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
            <Link to="/admin/appointments" className="text-primary-600 hover:text-primary-700 mt-4 inline-block">
              View all appointments →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Pending Reviews</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Sarah M.</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-700">
                      Approve
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      Reject
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  "Great experience with Dr. Johnson. Very professional and caring."
                </p>
              </div>
              {/* Add more reviews as needed */}
            </div>
            <Link to="/admin/reviews" className="text-primary-600 hover:text-primary-700 mt-4 inline-block">
              View all reviews →
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;