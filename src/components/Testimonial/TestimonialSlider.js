import React from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Testimonial } from "./Testimonial";
import Img1 from '../../img/blog-01.jpg'
import Img2 from '../../img/blog-02.jpg'
import Img3 from '../../img/blog-03.jpg'
import Img4 from '../../img/blog-04.jpg'
import Img5 from '../../img/blog-05.jpg'
import Img6 from '../../img/blog-06.jpg'


/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function TestimonialSlider() {
    return (
        <>
         <div className='my-16'>
                <h2 className="text-2xl leading-6 text-gray-800 text-center px-4">Blog</h2>
                <h1 className=" lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">Our Latest Blogs</h1>
             
            </div>
        <div className="2xl:mx-auto 2xl:container flex justify-center">
            
            <div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                   
                        <Slider>
                        
                            
                           
                             
                        <Testimonial img={Img1} title='Automakers with the highest customer satisfaction rankings' des='The American Customer Satisfaction Index reports that overall satisfaction scores for automakers stayed constant between 2020 and 2021. That good news, but a look at the past five years suggests that customer satisfaction in' ></Testimonial>
                        <Testimonial img={Img2} title='back to body-on-frame' des='Rumors outlining what the future holds for the Dodge Durango are rampant. While some claim that the SUV is headed towards extinction, an unverified report suggests it will return for a fourth generation as a body-on-frame model aimed directly at the Chevrolet Tahoe.' ></Testimonial>
                        <Testimonial img={Img3} title='McLaren partnership' des='HAMBURG — Audi supervisory board will discuss on Wednesday ways for the company to enter Formula One, including via possible partnership with McLaren Automotive, two sources told Reuters on Tuesday, adding no decision has yet been made.' ></Testimonial>
                        <Testimonial img={Img4} title='suppliers to reduce carbon' des='TOKYO — Honda Motor has asked its main parts suppliers to reduce carbon emissions annually by 4% versus 2019 levels, the Nikkei daily reported on Tuesday.The Japanese carmaker aims to start implementing the targets in fiscal 2025, which begins in April 2025, the report said.' ></Testimonial>
                        <Testimonial img={Img5} title='the gas-powered X5 M50i' des='The BMW iX era has officially begun, the electric crossover configurator going live with prices. The bidding starts at $83,200 before a $995 destination fee, for a total of $84,195 before options. That sum buys a dual-motor, all-wheel drive family carriage with 516 horsepower and 564 pound-feet of torque,' ></Testimonial>
                        <Testimonial  img={Img6} title='going to be legal in the U.S.'des='Listen up, America. Adaptive driving beams are finally going to become legal, thanks to a provision in the infrastructure bill. This is great news for nighttime driving safety — your author is particularly excited that this technology will finally be legal in cars sold in the U.S.' ></Testimonial>
                   
                        </Slider>
                      
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                   
                        <Slider className="carousel__sliderLarge">
                           
                            
                              
                        <Testimonial img={Img1} title='Automakers ' des='The American Customer Satisfaction Index reports that overall satisfaction scores for automakers stayed constant between 2020 and 2021. That good news, but a look at the past five years suggests that customer satisfaction in' ></Testimonial>
                        <Testimonial img={Img2} title='back on-frame' des='Rumors outlining what the future holds for the Dodge Durango are rampant. While some claim that the SUV is headed towards extinction, an unverified report suggests it will return for a fourth generation as a body-on-frame model aimed directly at the Chevrolet Tahoe.' ></Testimonial>
                        <Testimonial img={Img3} title='McLaren partnership' des='HAMBURG — Audi supervisory board will discuss on Wednesday ways for the company to enter Formula One, including via possible partnership with McLaren Automotive, two sources told Reuters on Tuesday, adding no decision has yet been made.' ></Testimonial>
                        <Testimonial img={Img4} title='suppliers reduce ' des='TOKYO — Honda Motor has asked its main parts suppliers to reduce carbon emissions annually by 4% versus 2019 levels, the Nikkei daily reported on Tuesday.The Japanese carmaker aims to start implementing the targets in fiscal 2025, which begins in April 2025, the report said.' ></Testimonial>
                        <Testimonial img={Img5} title='Gas- X5 M50i' des='The BMW iX era has officially begun, the electric crossover configurator going live with prices. The bidding starts at $83,200 before a $995 destination fee, for a total of $84,195 before options. That sum buys a dual-motor, all-wheel drive family carriage with 516 horsepower and 564 pound-feet of torque,' ></Testimonial>
                        <Testimonial  img={Img6} title='Legal in the U.S.'des='Listen up, America. Adaptive driving beams are finally going to become legal, thanks to a provision in the infrastructure bill. This is great news for nighttime driving safety — your author is particularly excited that this technology will finally be legal in cars sold in the U.S.' ></Testimonial>
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

