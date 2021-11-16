import { useEffect, useState } from 'react';

const UseAllServices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        const url='https://thawing-headland-16581.herokuapp.com/services'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return [services,setServices]
};

export default UseAllServices;