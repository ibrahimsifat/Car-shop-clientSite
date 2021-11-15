import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Testimonial from "./Testimonial";
import Img1 from '../../img/avatar-1.jpg'
import Img2 from '../../img/avatar-2.jpg'
import Img3 from '../../img/avatar-3.jpg'
/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function TestimonialSlider() {
    return (
        <>
         <div className='my-16'>
                <h2 className="text-2xl leading-6 text-gray-800 text-center px-4">Testimonials</h2>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">What our client says</h1>
             
            </div>
        <div className="2xl:mx-auto 2xl:container flex justify-center">
            
            <div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                   
                        <Slider>
                        
                            
                           
                        <Testimonial img={Img1}></Testimonial>
                        <Testimonial img={Img2}></Testimonial>
                        <Testimonial img={Img3}></Testimonial>
                        <Testimonial img={Img1}></Testimonial>
                        <Testimonial img={Img2}></Testimonial>
                        <Testimonial img={Img3}></Testimonial>
                   
                        </Slider>
                      
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                   
                        <Slider className="carousel__sliderLarge">
                           
                            
                            
                        <Testimonial img={Img1}></Testimonial>
                        <Testimonial img={Img2}></Testimonial>
                        <Testimonial img={Img3}></Testimonial>
                        <Testimonial img={Img1}></Testimonial>
                        <Testimonial img={Img2}></Testimonial>
                        <Testimonial img={Img3}></Testimonial>
                        </Slider>
                       
                    </div>
                </CarouselProvider>
            </div>

            <style>
                {`
                    .gallery-cell {
                        height: 486px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
            </style>
        </div>
        </>
    );
}

const SliderContent=({index})=>{
    return(
        <Slide className="carousel__inner-slideLarge " index={3}>
                           
                            <div className="relative flex flex-col mx-4">
                            <img src="https://i.ibb.co/b50f24j/carosel-1.png" alt="two girls" className="w-full" />
                            <img src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png" alt="opacity bg" className="absolute w-full top-0" />
                            <div className="absolute m-6 bottom-0 z-30">
                                <p className="text-sm leading-none text-white">Special collection</p>
                                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">New Monochrome Collection</h1>
                                <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">Discover</p>
                            </div>
                        </div>
                            </Slide>
    )
}