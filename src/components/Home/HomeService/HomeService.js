import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import UseAllServices from '../../shared/UseAllServices';
import SingleHomeService from './SingleHomeService';

const HomeService = () => {
const[services]=UseAllServices()

const limdedService=services.slice(0,5)
let histroy=useHistory()
const HandleServiceBooking=id=>{
    histroy.push(`/servicebooking/${id}`)

}
    return (
     <div className="">
            <div className='container md:px-16 px-3  mx-auto'>
                  <div className='text-center pt-10 my-10'>
            <h1 className='md:text-4xl text-2xl  sm:text-3xl font-bold '>Today Special</h1>
            <p className='text-gray-700 mt-2'>- OUR SERVICES -</p>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-4 ">
           {
               limdedService.map(singleService=><SingleHomeService
               key={singleService.id}
               singleService={singleService}
               HandleServiceBooking={HandleServiceBooking}
               ></SingleHomeService>)
           }
        </div>
        </div>
     </div>
    );
};

export default HomeService;