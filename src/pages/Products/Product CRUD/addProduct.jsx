import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: "",
    productName: "",
    productDistrict: "",
    productDetails: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", product);
  };

  const handleBuyNow = () => {
    console.log("Buy now:", product);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 items-center justify-center  bg-gray-200 rounded-md  ">
      <h2 className="flex items-center justify-center text-4xl  text-center font-bold underline mb-4">
        Add Product
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Add Image</label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Add Product Name</label>
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">
          Add Product District
        </label>
        <input
          type="text"
          name="productDistrict"
          value={product.productDistrict}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2">Product Details</label>
        <textarea
          name="productDetails"
          value={product.productDetails}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block  text-sm font-bold mb-2">Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex  md:flex-row md:justify-between justify-center text-center items-center">
        <button class="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
          <span class="font-bold text-white text-xl relative z-10 group-hover:text-black duration-500">
            Add Product
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

export default AddProduct;
