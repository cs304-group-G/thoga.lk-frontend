import React from "react";
import CommentsContainer from "../components/comments/CommentsContainer";
import DashBoard from "./Products/components/dashBoard";
import SingleProduct from "./Products/singleProduct";
import Vegetables from "./Products/sample/Vegetables";
import ViewProduct from "./Products/sample/viewProduct";
import FNavbar from "../components/FNavbar";

const Productpage = () => {
  return (
    <>
      <FNavbar />
      {/* <ViewProduct /> */}
      <div className="grid grid-cols-2 container ">
        <div className="flex justify-center ">
          <img
            className="w-[60%] pt-[2.5em] pb-[2.5em] 5rrounded max-h-64 max-w-min"
            src="https://plus.unsplash.com/premium_photo-1678344170545-c3edef92a16e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
        </div>
        <div className="pt-[2.5rem] flex flex-col font-sans text-lime-400">
          <h2 className="font-bold">Vegitable </h2>
          <p>destription</p>
          <span className="text-yellow-300">Rs .500.00 per 1kg </span>
          <h3>Gampaha</h3>
          <p>chat</p>
          <p>contact seller</p>
          <p>see other item seller</p>
        </div>
      </div>

      <CommentsContainer logginedUserId="a" />
    </>
  );
};

export default Productpage;
