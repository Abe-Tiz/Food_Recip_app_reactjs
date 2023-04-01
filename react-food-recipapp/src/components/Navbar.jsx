import { useState } from 'react'
import React from 'react'

const Navbar = () => {
  const [showSidBar,setShowSideBar]=useState(false);

  //show side bar
    const handlesideBar=()=>{
      setShowSideBar(!showSidBar);
    }

  return (
    <div className='navbar container'>
        <a className='logo' href="#!">F<span>oo</span>diesHub</a>
        <div className="nav-links">
          <a href="#!" className='active'>Home</a>
          <a href="#!">Recipies</a>
          <a href="#!">Settings</a>
        </div>
        <div onClick={ handlesideBar} className={showSidBar ? 'sidebar-btn active' : 'sidebar-btn'}>
           <div className="bar"></div>
           <div className="bar"></div>
           <div className="bar"></div>
        </div>
    </div>
  )
}

export default Navbar
