import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./pages/auth/Loginpage";
import Registerpage from "./pages/auth/Registerpage";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/auth/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/auth/login",
    element: <Loginpage />,
  },
  {
    path: "/auth/register",
    element: <Registerpage />,
  },
  {
    path: "/auth/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/products",
    element: <Productpage />,
  },
  {
    path: "/user/Profile",
    element: <Profile />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/signin" element={<Loginpage />} />
//       <Route path="/register" element={<Registerpage />} />
//       <Route index element={<Homepage />} />
//       <Route path="/product" element={<Productpage />} />
//     </>
//   )
// );

export default App;
