import React from 'react'
import '../CSS/Modal.css'
export const Modal = ({setopenModal,chatContent}) => {
    const handleOpenModal = ()=>{
        setopenModal(false)
    }
  return (
<div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
         onClick={handleOpenModal}
        >
          X
        </button>
      </div>
      <div className="title">
        <h1>INSTRUCTIONS </h1>
      </div>
      <div className="body">
   {chatContent}
      </div>
      <div className="footer">
       
   
      </div>
    </div>
  </div>
  )
}
