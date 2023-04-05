import { useState } from 'react'
import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import Sidebar from './Sidebar';
import {faHome, faList, faCog} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showSidBar,setShowSideBar]=useState(false);
   const location = useLocation();
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
        <Link to='/' className='logo' >F<span>oo</span>diesHub</Link>
        <div className="nav-links">
          {links.map(link =>(
            <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}   key={link.name}>{link.name}</Link>
          ))}
           
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
