import React from 'react'

const Footer = () => {
  return (
    <div className="footer container ">
        <div className="footer-section">
            <p className="title">FoodiesHub.com</p>
            <p>FoodiesHub is a place where you can please your soul and tommy with delicious food recipies of all coisine.And our services is absolutly free. so start exploring now</p>
            <p>&copy; {new Date().getFullYear()} | All Rights Reserved.</p>
        </div>
        <div className="footer-section">
            <p className="title">Contact Us</p>
            <p>foodieshub@gmail.com</p>
            <p>+251-920-345-453</p>
            <p>Addis Ababa</p>
        </div>
        <div className="footer-section">
            <p className="title">Socials</p>
             <p>Facebook</p>
             <p>Twitter</p>
             <p>Instagram</p>
        </div>
    </div> 
  )
}

export default Footer
