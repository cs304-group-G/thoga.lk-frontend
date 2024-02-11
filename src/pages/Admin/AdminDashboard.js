// AdminDashboard.js

import React from 'react';
import { useAdminContext } from './AdminContext';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { formData } = useAdminContext();

  return (
    <Link to="/admin" className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Title: {formData?.title}</h2>
          <p className="text-gray-600 mb-2">Description: {formData?.description}</p>
          <p className="text-lg font-semibold mb-2">Price: {formData?.price}</p>
          <p className="text-gray-600 mb-2">City: {formData?.city}</p>
        </div>

        <div className="mb-4">
          {formData?.photourls.split(',').map((url, index) => (
            <img key={index} src={url.trim()} alt={`Photo ${index + 1}`} className="w-full h-48 object-cover rounded-md mb-2" />
          ))}
        </div>

        <div className="flex justify-end">
         
          <Link to="/admin" className="text-blue-500 hover:underline">Edit Admin Form</Link>
        </div>
      </div>
    </Link>
  );
};

export default AdminDashboard;
