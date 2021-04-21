import React, { useEffect, useState } from 'react';
import TestimonialItem from './TestimonialItem';

 
 
const Testimonials = () => {
    const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('https://ancient-crag-54960.herokuapp.com/usersReviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [allReviews])
 
    const latestReview = allReviews.slice(Math.max(allReviews.length - 8, 0));
   
 
 
 
    return (
        <div>
            <div class="container marketing">
                <h2 className="text-center mb-5">Our Customer Review</h2>
                <div class="row mt-4">
                    {
                        latestReview.reverse().map(review => <TestimonialItem review={review}></TestimonialItem>)
                        
                    }
 
                </div>
            </div>
        </div>
    );
};
 
 


export default Testimonials;