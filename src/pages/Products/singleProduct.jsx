import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SingleProduct() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/product/');
        const data = await response.json();
        setProducts(data);
        setSortedProducts([...data]); // Initially set sortedProducts to the same as products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle sorting based on price
  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'; // Toggle sorting order
    setSortOrder(newSortOrder);

    const sorted = [...sortedProducts].sort((a, b) => {
      if (newSortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setSortedProducts(sorted);
  };

  return (
    <div className="ml-2 mr-2 ">
      <div className="flex justify-end p-4">
        <button
          className="bg-gray-800 h-8 text-white  p-2 rounded-md"
          onClick={handleSort}
        >
          Sort by Price {sortOrder === 'asc' ? '↑' : '↓'}
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sortedProducts.map((product) => (
            <Link  to={`/product/${product._id}`} key={products.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src='https://plus.unsplash.com/premium_photo-1675366071307-4be5bda2ceda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      Title : {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500"></p>
                </div>
                <p className="text-sm font-medium text-gray-900">Rs : {product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
  );
}
