import React from "react";
import Navbar from "../components/Navbar";
import CommentsContainer from "../components/comments/CommentsContainer";

const Productpage = () => {
  
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 container ">
        <div className="flex justify-center">
          <img
            className="w-[60%] pt-[2.5rem] "
            src="https://plus.unsplash.com/premium_photo-1678344170545-c3edef92a16e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
        </div>
        <div className="pt-[2.5rem] flex flex-col ">
          <h2>Vegitable</h2>
          <p>destription</p>
          <span>Rs .500.00 per 1kg </span>
          <h3>Gampaha</h3>
          <p>chat</p>
          <p>contact seller</p>
          <p>see other item seller</p>
        </div>
        <div></div>
      </div>
      
      
      <CommentsContainer className="mt-10" logginedUserId="a"/>
    </>
  );
};

export default Productpage;


