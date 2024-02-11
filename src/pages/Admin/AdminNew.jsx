import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNew() {
  return (
    

<div className="relative  bg-cover w-screen h-screen  sm:rounded-lg bg-agri2  ">
<div className='absolute top-32 left-1/2 '>
  <span >asdasa</span>
</div>
    <table className="w-1/3 m-auto  mb-4  absolute top-1/3 left-1/3   border-[2px] border-gray-300  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs border-y-2 text-gray-700 uppercase dark:text-gray-400">
            <tr className='border-x-2 '>
                <th scope="col" className="px-4 py-3 bg-green-300  dark:bg-gray-800">
                    District
                </th>
                
                <th scope="col" className="px-4 bg-red-300 py-3 border-x-2 ">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200">
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap bg-transparent dark:text-white dark:bg-gray-800">
                    Apple MacBook Pro 17"
                </th>
                
                
                <td className="px-4 py-4  border-x-2 bg-gray-50">
                    $2999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Microsoft Surface Pro
                </th>
               
               
                <td className="px-4 py-4 border-x-2 bg-gray-50">
                    $1999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Magic Mouse 2
                </th>
               
                
                <td className="px-4 py-4 border-x-2 bg-gray-50">
                    $99
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Google Pixel Phone
                </th>
                
                
                <td className="px-4 py-4 border-x-2 bg-gray-50">
                    $799
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple Watch 5
                </th>
               
               
                <td className="px-4 py-4  border-x-2 bg-gray-50">
                    $999
                </td>
            </tr>
        </tbody>
    </table>
    <a
            href="/product"
            class=" w-32 rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Go back
          </a>
</div>

  )
}
