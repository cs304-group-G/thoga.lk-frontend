import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./pages/auth/Loginpage";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Vegetables from "./pages/Products/sample/Vegetables";
import Fruits from "./pages/Products/sample/Fruits";
import Items from "./pages/Products/sample/Items";
import AddProduct from "./pages/Products/Product_CRUD/addProduct";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/profile";
import UserProfile from "./pages/Profile";
import SingleProduct from "./pages/Products/singleProduct";
import AdminNew from "./pages/Admin/AdminNew";
// import Profile from "./pages/Profile";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Aboutuspage from "./pages/auth/Aboutuspage";
import Registerpage from "./pages/auth/Registerpage";
import ChatPage from "./pages/Chatpage";
import FullProduct from "./pages/Products/FullProduct";

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
    path: "/aboutuspage",
    element: <Aboutuspage />,
  },

  {
    path: "/product/Profile",
    element: <Profile />,
  },
  {
    path: "/product/vegitables",
    element: <Vegetables />,
  },
  {
    path: "/product/fruits",
    element: <Fruits />,
  },
  {
    path: "/product/addProduct",
    element: <AddProduct />,
  },
  {
    path: "/product/single",
    element: <SingleProduct />,
  },
  {
    path: "/user/adminD",
    element: <Admin />,
  },
  {
    path: "/user/adminNew",
    element: <AdminNew />,
  },
  {
    path: "/user/profile",
    element: <UserProfile />,
  },
  {
    path: "/admin",
    element: <AdminNew />,
  },
  {
    path: "/Chat",
    element: <ChatPage />,
  },
  { path: "/product/:id", element: <FullProduct /> },
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
