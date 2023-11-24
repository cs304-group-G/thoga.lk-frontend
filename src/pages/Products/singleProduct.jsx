import React from 'react'

export default function singleProduct() {
  return (
    <div className="flex flex-row">
        
    <div class="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg mt-2  mb-3">
      <div class="relative">
        <img
          className="max-w items-center m-auto max-h-sm"
          src="https://images.unsplash.com/photo-1603117869492-9f217038e19a?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          
        />
       
      </div>
      <div className="p-4 ">
        <span class="text-2xl  font-bold text-center justify-center items-center text-red-800 mb-2">
          Carrot
        </span>
        <span className="flex flex-row space-x-3">
          <h3 className="text-lg font-medium text-gray-600 mb-2">District -</h3>
          <h3 className="text-lg font-medium text-green-600 mb-2">
            Galle
          </h3>{" "}
        </span>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dNameolor sit amet, consectetur adipiscing elit. Duis
          vitae ante vel eros fermentum faucibus sit amet euismod lorem.
        </p>
        <div className="flex items-center justify-between">
          <span className="space-x-1">
            <span className="text-md gap-2 border-[2px] p-3 rounded-md bg-gray-300 font-semibold  ">
            1 Kg - Rs 120.00
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
  </div>
  )
}
