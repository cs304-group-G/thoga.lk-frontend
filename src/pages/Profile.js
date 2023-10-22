import React from "react";
import Navbar from "../components/Navbar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 grid-flow-col gap-4 pt-[5rem]">
        <div className="border-r-4 border-indigo-500 w-full">
          <h1 className="text-5xl font-semibold text-center pt-[10rem]">
            Profile
          </h1>
          <div className="w-full  flex justify-center">
            <div className="w-1/4   overflow-hidden border border-solid border-2 rounded-full relative ">
              <img
                className="w-full object-cover "
                src="https://media.istockphoto.com/id/1738004363/vector/silhouette-of-a-woman-profile-of-a-young-lady-beautiful-head-of-a-girl-element-for-the.jpg?s=2048x2048&w=is&k=20&c=xHlgfDjkygK8lvSG8OyAT24pO--5aavWzW_sZNY5TGM="
                alt=""
              />

              <AddAPhotoIcon className="absolute right-5 bottom-5 " />
            </div>
          </div>
          <h1 className="font-semibold text-center text-3xl">Name</h1>
          <h1 className="font-semibold text-center text-2xl">Seller/buyer</h1>
        </div>

        <div className="w-full pt-[4rem]">
          {/* <div className=" w-full grid grid-cols-3 "> */}
          <div className="w-full px-[5rem]">
            <div className=" grid grid-cols-5 py-3 flex gap-4">
              <p className="block text-sm font-medium leading-6 text-gray-900 ">
                Name
              </p>
              <div className="mt-1 col-span-4">
                <p className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Jonathan linkan</p>
              </div>
            </div>
            <div className="grid grid-cols-5 py-3 flex gap-4 ">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                E-mail
              </label>
              <div className="mt-2 col-span-4">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 py-3 flex gap-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 pr-[7rem]"
              >
                City
              </label>
              <div className="mt-2 col-span-4">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 py-3 flex gap-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 pr-[4rem]"
              >
                Seller/Buyer
              </label>
              <div className="mt-2 col-span-4">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 py-3 flex gap-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 pr-[3rem]"
              >
                MobileNumber
              </label>
              <div className="mt-2 col-span-4">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
