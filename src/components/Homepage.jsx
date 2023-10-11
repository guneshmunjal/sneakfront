import React from 'react';
import '../CSS/Homepage.css';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Accordian } from '../pages/Accordian';

export const Homepage = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="max-container">
        <h1 className="project-name">SNEAKERS.AI</h1>
        <h2 className="heading">GUIDE FOR SNEAKER NOOBIES</h2>
        <div className="card-container">
          <div className="card card-pitch">
            <h1 className="card-title">Predict sneaker's future worth</h1>
            <p className="card-text">Make money by flipping sneakers and eliminate uncertainity</p>
            <div className="buttonNavigate" onClick={() => navigate('/chatpage')}>
              <FaArrowCircleRight />
            </div>
          </div>

          <div className="card card-secondorder">
            <h1 className="card-title">Want to sell the sneaker at the Right price?</h1>
            <p className="card-text">Get to know the correct time and price to make money </p>
            <div className="buttonNavigate" onClick={() => navigate('/chatpage')}>
              <FaArrowCircleRight />
            </div>
          </div>
          {/* <div className='accordian'>
            <Accordian/>
          </div> */}
        </div>
      </div>
    </div>
  );
};
