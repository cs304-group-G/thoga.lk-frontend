import React, { useState } from 'react';

const updateProduct = ({ product, onUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleUpdate = () => {
    onUpdate(updatedProduct);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-green-600 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Update Product</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
        <input
          type="text"
          name="productName"
          value={updatedProduct.productName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Product District</label>
        <input
          type="text"
          name="productDistrict"
          value={updatedProduct.productDistrict}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Product Details</label>
        <textarea
          name="productDetails"
          value={updatedProduct.productDetails}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
        <input
          type="number"
          name="price"
          value={updatedProduct.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex justify-end">
        <button onClick={handleUpdate} className="bg-red-500 text-white px-4 py-2 rounded-md">
          Update Product
        </button>
      </div>
    </div>
  );
};

export default updateProduct;
