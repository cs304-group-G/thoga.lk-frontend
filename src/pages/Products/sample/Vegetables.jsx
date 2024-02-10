import React, { useState } from "react";
import AddProduct from "../Product_CRUD/addProduct";
import Dashboard from '../components/dashBoard';

export default function Vegetables() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleAddProductClick = () => {
    setShowAddProduct(!showAddProduct);

    // Smooth scroll to the AddProduct component
    window.scrollTo({
      top: document.getElementById("addProductSection").offsetTop,
      behavior: "smooth",
    });
  };

  const handleCloseAddProduct = () => {
    setShowAddProduct(false);
  };
  return (
    <><div className="bg-white flex flex-column py-6 ">
      <Dashboard />
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">


        <div className="mb-2 flex items-end justify-between gap-4">

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddProductClick}
          >
            + Add Product
          </button>

        </div>
        <div id="addProductSection">
          {showAddProduct && (
            <div id="addProductSection">
              <AddProduct />


            </div>
          )}
        </div>
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-6 flex items-end justify-between gap-4">
            <h2 class="text-2xl  font-bold text-gray-800 align-center lg:text-3xl">Vegetables</h2>


          </div>

          <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <a
                href="#"
                class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlfGVufDB8MXwwfHx8MA%3D%3D"
                  loading="lazy"

                  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              </a>

              <div>
                <a
                  href="#"
                  class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Potato
                </a>

                <div class="flex items-end gap-2">
                  <span class="font-bold text-gray-800 lg:text-lg">1Kg - Rs 15.00</span>

                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1553395572-0ef353a212bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlZ2V0YWJsZXxlbnwwfDF8MHx8fDA%3D"
                  loading="lazy"
                  alt="Photo by Galina N"
                  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <div>
                <a
                  href="#"
                  class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Tomato
                </a>

                <div class="flex items-end gap-2">
                  <span class="font-bold text-gray-800 lg:text-lg">1 Kg - Rs 200.00</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2V0YWJsZXxlbnwwfDF8MHx8fDA%3D"
                  loading="lazy"
                  alt="Photo by eniko kis"
                  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <div>
                <a
                  href="#"
                  class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Carrot
                </a>

                <div class="flex items-end gap-2">
                  <span class="font-bold text-gray-800 lg:text-lg">1 Kg - 450.00</span>
                </div>
              </div>
            </div>



            <div>
              <a
                href="#"
                class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZlZ2V0YWJsZXxlbnwwfDF8MHx8fDA%3D"
                  loading="lazy"
                  alt="Photo by Charles Deluvio"
                  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <div>
                <a
                  href="#"
                  class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Pumpkin
                </a>

                <div class="flex items-end gap-2">
                  <span class="font-bold text-gray-800 lg:text-lg">1 Kg - Rs. 400.00</span>
                </div>
              </div>
            </div>


            <div>
              <a
                href="#"
                class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1675366071307-4be5bda2ceda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
                  loading="lazy"

                  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              </a>

              <div>
                <a
                  href="#"
                  class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Leafy Greens
                </a>

                <div class="flex items-end gap-2">
                  <span class="font-bold text-gray-800 lg:text-lg">1 Kg</span>
                  <span class="mb-0.5 text-red-500 line-through">Rs 140.00</span>
                  <span class="mb-0.5 ">Rs 120.00</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://images.unsplash.com/photo-1594282486756-06f49bb34c05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D"
                  loading="lazy"

                  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <div>
                <a
                  href="#"
                  class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Cabbage
                </a>

                <div class="flex items-end gap-2">
                  <span class="font-bold text-gray-800 lg:text-lg"> 1Kg </span>
                  <span class="font-bold text-gray-800 lg:text-lg align-items-end">Rs 230.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}
