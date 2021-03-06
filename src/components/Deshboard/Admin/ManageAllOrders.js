import React, { useEffect, useState } from 'react';
import DeshbordSingleOrder from '../DeshbordSingleOrder';


const ManageAllOrders = () => {
    const [orders,setOrder]=useState([])

    useEffect(()=>{
         fetch(`https://thawing-headland-16581.herokuapp.com/orders`)
        .then(res=>res.json())
        .then(data=>setOrder(data))

    },[])
    return (
        <div>
           { 
           orders.map(order=><DeshbordSingleOrder
           key={order._id}
           order={order}
           ></DeshbordSingleOrder>)
                }
        </div>
    );
};

// const ManageSingleOrder=({order})=>{
//     const {email,title,Price}=order
//     return(
//         <div>
        
//             hello:{email}
//             hello:{Price}
//         </div>
//     )
// }

export default ManageAllOrders;