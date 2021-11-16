import React from 'react';
import { useParams } from 'react-router';
import UseAllServices from '../../shared/UseAllServices';
import SingleHomeService from './DisplaySingleBooking';
const ServiceBooking = () => {
    const {serviceId}=useParams()
console.log(serviceId);
const [services]=UseAllServices()
const displayService=services.filter(service=>service._id===serviceId)

console.log(services);
console.log(displayService);

console.log(serviceId);
    return (
        <div>

    
{
            displayService.map(singleService=><SingleHomeService
            key={singleService.id}
            singleService={singleService}
            
            ></SingleHomeService>)
            }

        </div>
    );
};

export default ServiceBooking;