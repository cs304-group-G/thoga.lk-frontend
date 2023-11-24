import React from "react";
import CommentsContainer from "../components/comments/CommentsContainer";
import DashBoard from "./Products/components/dashBoard";
import SingleProduct from "./Products/singleProduct";
import SampleAllProducts from "./Products/sample/sampleAllProducts";

const Productpage = () => {
  return (
    <>
      <h1>HEADER</h1>
      <div className="flex  gap-2 ">
        <DashBoard />
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
              <h1 className="text-4xl uppercase font-bold text-center text-red-600">THOGA.LK</h1>
              
            </div>

            <div className="flex auto-cols-auto gap-2">
              <SampleAllProducts/>
            </div>
          </div>
        </div>
        {/* Map Items with the database and ad it as the single products */}
      </div>
      <CommentsContainer className="mt-10" logginedUserId="a" />
    </>
  );
};

export default Productpage;
