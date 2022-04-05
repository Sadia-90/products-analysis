   import React from 'react';
 import useReviews from '../../Hooks/ReviewsProducts';

const Reviews = () => {

    const [review, setReview] = useReviews();

    return (
        
           <div>
              <h1>reviews:{review.length}</h1>
           </div>
       
     );
};

export default Reviews;