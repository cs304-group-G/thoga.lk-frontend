import React from 'react'

export default function ProductHome() {
  return (
    <section
    class="relative bg-[url(https://images.unsplash.com/photo-1603380381196-148729a0c8e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="absolute inset-0 bg-white/25 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
        Harvest Your Future
  
          <strong class="block font-extrabold text-rose-700"> Grow Your Legacy </strong>
        </h1>
  
        <p class="mt-4 max-w-lg sm:text-xl/relaxed">
        Buy and sell everything from the fresh farms. Find a great deal
              near you,your district 
        </p>
  
        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="/product"
            class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            View Products
          </a>
  
          <a
            href="/about"
            class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
