
import { faChevronRight, faCube, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import Img from '../../img/portpoliobg.jpg'


const pincilICon=<FontAwesomeIcon size='2x' icon={faPencilRuler}/>
const cubeICon=<FontAwesomeIcon size='2x' icon={faCube}/>
const right=<FontAwesomeIcon  icon={faChevronRight}/>

function HomeAbout() {
    return (
        <>
            <div className="md:mx-auto md:container px-4">
                
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color">
                                <h1 className='text-purple-800 text-xl'>About Us</h1>
           
                                    <h1 className="text-2xl md:text-4xl lg:text-5xl mt-3 md:leading-snug font-bold">Professional Car Sales</h1>
                                    <h2 className="text-lg lg:text-xl leading-7 md:leading-10 f-f-r pt-4 pb-8">We take care of all paperwork. Book for a Free Inspection in K.S.A now. We Buy Any Car in Any Condition. Free & Instant Car Valuation. Instant Cash Payment. We buy any car in 30 mins. Any Brand, Car, Condition. Free Online Car Valuation. Locations: Jeddah, Riyadh.</h2>
                                    <NavLink to='aboutus' className="flex items-center cursor-pointer pb-4 md:pb-0">
                                        <p className="f-f-r text-lg lg:text-2xl font-semibold  text-purple-800">Know More</p>
                                        <div className="pl-2">
                                         <h1 className='-mb-1 text-purple-800'>{right}</h1>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src={Img} alt=''/>
                                <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-16">
                                   
                                    <div className=" flex items-center ">
                                        <span className="text-white bg-purple-800 p-3 rounded-md">
                                        <span>{cubeICon}</span>
                                        </span>
                                        <p className="ml-1 text-xl font-bold ml-5 text-gray-800  ">Get the Most <br /> Definitely</p>
                                    </div>
                                    <div className="mt-5 flex items-center ">
                                        <span className="text-white bg-purple-800 p-3 rounded-md">
                                        <span>{pincilICon}</span>
                                        </span>
                                        <p className="ml-1 text-xl font-bold ml-5 text-gray-800  ">Fast and quality <br /> service</p>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeAbout;
