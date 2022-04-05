import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/ReviewsProducts';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import "./Home.css";




const Home = () => {
  const [reviews] = useReviews();
 

    return (
         <div>
          <div className='home-container'>
          <div>
            <h1>Unique features of smartwatches</h1>

           <li>Sleep pattern monitoring</li>
           <li>Step counting</li>
           <li>Capital detection</li>
           <li>Heart rate monitoring</li>
           <div>
           <button>Button</button>
           </div>
           
          </div>
          <div>
            <img height={400} src="https://images-static.nykaa.com/media/catalog/product/a/f/af899148906086572115-1.jpg?tr=w-500,pr-true" alt="" />
          </div>
          </div>
          <div className='reviews-section'>
            <h1>Customer Reviews: </h1>
            
           <div>
             {
               reviews.slice(0, 3).map(reviews=><ReviewsItem 
                reviews={reviews}
               >{reviews.name}
               </ReviewsItem>)
             }
           </div>
           <div className='button'>
           <Link to={'/Reviews'}>see all reviwes</Link>
         </div>
          </div>
         
         </div>
         
       
    );
};

export default Home;