// AddProduct.js
import React, { useState } from "react";
import Axios from "axios-fetch";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: 0,
    city: "",
    photos: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setProductData({ ...productData, photos: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("city", productData.city);
    productData.photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    try {
      const response = await Axios.post("/api/addProduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      // Redirect or show success message
    } catch (error) {
      console.error("Error adding product:", error.response.data.error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
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
            value={productData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
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
            value={productData.city}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photos" className="block text-sm font-medium text-gray-600">
            Photos
          </label>
          <input
            type="file"
            id="photos"
            name="photos"
            onChange={handleFileChange}
            className="mt-1 p-2 border rounded-md w-full"
            multiple
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
