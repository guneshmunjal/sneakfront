import React,{useState}from 'react'
import {Reviewscustomer} from '../API/apiReviews.js'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { MyReviews } from './MyReviews.jsx';
export const Reviews = () => {
    const [data, setData] = useState(Reviewscustomer);

  // Inside your component function
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize the currentIndex state to 0

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      // Increment the currentIndex by 1
      let newIndex = prevIndex + 1;

      // Check if newIndex exceeds the length of data
      if (newIndex >= data.length) {
        newIndex = 0; // Reset to 0 if it goes beyond the length
      }

      return newIndex; // Update the currentIndex state
    });
  return (


    <>
      <section className="review-card">
      <div className="review-title">
        <h1>Reviews</h1>
      </div>
      <div className="review-content">
        <MyReviews key={data[currentIndex].id} {...data[currentIndex]} />
        <div className="arrow-container">
          <button className="btn-arrow" onClick={handleNextClick}>
            <BsArrowLeft />
          </button>
          <button className="btn-arrow btn-right" onClick={handleNextClick}>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
}
