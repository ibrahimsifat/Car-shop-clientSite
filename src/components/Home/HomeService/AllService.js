import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import UseAllServices from '../../shared/UseAllServices';
import SingleHomeService from './SingleHomeService';
import '../../../App.css'
const AllService = () => {
    const [serivces]=UseAllServices()
    let histroy=useHistory()
    const HandleServiceBooking=id=>{
        console.log(id);
        histroy.push(`/servicebooking/${id}`)
    
    }
    return (
        <div>
              <div className='aboutUsbg mb-20'>
     
     <div className=' pt-36  flex justify-center flex-col items-center'>
     <p className="text-white font-extrabold text-3xl md:text-5xl">
             Our Services
         </p>
        <p className="text-white font-semibold text-xl mt-2"><Link className='nav_hover' to='/'>Home</Link> / <span className='nav_hover'>Services</span></p>
 </div>
</div>
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