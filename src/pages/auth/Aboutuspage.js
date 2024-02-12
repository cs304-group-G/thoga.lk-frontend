import React from "react";
import FNavbar from "../../components/FNavbar";
import Footer from "../../components/Footer";

export default function Aboutuspage() {
  return (
    <div className="bg-[#5136a5] h-[100vh]">
      <FNavbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-[5rem]">
        <div className="">
          <h1 className="text-white text-center text-[4rem] font-bold">
            Vision
          </h1>
          <p className="text-white  text-[2rem] pt-[4rem] text-justify px-[6rem]">
            To cultivate a thriving agricultural community by providing a
            seamless online platform that empowers farmers, connects consumers
            with quality produce, and fosters sustainable practices for a
            greener future.
          </p>
        </div>
        <div className="">
          <h1 className="text-white text-center text-[4rem] font-bold">
            Mission
          </h1>
          <p className="text-white  text-[2rem] pt-[4rem] text-justify px-[6rem]">
            Empowering farmers through technology, our mission is to create a
            vibrant online marketplace that enables easy access to agricultural
            products. We are committed to promoting sustainable farming
            practices, fostering fair trade, and delivering fresh, high-quality
            produce to our customers. By leveraging innovation, we aim to bridge
            the gap between farmers and consumers, ensuring a robust and
            sustainable agricultural ecosystem.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
