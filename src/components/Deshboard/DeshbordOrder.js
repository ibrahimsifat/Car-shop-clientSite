import React, { useEffect, useState } from 'react';
import DeshbordSingleOrders from './DeshbordSingleOrders';
import YouHaveNoOrder from './YouHaveNoOrder';
import useAuth from '../shared/useAuth'
const DeshbordOrder = () => {
    const [orders,setOrder]=useState([])
    const {user}=useAuth()
    const email=user.email
    useEffect(()=>{
         fetch(`http://localhost:5000/orders?email=${email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[user,email])
    return (
        <div>
            {
                orders.length? orders.map(order=><DeshbordSingleOrders
                key={order._id}
                order={order}
                ></DeshbordSingleOrders>):
                <YouHaveNoOrder></YouHaveNoOrder>
            }
        </div>
    );
};

export default DeshbordOrder;