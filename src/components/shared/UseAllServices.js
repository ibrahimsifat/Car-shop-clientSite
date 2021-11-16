import { useEffect, useState } from 'react';

const UseAllServices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        const url='http://localhost:5000/services'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return [services,setServices]
};

export default UseAllServices;