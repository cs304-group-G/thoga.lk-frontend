// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function HeroSection() {
  return (

    
    <Carousel
    autoPlay={true}
    interval={1000}
    showThumbs={false}
    infiniteLoop={true}
    
    >
                <div>
                    <img className="w-full h-[50rem] object-cover" src="https://media.istockphoto.com/id/1022892932/photo/hand-holding-light-bulb-against-nature-on-green-leaf-with-icons-energy-sources-for-renewable.jpg?s=2048x2048&w=is&k=20&c=YxVgtVqhIzcrAKy5_T5AkNxIUP7P0lu74qMMXC_tQog=" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className="w-full h-[50rem] object-cover" src="https://media.istockphoto.com/id/1174218573/photo/cannabinoids-in-marijuana-cbd-elements-pouring-hemp-oil-into-glass-jar-and-hemp-seeds-in-a.jpg?s=2048x2048&w=is&k=20&c=tbkVIlpjibU9KrCQLbB3VIB3X0wA4xDrEj9EoQ3N-nM=" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className="w-full h-[50rem] object-cover" src="https://media.istockphoto.com/id/1564974519/photo/natural-environment-and-carbon-neutral-concepts-in-hand-for-net-zero-emissions-targets.jpg?s=2048x2048&w=is&k=20&c=1whfz4eSJnHV0tHUYT8RFsNdM0ycGAyz4qeCULILk6A=" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}
