import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";

import BASE_URL from "../../config/apiConfig.js";

const ForgetPassword = () => {
  const [email, setemail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [tempPassword, settempPassword] = useState("");
  const [requested, setRequested] = useState(false);

  const requestReset = async () => {
    const config = {
      method: "post",
      url: `${BASE_URL}auth/forget-password-request`,
      data: {
        email: email,
      },
    };

    await axios(config)
      .then((res) => {
        console.log(res.data);
        setRequested(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetpassword = async () => {
    const config = {
      method: "post",
      url: `${BASE_URL}auth/forget-password-reset`,
      data: {
        tempPassword: tempPassword,
        email: email,
        newPassword: newPassword,
      },
    };

    await axios(config)
      .then((res) => {
        console.log(res.data);
        setRequested(true);
      })
      .catch((err) => {
        console.log(err);
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
      <div className="flex justify-center pt-10">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>Enter your email for request a password reset</div>
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
                    disabled={requested}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <Disclosure>
                  {({ open }) => (
                    <>
                      {!open && (
                        <Disclosure.Button
                          onClick={() => requestReset()}
                          className="flex w-full rounded-lg bg-purple px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 justify-center"
                        >
                          <span>Find</span>
                        </Disclosure.Button>
                      )}

                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Tempeary Password
                            </label>
                          </div>
                          <div className="mt-2">
                            <input
                              id="tempPassword"
                              name="tempPassword"
                              type="password"
                              value={tempPassword}
                              onChange={(e) => settempPassword(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Tempeary Password
                            </label>
                          </div>
                          <div className="mt-2">
                            <input
                              id="newPassword"
                              name="newPassword"
                              type="password"
                              value={newPassword}
                              onChange={(e) => setnewPassword(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            className="flex w-full justify-center rounded-md bg-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => {
                              resetpassword();

                              alert("button clicked");
                            }}
                          >
                            Sign in
                          </button>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Register Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
