import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="grid grid-cols-1    lg:grid-cols-3  ">
      <div className="flex pt-5">
        <span className="text-[#ff1b1b] font-bold pl-36 text-7xl">
          THOGA.<span className="text-[#000000] font-bold">LK</span>{" "}
        </span>
      </div>
      <div className="pr-20 pt-4 ">
        <div className=" flex pt-5">
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-36 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
          {/* <button className="pl-5 pr-96  border border  font-semibold text-xl">search</button>
          <button><img className=" w-10 h-10"  src="https://th.bing.com/th/id/OIP.aFp8-5xumaLV3ZoLtguwsAHaHa?pid=ImgDet&w=300&h=300&rs=1" alt="" /></button> */}
        </div>
      </div>
      <div className="grid grid-rows-2  pl-4 pt-1">
        <div className="flex ">
          <button className=" font-semibold bg-transparent hover:bg-[#f1f2f3] text-blue-700   py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            LOGIN
          </button>
          <button className="font-semibold pl-10">About Us</button>
          <button className="pl-20">
            <img
              className="w-10 h-10 "
              src="https://th.bing.com/th/id/OIP.eB7p67UQDYI29usbLTm7vAHaHa?pid=ImgDet&w=180&h=180&c=7"
              alt=""
            />
          </button>
          <button className="pl-10">
            <img
              className="w-10 h-10 "
              src="https://th.bing.com/th/id/OIP.5CyHvc_J7Sn61yZldilWMgHaHx?pid=ImgDet&w=180&h=180&c=7"
              alt=""
            />
          </button>
        </div>
        <div className="flex pt-0 pl-0">
          {/* thoga.lk drop down */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="pt-3 inline-flex w-full justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900   ring-inset ring-gray-300 hover:bg-gray-50">
                THOGA.LK CATEGORIES
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Vegitables
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Fruits
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Fish
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Rice
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* <button className="py-2 px-4  font-semibold ">THOGA.LK CATEGORIES</button> */}
          {/* Language drop down */}

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="pt-3 inline-flex w-full justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900   ring-inset ring-gray-300 hover:bg-gray-50">
                Language
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames2(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Sinhala
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames2(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        English
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* <button className=" font-semibold pl-5">Language</button> */}
          <button className="font-semibold pl-12">Home</button>
        </div>
      </div>
    </div>
  );
}
