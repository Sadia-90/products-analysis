import { useEffect, useState } from "react"

const ReviewsProducts = () =>{
    const [review, setReview] = useState([]);

    useEffect (() =>{
      fetch('data.json')
      .then(res=> res.json())
      .then(data =>setReview(data))
    },[])

    return [review, setReview];
}

export default ReviewsProducts;