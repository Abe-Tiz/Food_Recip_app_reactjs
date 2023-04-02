import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft,faQuoteRight  } from "@fortawesome/free-solid-svg-icons";


const Quotesection = () => {
  return (
    <div className='section quote'>
       <p className="quote-text">
            <FontAwesomeIcon icon={faQuoteLeft} />
                Food is everything we are it's an extension of nationalist feeling
                ehnic feeling, your personal history, your province,your region,your tribe, your grandingma. it's inseparable from those from the get-ago. 
            <FontAwesomeIcon icon={faQuoteRight} />   
       </p>
       <p className="quote-author"> - Anthony Bourdain</p>
    </div>
  )
}

export default Quotesection
