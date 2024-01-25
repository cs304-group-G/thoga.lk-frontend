import React from "react";

export default function Footer() {
  return (
    <div className=" grid grid-cols-1    xl:grid-cols-1  bg-[#343434]">
      <div className="grid grid-cols-1    xl:grid-cols-6 ">
        <div className=" bg-[#343434]"></div>
        <div className="">
          <div className="bg-[#343434]">
            <div className="pt-[6rem] pr-[2rem]">
              <span className="text-[#ff1b1b] font-bold  text-6xl ">
                THOGA.<span className="text-[#000000] font-bold">LK</span>{" "}
              </span>
            </div>
          </div>
          <div className="bg-[#343434] text-white pt-10">
            <p>
              This website promotes efficient and sustainable commerce by
              enabling direct communication between sellers and buyers. By
              facilitating direct contact, it streamlines the transaction
              process and significantly reduces food waste, making it an
              eco-friendly and convenient platform for both buyers and sellers.{" "}
            </p>
          </div>
        </div>
        <div className=" bg-[#343434] ">
          <div className=""></div>
        </div>
        <div className=" bg-[#343434]">
          <p className="text-white font-bold pt-28 pl-5 ">QUICK LINKS</p>
          <hr className="w-28 border-2 " />
          <div className="text-white pt-10 pl-5 leading-loose">
            <p>Home</p>
            <p>About Us</p>
            <p>Courses</p>
            <p>Branchers</p>
            <p>Careers</p>
            <p>News & Events</p>
            <p>Contact Us</p>
            
          </div>
        </div>
        <div className=" bg-[#343434]">
          <p className="text-white font-bold pt-28 pl-5 ">QUICK LINKS</p>
          <hr className="w-28 border-2 " />
          <div className="text-white pt-10 pl-5 leading-loose">
            <p>University of peradeniya, Kandy</p>
            <p>+94716172988</p>
            <p>+94771999721</p>
            {/* <p>info@slithm.edu.lk</p> */}
            <div className="flex pt-10 gap-4 ">
              <img
                className="w-[2rem] "
                src="https://th.bing.com/th/id/OIP.luVQRwEED51xpMYyFrpnVgHaHa?pid=ImgDet&w=180&h=180&c=7"
                alt=""
              />
              <img
                className="w-[2rem] h-[2rem] "
                src="https://th.bing.com/th/id/OIP.jPmHyBfNRs_TTPat6HyprQHaHa?pid=ImgDet&w=180&h=180&c=7"
                alt=""
              />
              <img
                className="w-[2rem] h-[2rem] "
                src="https://th.bing.com/th/id/OIP.JqsxUn88p4sZmAsrGbOC_gHaHa?pid=ImgDet&w=180&h=180&c=7"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#343434]"></div>
      </div>
      <br />
      <hr className="pt-10 " />
      <p className="text-white text-center pb-10">
        Copyright c 2023-THOGA.LK-All Rights Reserved. Concept, Design &
        Development by{" "}
        <a className="text-black" href="https://www.weblankan.com/">
          {" "}
          .......
        </a>
      </p>
    </div>
  );
}
