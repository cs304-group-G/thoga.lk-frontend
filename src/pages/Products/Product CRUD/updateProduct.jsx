import React, { useState } from 'react';

const UpdateProduct = ({ product, onUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleUpdate = () => {
    onUpdate(updatedProduct);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-gray-200 rounded-md">
      <h2 className="text-4xl flex text-center items-center justify-center underline font-bold mb-4">Update Product</h2>
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
      <button class="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
          <span class="font-bold text-white text-xl relative z-10 group-hover:text-black duration-500">
            Update Product
          </span>
          <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
          <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>
          <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
          <span class="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
