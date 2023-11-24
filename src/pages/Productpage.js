import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CommentsContainer from "../components/comments/CommentsContainer";
import Product from "./Products/Product";
import SingleProduct from "./Products/singleProduct";
import AddProductButton from "./Products/components/addProductButton";
import UpdateProductButton from "./Products/components/updateProductButton";

const Productpage = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <Navbar />
      
      

      <div className="flex flex-row gap-2">
        <Product />
        <SingleProduct />
      </div>
      <CommentsContainer className="mt-10" logginedUserId="a" />
    </>
  );
};

export default Productpage;
