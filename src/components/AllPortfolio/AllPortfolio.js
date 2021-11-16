import React from 'react';
import './AllPortfolio.css'
import { Link } from 'react-router-dom';
import img from '../../img/portpoliobg.jpg'
import '../../App.css'
import UseAllServices from '../shared/UseAllServices';
import SinglePortfolio from './SinglePortfolio'
const AllPortfolio = () => {
    const [services]=UseAllServices()
    return (
        <div>
            <div className="bg-gray-200 font-sans leading-normal tracking-normal">


<div className="w-full m-0 p-0 bg-cover bg-bottom bgImage "
style={{height:'400px',maxHeight:'460px'}} >
  
        <div className="container max-w-4xl mx-auto text-center break-normal">

                <p className="text-white pt-32 font-extrabold text-3xl md:text-5xl">
                    About US
                </p>
               <p className="text-white font-semibold text-xl mt-2"><Link className='nav_hover text-white' to='/'>Home</Link> / <span className='nav_hover'>About Us</span></p>
               
        </div>
    </div>

    <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-24">
        
        <div className="mx-0 sm:mx-6">
            
       
         

            <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
                
           
            <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
                <a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
                    <div className="w-full md:w-2/3 rounded-t ">	
                        <img src={img} className="h-full w-full shadow" alt=''/>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink ">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                            <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GETTING STARTED</p>
                            <div className="w-full font-bold text-xl text-gray-900 px-6 mb-7">👋 Welcome To Auto Smart</div>
                            <p className="text-gray-800 font-serif text-base px-6 mb-5">
                            We take care of all paperwork. Book for a Free Inspection in K.S.A now. We Buy Any Car in Any Condition. Free & Instant Car Valuation. Instant Cash Payment. We buy any car in 30 mins. Any Brand, Car, Condition. Free Online Car Valuation. Locations: Jeddah, Riyadh.
                            </p>
                          

                        </div>

                                        </div>

                </a>
            </div>
      


     
            <div className="container grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pb-16">

            
            {
                services.map(service=><SinglePortfolio
                service={service}
                key={service._id}
                ></SinglePortfolio>)
            }
             
            </div>
        
                    
        </div>
        
        
        
    </div>


</div>



</div>
        </div>
    );
};

export default AllPortfolio;