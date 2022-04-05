   import React from 'react';
    import useReviews from '../../Hooks/ReviewsProducts';
import ReviewsItem from '../ReviewsItem/ReviewsItem';


const Reviews = (props) => {
  console.log(props)
       const [reviews ] = useReviews();
       

    return (
        <div>
            
           {
             reviews.map (reviews => <ReviewsItem
            
             key={reviews.name}
             reviews={reviews}
             ></ReviewsItem>
             
            
             )
           }
        </div>
       
     );
};

export default Reviews;