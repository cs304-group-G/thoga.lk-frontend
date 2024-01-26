import React from "react";
import Navbar from "../components/Navbar";
import AddProductButton from "./Products/components/addProductButton";
import UpdateProductButton from "./Products/components/updateProductButton";
import Productpage from "./Productpage";


const Homepage = () => {
  return (
    <>
      <Navbar />
      
      <Productpage/>
    </>
  );
};

export default Homepage;
