import React from 'react';
import Footer from '../shared/Footer';
import TestimonialSlider from '../Testimonial/TestimonialSlider';
import Banner from './Banner/Banner';
import HomeAbout from './HomeAbout';
import HomeService from './HomeService/HomeService';
import Review from './Review/Review';


const Home = () => {
    return (
<div>
    <Banner></Banner>
    <HomeAbout></HomeAbout>
    <HomeService></HomeService>
    <Review></Review>
    <TestimonialSlider></TestimonialSlider>
   <Footer></Footer>
        </div>
    );
};

export default Home;