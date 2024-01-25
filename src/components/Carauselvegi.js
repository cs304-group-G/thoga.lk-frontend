import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@material-tailwind/react";

export default function Carauselitems() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1000,
    // cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-10">
      <div className=" "></div>
      <div className="  col-span-8 ">
        <Slider {...settings}>
          <div className=" overflow-hidden px-4">
            <img
              className="h-[20rem] object-cover w-full   "
              src="https://media.istockphoto.com/id/1450576005/photo/tomato-isolated-tomato-on-white-background-perfect-retouched-tomatoe-side-view-with-clipping.jpg?s=2048x2048&w=is&k=20&c=Qkb7A2KelBAmO68thBItajNc2AFnbXEOBLZvV4kHq98="
              alt="tomato"
            />
            <Rating />
          </div>
          <div className="overflow-hidden px-4">
            <img
              className="h-[20rem] object-cover w-full "
              src="https://media.istockphoto.com/id/1436652705/photo/dirty-hands-clean-soul.jpg?s=2048x2048&w=is&k=20&c=wlc95FGd-L0CajLMJr9Y2u1-xenzLtfi7c66g2UpNyo="
              alt="carrot"
            />
          </div>
          <div className="overflow-hidden px-4">
            <img
              className="h-[20rem] object-cover w-full"
              src="https://media.istockphoto.com/id/1255225875/photo/leek-harvest.jpg?s=2048x2048&w=is&k=20&c=cQnSpWpaoFU0lz74M-lTJS8HIGbY36cU9CUGx2gE9yY="
              alt="leeks"
            />
          </div>
          <div className="overflow-hidden px-4">
            <img
              className="h-[20rem] object-cover w-full"
              src="https://media.istockphoto.com/id/892022394/photo/row-of-onions.jpg?s=2048x2048&w=is&k=20&c=sSzGzL34X9zSQMmcUMLsIU61Y6vrDJ59_iyjfRjPc-U="
              alt="onion"
            />
          </div>
          <div className="overflow-hidden px-4">
            <img
              className="h-[20rem] object-cover w-full"
              src="https://media.istockphoto.com/id/1318478175/photo/vegan-raw-vegetables-on-green-wooden-table-background.jpg?s=2048x2048&w=is&k=20&c=07xwmZkg-aMfaVOE0hXyqjjz2wMF3XOuOlo0ERR9Pd4="
              alt=""
            />
          </div>
          <div className="overflow-hidden px-4">
            <img
              className="h-[20rem] object-cover w-full"
              src="https://media.istockphoto.com/id/1334636811/photo/green-table-filled-with-green-vegetables.jpg?s=2048x2048&w=is&k=20&c=udKDUadGJ1tnpYqzytV8UtZMqvIHjhXtSuxT_WkBw34="
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className=""></div>

      
    </div>
  );
}
