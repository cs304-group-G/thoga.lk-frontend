import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";

import BASE_URL from "../../config/apiConfig.js";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const login = async (e) => {
    e.preventDefault();

    const config = {
      method: "POST",
      url: `${BASE_URL}auth/authenticate`,
      data: {
        email: email,
        password: password,
      },
    };

    await axios(config)
      .then((res) => {
        console.log(res.data);
        if (res.data.token && res.data.role) {
          Cookies.set("au_thogalk", res.data, {
            path: "/",
            maxAge: 60 * 60 * 24,
          });
          window.location.href = "/";
        } else {
          alert("error occured plese try again");
          window.reload();
        }
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
      <div className="flex justify-center pt-10">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
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
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  className="flex w-full justify-center rounded-md bg-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={(e) => {
                    login(e);
                  }}
                >
                  Sign in
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member? <Link to={"/auth/register"}>Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
