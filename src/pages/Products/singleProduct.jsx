import React from 'react'

export default function singleProduct() {
  return (
    <div className="flex flex-row">
        
    <div class="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg mt-2  mb-3">
      <div class="relative">
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1603117869492-9f217038e19a?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          
        />
        <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div>
      </div>
      <div class="p-4 ">
        <span class="text-2xl  font-bold text-center justify-center items-center text-red-800 mb-2">
          Carrot
        </span>
        <span className="flex flex-row space-x-3">
          <h3 class="text-lg font-medium text-gray-600 mb-2">District -</h3>
          <h3 class="text-lg font-medium text-green-600 mb-2">
            Galle
          </h3>{" "}
        </span>
        <p class="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vitae ante vel eros fermentum faucibus sit amet euismod lorem.
        </p>
        <div class="flex items-center justify-between">
          <span className="space-x-1">
            <span class="text-md gap-2 border-[2px] p-3 rounded-md bg-gray-300 font-semibold border-red-500 ">
              1 Kg
            </span>
            <span class="font-bold text-lg border-gray-400 border-[1px] shadow-lg bg-gray-300 rounded-lg p-3">
              Rs 120.00
            </span>
          </span>

          <button class="bg-cyan-500 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded">
            Add to cart
          </button>
          <button class="bg-red-500 hover:bg-gray-500   text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
