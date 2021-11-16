import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
const [reviews,setReviews]=useState([])
useEffect(()=>{
  fetch('http://localhost:5000/review')
  .then(res=>res.json())
  .then(data=>setReviews(data))
},[])

    return (
        <div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div className='my-16'>
                <h2 className="text-2xl leading-6 text-gray-800 text-center px-4">Testimonials</h2>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">What our client says</h1>
             
            </div>
    <div class="flex flex-wrap -m-4">
      
    {
      reviews.map(review=><SingleReview
      key={review._id}
      review={review}
      
      >


      </SingleReview>)
    }
    </div>
  </div>
</section>
        </div>
    );
};

export default Review;