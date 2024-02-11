import React, { useState, useEffect } from 'react';

export default function SingleProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/product/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-row">
      {products.map((product) => (
        <div key={product.id} className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg mt-2 mb-3">
          <div className="relative">
            <img
              className="max-w items-center m-auto max-h-sm"
              src={product.photo}  // Assuming 'photo' is the key for the product image URL
              alt={product.title}  // Assuming 'title' is the key for the product title
            />
          </div>
          <div className="p-4">
            <span className="text-2xl font-bold text-center justify-center items-center text-red-800 mb-2">
              {product.title}
            </span>
            <span className="flex flex-row space-x-3">
              <h3 className="text-lg font-medium text-gray-600 mb-2">Description -</h3>
              <h3 className="text-lg font-medium text-green-600 mb-2">
                {product.description}
              </h3>
            </span>
            <p className="text-gray-600 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="space-x-1">
                <span className="text-md gap-2 border-[2px] p-3 rounded-md bg-gray-300 font-semibold  ">
                  {product.price}
                </span>
              </span>
              <button className="bg-cyan-500 hover:bg-green-500 text-lg text-white font-bold p-3 rounded">
                Add to cart
              </button>
              <button className="bg-red-500 hover:bg-green-500  text-lg text-white font-bold p-3 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
