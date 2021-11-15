import React from 'react';
import { NavLink } from 'react-router-dom';

const YouHaveNoOrder = () => {
    return (
        <div>
            <h1 className="font-bold text-4xl text-center">
            You Order cart is empty
            </h1>
            <NavLink to='/allservices' className=''>
                Go Something shop
            </NavLink>
        </div>
    );
};

export default YouHaveNoOrder;