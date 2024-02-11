import React from 'react'

export default function viewProduct() {
  return (
    <section className="bg-agri1 bg-cover ">
  <div className="mx-auto max-w-screen-xl  px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className=" max-w-xl text-center mx-auto">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
       Rooted in Trust
        <strong className="font-extrabold text-red-700 sm:block"> Direct from FARM to YOU </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed font-bold">
        We gurantee you that there are no intermediary party..Just You and the customer only
      </p>
    <p className='text-blue-900 font-bold  text-2xl '> 
      Explore our products 
    </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/vegetables"
        >
          Vegetables
        </a>

        <a
          className="block w-full rounded px-12 py-3 bg-red-600 text-sm font-medium text-white shadow hover:bg-gray-700  focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="fruits"
        >
          Fruits
        </a>
      </div>
    </div>
  </div>
</section>
  )
}
