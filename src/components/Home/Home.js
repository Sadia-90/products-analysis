import React from 'react';
import "./Home.css";




const Home = () => {

 

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
            <h1>Customer Reviews</h1>

            const [review, setReview] = useReviews();






          </div>
         <div className='button'>
           <button>See All Reviews</button>
         </div>
         </div>
         
       
    );
};

export default Home;