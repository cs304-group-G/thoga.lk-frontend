import React from "react";
import CommentsContainer from "../components/comments/CommentsContainer";
import DashBoard from "./Products/components/dashBoard";
import SingleProduct from "./Products/singleProduct";

const Productpage = () => {
  return (
    <>
    <h1>HEADER</h1>
      <div className="flex flex-row gap-2 ">
        <DashBoard/>
        {/* Map Items with the database and ad it as the single products */}
        <SingleProduct />
      </div>
      <CommentsContainer className="mt-10" logginedUserId="a" />
    </>
  );
};

export default Productpage;
