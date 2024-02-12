import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./pages/auth/Loginpage";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Profile from "./pages/Profile";
import Aboutuspage from "./pages/auth/Aboutuspage";
import Registerpage from "./pages/auth/Registerpage";
import ChatPage from "./pages/Chatpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/Loginpage",
    element: <Loginpage />,
  },

  {
    path: "/Registerpage",
    element: <Registerpage />,
  },

  {
    path: "/Productpage",
    element: <Productpage />,
  },
  {
    path: "/Aboutuspage",
    element: <Aboutuspage />,
  },

  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Chat",
    element: <ChatPage />,
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
