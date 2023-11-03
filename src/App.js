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
import Product from './pages/Products/Product';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route index element={<Homepage />} />
      <Route path="/product" element={<Productpage />} />
      <Route path="/product-home" element={<Product />} />

    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
