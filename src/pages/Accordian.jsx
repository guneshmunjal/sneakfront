import React,{useState} from 'react'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import  {accordianData } from '../API/AccordianApi'
import '../CSS/Accordian.css'
export const Accordian = () => {
    const [show, setShow] = useState(Array(accordianData.length).fill(false));

  const toggleAccordion = (index) => {
    const newShow = [...show];
    newShow[index] = !newShow[index];
    setShow(newShow);
  };
  return (
    <div className='accordion-container'>
    <h1 className='title-faq'>Frequently Asked Questions - FAQs</h1>

    {accordianData.map((item, index) => (
      <div className={`accordion-item ${show[index] ? 'open' : ''}`} key={item.id}>
        <div className='accordion-header' onClick={() => toggleAccordion(index)}>
          <h2>{item.question}</h2>
          <p className='accordion-icon'>{show[index] ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}</p>
        </div>
        {show[index] && (
          <div className='accordion-content'>
            <p>{item.answer}</p>
          </div>
        )}
      </div>
    ))}
  </div>
  )
}
