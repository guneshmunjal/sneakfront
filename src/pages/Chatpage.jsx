import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/chatpage.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { Modal } from './Modal';

export const Chatpage = () => {
  const [query, setQuery] = useState('');
  const[secondQuery,setSecondQuery] = useState('')
  const[thirdQuery,setThirdQuery] = useState('')
  const[fourthQuery,setFourthQuery] = useState('for flipping purpose. JUST GIVE SOME DATA regarding volatility nothing ELSE AND PRICE RANGE.answer in less than 70 words.if my question is not related to sneakers then say i am not allowed to answer such types of questions')
  const [response, setResponse] = useState('');
  const[responseLoader,setresponseLoader]=useState(false)
  const[openModal,setopenModal] = useState(false)
  const chatContent = (
    <p>Enter the sneaker model that you want to buy or sell and make maximum money by reselling.Please enter the models which 
      have been released
    </p>
  )

  useEffect(()=>{
    setopenModal(true)
  },[])
console.log(`hello${secondQuery + thirdQuery + fourthQuery}`)
  const handleQuery = async () => {
    if (query === "") {
      alert("Enter your question, please.");
      return; // Exit the function early if query is empty
    }
    // if(secondQuery === ""){
    //   alert("please enter the release date of the sneaker");
    //   return;
    // }
    
    // if(thirdQuery === ""){
    //   alert("please enter the current date");
    //   return;
    // }
    setresponseLoader(true)

    try {
      const response = await axios.post('http://sb-ebvr.onrender.com/v1/fine_tuning/jobs/openai', {
        messages: [
          { role: "user", 
          content:`${query + secondQuery + thirdQuery + fourthQuery}`  }, // Include the user's query
        ],
      });


      setResponse(response.data.generatedText);
      setQuery("")
    } catch (error) {
      console.error('Error hello:', error);
      setResponse('An error occurred');
    }finally{
      setresponseLoader(false)
    }

  };

  return (
    <div className='toplevel-div'>
      <div className='heading-description'>
          Let our model predict the correct price for your shoe
        </div>
      <div className='backbutton'></div>
      <div className='middle-div'>
        <div className='response-text'>{response}</div>
        <input
          type="text"
          placeholder="enter the name of the shoe"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input-field"
        />
        {/* <input 
        type='text'
        placeholder='enter the release date of the sneaker'
        value={secondQuery}
        onChange={ (e)=>setSecondQuery(e.target.value)}
        className='secondinput'/> */}
 <input 
        type='text'
        placeholder= ' enter the current date'
        value={thirdQuery}
        onChange={ (e)=>setThirdQuery(e.target.value)}
        className='thirdinput'/>

        

        
        <div className='checkpricebtn'>
          <button className='response' onClick={handleQuery}  >
            {responseLoader ? <ClipLoader color="#ffff" loading={true} size={20} aria-label="Loading Spinner" data-testid="loader" /> : 'SEARCH'}</button>
        </div>
      </div>
      <div className='modal'>
{openModal &&
  <  Modal  setopenModal = {setopenModal} chatContent={chatContent}/>
}
      </div>
    </div>
  );
};
