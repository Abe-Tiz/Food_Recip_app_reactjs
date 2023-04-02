import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
const Chiefscard = ({chief}) => {
 

  return (
    <div className='chief-card'>
        <img src={chief.img} alt="" />
        <div className="chief-info">
            <h3 className="chief-name">{chief.name}</h3>
            <p className="chief-count">Recipes:<b>{chief.count}</b></p>
            <p className="chief-cuisine">cuisine:<b>{chief.cuisine}</b></p>
            <p className="chief-icon">
                <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
            </p>   
        </div>
      
    </div>
  )
}

export default Chiefscard
