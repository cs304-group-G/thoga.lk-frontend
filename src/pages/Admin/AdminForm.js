// AdminForm.js

import React, { useState } from 'react';
import { useAdminContext } from './AdminContext';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom

const AdminForm = () => {
  const { setForm } = useAdminContext();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    city: '',
    photourls: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(formData);
  };

  return (
    <div className="flex flex-col mt-3 items-center justify-center h-screen relative">
      <div className="absolute left-4 top-4">
        <Link to="/">
          <button className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            To Home
          </button>
        </Link>
      </div>
      <h1 className="text-4xl font-bold m-6 ">
        Welcome to <span className="font-extrabold text-red-500">Thoga.lk</span> Admin Dashboard
      </h1>
      <form className="bg-white p-8 shadow-md rounded-md w-96" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">Admin Form</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photourls" className="block text-sm font-medium text-gray-600">
            Photo URLs (comma-separated)
          </label>
          <input
            type="text"
            id="photourls"
            name="photourls"
            value={formData.photourls}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
