import React from 'react';
import { useHistory } from 'react-router';
import UseAllServices from '../../shared/UseAllServices';
import SingleHomeService from './SingleHomeService';

const AllService = () => {
    const [serivces]=UseAllServices()
    let histroy=useHistory()
    const HandleServiceBooking=id=>{
        console.log(id);
        histroy.push(`/servicebooking/${id}`)
    
    }
    return (
        <div>
         <div className="grid grid-cols-3 gap-4 container">
            {
                serivces.map(singleService=><SingleHomeService
                key={singleService._id}
                singleService={singleService}
                HandleServiceBooking={HandleServiceBooking}
                ></SingleHomeService>)
            }
        </div>
        </div>
    );
};

export default AllService;