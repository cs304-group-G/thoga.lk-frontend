import React from "react";
import Navbar from "../components/Navbar";
import AddProductButton from "./Products/components/addProductButton";
import UpdateProductButton from "./Products/components/updateProductButton";
import Productpage from "./Productpage";
import ProductHome from "./Products/ProductHome";


const Homepage = () => {
  return (
    <>
      <Navbar />
      <ProductHome/>
      {/* <Productpage/> */}
    </>
  );
};

export default Homepage;
