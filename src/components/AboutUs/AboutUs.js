import React from 'react';

import './AboutUs.css'
import { Link } from 'react-router-dom';
import Team from '../Team/Team';
import Clients from '../Clients/Clients';
import Meals from '../Home/Meals-container/Meals';
const AboutUs = () => {
    return (
      <>
      <div className='aboutUsbg'>
     
            <div className='   flex justify-center flex-col items-center'>
            <p className="text-white font-extrabold text-3xl md:text-5xl">
                    About Us
                </p>
               <p className="text-white font-semibold text-xl mt-2"><Link className='nav_hover' to='/'>Home</Link> / <span className='nav_hover'>About</span></p>
        </div>
      </div>
        {/* <AboutBody></AboutBody> */}
        <Meals></Meals>
        <Clients></Clients>
        <Team></Team>
      
      </>
    );
};

export default AboutUs;