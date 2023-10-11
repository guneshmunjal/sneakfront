import React from 'react'
// import '../CSS/MyReviews.css'


export const MyReviews = (props) => {
  return (
    <div className='top-div'>
    <div className='reviews'>"{props.review}"</div>
    <div className='name-review'>{props.name}</div>
  </div>
  )
}
