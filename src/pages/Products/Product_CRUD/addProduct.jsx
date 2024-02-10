import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    city: '',
    photoUrls: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await axios.post('http://localhost:8080/api/v1/product', formData);

      // Clear the form after successful submission
      setFormData({
        title: '',
        description: '',
        price: '',
        city: '',
        photoUrls: '',
      });
    } catch (error) {
      console.error('Error adding vegetable:', error);
    }
  };

  return (
    <div className="container mx-auto mt-2">
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto border-[5px] border-green-400  p-6">
      <div className='  font-bold text-2xl   text-center '>
        <h1>Add Vegetable</h1>
      </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div><div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Price
                      </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div><div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div><div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Photo urls
          </label>
          <input
            type="array"
            id="photoUrls"
            name="photoUrls"
            value={formData.photoUrls}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        
        <div className="mb-4 items-center text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Vegetable
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
