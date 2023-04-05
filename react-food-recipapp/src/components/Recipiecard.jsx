import React from 'react'
import CustomImage from './CustomImage'
const Recipiecard = ({recip}) => {
  return (
    <div className='recip-card'>
       
        <CustomImage imgSrc={recip.image} pt="75%"/>
        <div className="recip-card-info">
            <img src={recip.authorImg} alt="" className="author-img" />
            <p className="recip-title">{recip.title}</p>
            <p className="recip-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a className='btn-view' href="#!">VIEW RECIPE</a>
        </div>
    </div>
  )
}

export default Recipiecard
