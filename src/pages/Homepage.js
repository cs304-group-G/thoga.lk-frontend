// import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Carauselvegi from "../components/Carauselvegi";
import CarouselFruits from "../components/CarouselFruits";
import CarouselFish from "../components/CarouselFish";
import Footer from "../components/Footer";
import FNavbar from "../components/FNavbar";
import { Chat } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <FNavbar />
      {/* <Navbar /> */}

      <Carousel />

      <div className="bg-[#e5eef1] pt-[4rem] pb-[10rem] ">
        <div className="grid grid-cols-1 sm:grid-cols-10">
          <div></div>
          <div className="col-span-8">
            <h1 className=" pb-[2rem] text-4xl font-semibold ">Vegitables</h1>
          </div>
        </div>
        <Carauselvegi />

        <div className="grid grid-cols-1 sm:grid-cols-10">
          <div></div>
          <div className="col-span-8">
            <h1 className=" pb-[2rem] text-4xl font-semibold pl-10 pt-10">
              Fruits
            </h1>
          </div>
        </div>
        <CarouselFruits />

        <div className="grid grid-cols-1 sm:grid-cols-10">
          <div></div>
          <div className="col-span-8">
            <h1 className=" pb-[2rem] text-4xl font-semibold pl-10 pt-10">
              Fish
            </h1>
          </div>
        </div>
        <CarouselFish />
      </div>
      {/* <div className="fixed top-[30rem] left-[108rem] right-0">
        <button className="bg-[#ff0000] py-[1rem] px-[2rem] font-semibold text-white text-2xl">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </button>
      </div> */}

      <Link
        to="/Chat"
       
      >
        <div  className="bg-[#ff0000] py-[1rem] px-[2rem] font-semibold text-white text-2xl fixed top-[30rem] left-[108rem] right-0">
        <Chat />
        </div>
      </Link>
      <Footer />

      {/* <div className="grid grid-col-2 ">
        <div >
          <div>
            <img className="pt-[15rem] pl-[20rem] pb-[10rem]" src="https://th.bing.com/th/id/OIP.ebzeZPLS9YpaIHuJPV392gAAAA?pid=ImgDet&w=446&h=800&rs=1" alt="sri lanka map" />
          </div>
        </div>
        <div className=" pt-[20rem]">
        <div data-aos="fade-up"><span className="text-[#00ae74] text-5xl font-semibold">Welcome to <span className="text-[#ff1b1b]">THOGA.</span><span className="text-[#211b1d]">LK</span></span></div>
        <div data-aos="fade-up"><p className="text-1xl pt-[2rem] font-semibold">Thoga.lk, the ultimate online marketplace, is home to both extraordinary sellers <br /> and discerning buyers.</p></div>
        <div data-aos="fade-up"><div className="pt-10 ">
        <div data-aos="fade-up "><p>On the flip side, our buyers are equally remarkable. They are savvy individuals who know precisely <br /> what they want, seeking out the best deals and unique finds on Thoga.lk. With a discerning eye <br /> for quality and a passion for great value, our buyers are at the forefront of finding hidden gems, making <br /> Thoga.lk the go-to destination for both sellers and buyers in the world of online shopping. Join our <br /> vibrant community today, and experience the perfect synergy between attractive sellers and astute buyers <br /> on Thoga.lk.</p></div>
        </div></div>
        
        
          
        </div>
        

      </div> 
     */}
    </>
  );
};

export default Homepage;
