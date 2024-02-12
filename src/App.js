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
import Vegetables from "./pages/Products/sample/Vegetables";
import Fruits from "./pages/Products/sample/Fruits";
import Items from "./pages/Products/sample/Items";
import AddProduct from "./pages/Products/Product_CRUD/addProduct";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Admin from "./pages/Admin/Admin";
import Profile from './pages/Profile/profile'
import SingleProduct from "./pages/Products/singleProduct";
import AdminNew from "./pages/Admin/AdminNew";
import FullProduct from './pages/Products/FullProduct'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<Loginpage />} />
      <Route path="/" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route path="/productHome" element={<Homepage />} />
      <Route path="/product" element={<Productpage />} />
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/items" element={<Items/>} />
      <Route path="/addProduct" element={<AddProduct/>} />
       <Route path="/adminD" element={<Admin/>} />
      <Route path="/profile" element={<Profile/>} />
      {/* <Route path= "/single" element={<SingleProduct/>} /> */}
      <Route path= "/admin" element={<AdminNew/>} />
      <Route path= "/single" element={<SingleProduct/>} />
      <Route path="/product/:id" element={<FullProduct/>}/>
      
   
  
  

    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
