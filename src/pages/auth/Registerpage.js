import Cookies from "js-cookie";
import axios from "axios";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import BASE_URL from "../../config/apiConfig.js";

const RegisterPage = () => {
  const userRoles = [
    { name: "Select user type", value: "USER" },
    { name: "Buyer", value: "USER" },
    { name: "Seller", value: "SELLER" },
  ];

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setMessage] = useState(null);
  const [userType, setUserType] = useState(userRoles[0]);
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async (e) => {
    e.preventDefault();

    const config = {
      method: "post",
      url: `${BASE_URL}auth/register`,
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: mobile,
        role: userType.value,
      },
    };

    await axios(config)
      .then((res) => {
        console.log(res.data);
        // if (res.data.isVerified == false) {
        //   if (res.data.token) {
        //     localStorage.setItem(
        //       "au_user_role",
        //       JSON.stringify(res.data.token)
        //     );
        //     localStorage.setItem("userRole", JSON.stringify(res.data.role));
            window.location.href = "/auth/login";
        //   } else {
        //     setMessage(res.data.message);
        //   }
        // } else {
        //   if (res.data.token) {
        //     Cookies.set("au_thogalk", res.data.token, {
        //       path: "/",
        //       maxAge: 60 * 60 * 24,
        //     });
        //     localStorage.setItem("userRole", JSON.stringify(res.data.role));
        //     window.location.href = "/";
        //   } else {
        //     setMessage(res.data.message);
        //   }
        // }
      })
      .catch((err) => {
        console.log(err);
        alert("login failed, try again");
        window.location.reload();
      });
  };

  return (
    <>
      <div className="p-5 grid grid-cols-2 bg-primary-red text-white">
        <div className="p-5 w-full text-center justify-center">
          <p className="text-2xl">
            Thoga.lk My Account <br /> WELCOME,
          </p>
        </div>
        <div className="p-5 w-full text-center justify-center">
          <p className="text-2xl">Checkout Thoga.lk Socials</p>
        </div>
      </div>
      <div className="flex justify-center py-3">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Firstname
                </label>
                <div className="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={firstname}
                    onChange={(e) => {
                      setfirstname(e.target.value);
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Lastname
                </label>
                <div className="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={lastname}
                    onChange={(e) => {
                      setlastname(e.target.value);
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobile No
                </label>
                <div className="mt-2">
                  <input
                    id="mobile"
                    name="mobile"
                    type="text"
                    value={mobile}
                    onChange={(e) => {
                      setmobile(e.target.value);
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    User Type
                  </label>
                </div>
                <div className="mt-2">
                  <Listbox value={userType} onChange={setUserType}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{userType.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                          {userRoles.map((person, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={person}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>

              <div>
                <button
                  className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={(e) => {
                    register(e);
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
