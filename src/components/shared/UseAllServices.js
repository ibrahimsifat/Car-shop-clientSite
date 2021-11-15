import { useEffect, useState } from 'react';

const UseAllServices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        const url='../AllMeal.json'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return [services]
};

export default UseAllServices;