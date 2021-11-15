import React from 'react';


import AboutPortfolio from './AboutPortfolio';
import Img1 from '../../img/portfolio/2.jpg'
import Img2 from '../../img/portfolio/3.jpg'
import Img3 from '../../img/portfolio/4.jpg'
import Img4 from '../../img/portfolio/13.jpg'
import Img5 from '../../img/portfolio/6.jpg'
import Img6 from '../../img/portfolio/7.jpg'

const AboutBody = () => {
    return (
        <div>
           <div className='text-center pt-10 my-10'>
            <h1 className='md:text-4xl text-2xl sm:text-3xl font-bold '>Recent Projects</h1>
            <p className='text-gray-700 mt-2'>- Project Showcase -</p>
        </div>
        <div className="container grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pb-16">

            
<AboutPortfolio title='Graphic Design' des='UI/UX Designer' img={Img1}></AboutPortfolio>
<AboutPortfolio title='Graphic Design' des='UI/UX Designer' img={Img2}></AboutPortfolio>
<AboutPortfolio title='Graphic Design' des='UI/UX Designer' img={Img3}></AboutPortfolio>
<AboutPortfolio title='Graphic Design' des='UI/UX Designer' img={Img4}></AboutPortfolio>
<AboutPortfolio title='Graphic Design' des='UI/UX Designer' img={Img5}></AboutPortfolio>
<AboutPortfolio title='Graphic Design' des='UI/UX Designer' img={Img6}></AboutPortfolio>


</div>


        
        </div>
    );
};


export default AboutBody;