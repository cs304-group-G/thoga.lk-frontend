// import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Carauselvegi from "../components/Carauselvegi";
import CarouselFruits from "../components/CarouselFruits";
import CarouselFish from "../components/CarouselFish";
import Footer from "../components/Footer";
import FNavbar from "../components/FNavbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <ProductHome/>
      {/* <Productpage/> */}
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
