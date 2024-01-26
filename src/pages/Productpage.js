import React from "react";
import CommentsContainer from "../components/comments/CommentsContainer";
import DashBoard from "./Products/components/dashBoard";
import SingleProduct from "./Products/singleProduct";
import Vegetables from "./Products/sample/Vegetables";
import ViewProduct from "./Products/sample/viewProduct";

const Productpage = () => {
  return (
    <>
      <h1>HEADER</h1>
      <div className="flex bg-agri1 bg-cover gap-2 ">
        <DashBoard  />
        <div className="flex  justify-between">
          <div className="flex flex-col">
            <div className="text-2xl flex-row font-mono  ">
              Buy and sell everything from the fresh farms. Find a great deal
              near you,
              <h1 className="text-3xl font-bold text-green-500 font-sans">
                Near your district,city...anywhere in{" "}
              </h1>
              or search all over
              <h1 className="text-5xl text-orange-600 font-bold font-serif">
                Sri Lanka
              </h1>
              
            </div>
            <div className="">
              <ViewProduct/>
              
            </div>
            
          </div>
        </div>
        {/* Map Items with the database and ad it as the single products */}
      </div>
      
    </>
  );
};

export default Productpage;
