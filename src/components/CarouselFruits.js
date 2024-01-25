import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function CarouselFruits() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "linear",
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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-10">
        <div className=" "></div>
        <div className=" col-span-8">
          <Slider {...settings}>
            <div className=" overflow-hidden px-4">
              <img
                className="h-[20rem] object-cover w-full"
                src="https://media.istockphoto.com/id/1395535082/photo/tropical-fruit-concept.jpg?s=2048x2048&w=is&k=20&c=jZF-YGTczCiHZ_KVn0ajrIKAmwt3EsmrM-1jR9Ow6b8="
                alt="tomato"
              />
            </div>
            <div className=" overflow-hidden px-4">
              <img
                className="h-[20rem] object-cover w-full"
                src="https://media.istockphoto.com/id/531900437/photo/fresh-fruits.jpg?s=2048x2048&w=is&k=20&c=B2TXOKZZIlGXYD_YFDQe2cXb1Qv8uMgKYK37ms_yOOw="
                alt="carrot"
              />
            </div>
            <div className=" overflow-hidden px-4">
              <img
                className="h-[20rem] object-cover w-full"
                src="https://media.istockphoto.com/id/1359819435/photo/halves-of-fresh-avocado-on-a-cutting-board.jpg?s=2048x2048&w=is&k=20&c=uR8ItYyCfIwcvfTwma5gqHcoif28H-bNn5xiZDLeuWo="
                alt="leeks"
              />
            </div>
            <div className=" overflow-hidden px-4">
              <img
                className="h-[20rem] object-cover w-full"
                src="https://media.istockphoto.com/id/175390068/photo/banana-wallpaper.jpg?s=2048x2048&w=is&k=20&c=STUK2T1dv3dzac2bLTylBabfNGYZVTXRzT-9Cml6LFQ="
                alt="onion"
              />
            </div>
            <div className=" overflow-hidden px-4">
              <img
                className="h-[20rem] object-cover w-full"
                src="https://media.istockphoto.com/id/172388455/photo/pineapple-wallpaper.jpg?s=2048x2048&w=is&k=20&c=s1o-0lxriwaP8nsdxKk6YgxbVqDpkyEtHatgqgfnHHk="
                alt=""
              />
            </div>
            <div className=" overflow-hidden px-4">
              <img
                className="h-[20rem] object-cover w-full"
                src="https://media.istockphoto.com/id/1386001264/photo/many-big-sweet-green-watermelons.jpg?s=2048x2048&w=is&k=20&c=JqyYpsK7J8eA0r-h_yxuZH8IP11GoEmTVmW6FexoN8A="
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
