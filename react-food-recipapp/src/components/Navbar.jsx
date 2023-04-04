import { useState } from 'react'
import React from 'react'
import Sidebar from './Sidebar';
import {faHome, faList, faCog} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showSidBar,setShowSideBar]=useState(false);
   
  const links = [
    {
      name:"Home",
      path:'/',
      icon:faHome
    },
    {
      name:"Recipies",
      path:'/recipies',
      icon:faList
    },
    {
      name:"Settings",
      path:'/settings',
      icon:faCog
    }
  ]
  //show side bar
    const handlesideBar=()=>{
      setShowSideBar(!showSidBar);
    }

  //close sidebar
  const closeSidebar = () =>{
    setShowSideBar(false);
  }

  return (
    <>
      <div className='navbar container'>
        <a className='logo' href="#!">F<span>oo</span>diesHub</a>
        <div className="nav-links">
          {links.map(link =>(
            <a href="#!" key={link.name}>{link.name}</a>
          ))}
          {/* <a href="#!" className='active'>Home</a>
          <a href="#!">Recipies</a>
          <a href="#!">Settings</a> */}
        </div>
        <div onClick={ handlesideBar} className={showSidBar ? 'sidebar-btn active' : 'sidebar-btn'}>
           <div className="bar"></div>
           <div className="bar"></div>
           <div className="bar"></div>
        </div>
     </div>
     {showSidBar && <Sidebar close={closeSidebar} links={links}/>}
     
    </>
  )
}

export default Navbar
