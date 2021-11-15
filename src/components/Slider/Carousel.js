import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SingleSlider from "./SingleSlider";
import blogImg from '../../img/blog-list-01.jpg'
import blogImg2 from '../../img/blog-list-02.jpg'
import blogImg3 from '../../img/blog-list-03.jpg'
/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
    return (
        <div className='bg-gray-100'>
        <div className='text-center pt-10 my-10 '>
        <h1 className='md:text-4xl text-2xl  sm:text-3xl font-bold '>OUR BLOGS</h1>
        <p className='text-gray-700 mt-2'>- LATEST NEWS -</p>
    </div>
        <div className="2xl:mx-auto 2xl:container flex justify-center">
            
            <div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider>
                        
                            
                           
                        <SingleSlider img={blogImg}></SingleSlider>
                        <SingleSlider img={blogImg2}></SingleSlider>
                        <SingleSlider img={blogImg3}></SingleSlider>
                        <SingleSlider img={blogImg}></SingleSlider>
                        <SingleSlider img={blogImg2}></SingleSlider>
                           
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge">
                           
                            
                            
                        <SingleSlider img={blogImg}></SingleSlider>
                        <SingleSlider img={blogImg2}></SingleSlider>
                        <SingleSlider img={blogImg3}></SingleSlider>
                        <SingleSlider img={blogImg}></SingleSlider>
                        <SingleSlider img={blogImg2}></SingleSlider>
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>

            <style>
                {`
                    .gallery-cell {
                        height: 40px;
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
        </div>
    );
}

// const SliderContent=({index})=>{
//     return(
//         <Slide className="carousel__inner-slideLarge " index={3}>
                           
//                             <div className="relative flex flex-col mx-4">
//                             <img src="https://i.ibb.co/b50f24j/carosel-1.png" alt="two girls" className="w-full" />
//                             <img src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png" alt="opacity bg" className="absolute w-full top-0" />
//                             <div className="absolute m-6 bottom-0 z-30">
//                                 <p className="text-sm leading-none text-white">Special collection</p>
//                                 <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">New Monochrome Collection</h1>
//                                 <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">Discover</p>
//                             </div>
//                         </div>
//                             </Slide>
//     )
// }