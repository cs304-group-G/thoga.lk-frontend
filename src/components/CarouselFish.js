import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function CarouselFish() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
  return (
    <div>
        <Slider {...settings}>
      <div className=' overflow-hidden px-4'>
        <img className='h-[20rem] object-cover w-full' src="https://media.istockphoto.com/id/1337430065/photo/closeup-japanese-style-salmon-grilled-with-salt-sold-by-local-supermarket-in-japan.jpg?s=2048x2048&w=is&k=20&c=BM8Pcg76th56RlVbS63mlM-gl1iUihcjo7daV8iyfUc=" alt="tomato" />
      </div>
      <div className=' overflow-hidden px-4'>
        <img className='h-[20rem] object-cover w-full' src="https://media.istockphoto.com/id/1137090208/photo/raw-salmon-steaks-with-spices-salt-and-lemon-on-the-background-of-old-stone.jpg?s=2048x2048&w=is&k=20&c=K5oLCV-FNk9T1MaWUhtrKT2oIkMj09OBVp066AEl8NM=" alt="carrot" />
      </div>
      <div className=' overflow-hidden px-4'>
        <img className='h-[20rem] object-cover w-full' src="https://media.istockphoto.com/id/1330878481/photo/fisherman-holding-freshly-caught-atlantic-bonito.jpg?s=2048x2048&w=is&k=20&c=li7p5iRljnwKVyy-m3KNtoaw9PuiwvuD6LfQ6reIR2g=" alt="leeks" />
      </div>
      <div className=' overflow-hidden px-4'>
        <img className='h-[20rem] object-cover w-full' src="https://media.istockphoto.com/id/89344878/photo/tuna-fish.jpg?s=2048x2048&w=is&k=20&c=NgwJX0ikwytHJSAZS0KOw3pLlVTv8B07coPsezm5gwU=" alt="onion" />
      </div>
      <div className=' overflow-hidden px-4'>
        <img className='h-[20rem] object-cover w-full' src="https://media.istockphoto.com/id/1139828886/photo/fresh-fish-in-the-market.jpg?s=2048x2048&w=is&k=20&c=i1xTlN2sL7eyl_q9r7CbVEa2dlHuuav-ZrvV9o-bZoY=" alt="" />
      </div>
      <div className=' overflow-hidden px-4'>
        <img className='h-[20rem] object-cover w-full' src="https://media.istockphoto.com/id/1213309753/photo/three-fresh-mackerel-on-a-wooden-board.jpg?s=2048x2048&w=is&k=20&c=A1dLnRlP6E0fNphilbQ9ENKqGtR9Y5cSe3L9Ai1r9lw=" alt="" />
      </div>
    </Slider>
      
    </div>
  )
}
