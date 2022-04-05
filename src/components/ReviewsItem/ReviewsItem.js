import React from 'react';
import './ReviewsItem.css'

const ReviewsItem = (props) => {

    const {img, name, review, rating} = props.reviews
    return (
        <div className='review-container'>
           <div className='img-part'>
           <img height={200} src={img} alt=''></img>
           </div>
          <h1>name: {name}</h1>
           <p>review: {review}</p>
           <h3>rating: {rating}</h3>
        </div>
    );
};

export default ReviewsItem;