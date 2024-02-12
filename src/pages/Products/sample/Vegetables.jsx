import React, { useEffect, useState } from "react";
import AddProduct from "../Product_CRUD/addProduct";
import { Link } from "react-router-dom";
import Admin from '../../Admin/Admin'


export default function Vegetables() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await  fetch('http://localhost:8080/api/v1/product');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
    <section>
      
    <Admin/>

  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <Link to='/addProduct' className="bg-blue-700 text-white hover:bg-slate-200 rounded-lg  hover:text-black p-2 ">Add Product </Link>
    <header>
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">VEGETABLES</h2>

      <p class="mt-4 max-w-md text-gray-500">
        Search your desired item through the VEGETABLES category
      </p>
      <button 
      
      className='top-20 right-20 absolute bg-blue-500 p-3 rounded-lg text-white hover:text-black hover:bg-slate-300 '>Button</button>
    </header>

    <div class="mt-8 block lg:hidden">
      <button
        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span class="text-sm font-medium"> Filters & Sorting </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 rtl:rotate-180"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>

    <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
      <div class="hidden space-y-4 lg:block">
        <div>
          <label for="SortBy" class="block text-xs font-medium text-gray-700"> Sort By </label>

          <select id="SortBy" class="mt-1 rounded border-gray-300 text-sm">
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
            <option value="Price, DESC">Price, DESC</option>
            <option value="Price, ASC">Price, ASC</option>
            <option value="Price, ASC">District, ASC</option>
            <option value="Price, ASC">District, DESC</option>
          </select>
        </div>

        <div>
          <p class="block text-xs font-medium text-gray-700">Filters</p>

          <div class="mt-1 space-y-2">
            <details
              class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span class="text-sm font-medium"> Availability </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <span class="text-sm text-gray-700"> 0 Selected </span>

                  <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
                    Reset
                  </button>
                </header>

                <ul class="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label for="FilterInStock" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        class="size-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                    </label>
                  </li>

                  <li>
                    <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        class="size-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                    </label>
                  </li>

                  <li>
                    <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterOutOfStock"
                        class="size-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>

            <details
              class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span class="text-sm font-medium"> Price </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  

                  <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
                    Reset
                  </button>
                </header>

                <div class="border-t border-gray-200 p-4">
                  <div class="flex justify-between gap-4">
                    <label for="FilterPriceFrom" class="flex items-center gap-2">
                      <span class="text-sm text-gray-600">Rs</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>

                    <label for="FilterPriceTo" class="flex items-center gap-2">
                      <span class="text-sm text-gray-600">Rs</span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </details>

            <details
              class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span class="text-sm font-medium"> District </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <span class="text-sm text-gray-700"> 0 Selected </span>

                  <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
                    Reset
                  </button>
                </header>

                <ul class="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label for="FilterRed" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterRed"
                        class="size-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> Galle </span>
                    </label>
                  </li>

                  <li>
                    <label for="FilterBlue" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterBlue"
                        class="size-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> Nuwara Eliya </span>
                    </label>
                  </li>

                  <li>
                    <label for="FilterGreen" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterGreen"
                        class="size-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> Dambulla </span>
                    </label>
                  </li>

                  <li>
                    <label for="FilterOrange" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterOrange"
                        class="size-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> Kandy </span>
                    </label>
                  </li>

                  <li>
                    <label for="FilterPurple" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterPurple"
                        class="size-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> Jaffna </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>

      <div class="lg:col-span-3">
      <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product._id}>
            <a href="#" class="group block overflow-hidden">
              <img
                src={product.photos}
                
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px]"
              />

              <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  {product.title}
                  
                </h3>
                <div className="flex flex-col ">
                <span>City : {product.city}</span>
                  <span>Description : {product.description}</span>
                </div>
                

                <p class="mt-2">
                  
                  <span class="sr-only"> Regular Price </span>
                  <span class="tracking-wider text-gray-900"> Rs {product.price}</span>
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  </div>
</section>
   </>
  );
}
