import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioDetails = ({img}) => {
    console.log(img);
    return (
        <div className='h-96 flex justify-center items-center mx-auto flex-col'>
            <Link className='bg-green-500 text-white  font-bold uppercase text-2xl hover:text-3xl px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' to='/'>back to home</Link>
            <h1 className='md:text-5xl text-3xl text-center font-bold'>Coming Soon</h1>
       
        </div>
    );
};

export default PortfolioDetails;