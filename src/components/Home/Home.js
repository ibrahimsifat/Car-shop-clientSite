import React from 'react';
import Footer from '../shared/Footer';
import TestimonialSlider from '../Testimonial/TestimonialSlider';
import Banner from './Banner/Banner';
import HomeService from './HomeService/HomeService';


const Home = () => {
    return (
<div>
    <Banner></Banner>
    <HomeService></HomeService>
    <TestimonialSlider></TestimonialSlider>
   <Footer></Footer>
        </div>
    );
};

export default Home;