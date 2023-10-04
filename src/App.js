import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Loginpage from "./pages/auth/Loginpage";
import Registerpage from "./pages/auth/Registerpage";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route index element={<Homepage />} />
      <Route path="/product" element={<Productpage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
