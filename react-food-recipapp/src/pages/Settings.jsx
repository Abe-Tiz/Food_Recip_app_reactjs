import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
const Settings = () => {
  const [theme,setTheme] = useState("light");
  const primaryColor =[
    "rgb(255,0,86)",
    "rgb(33,150,243)",
    "rgb(255,193,7)",
    "rgb(0,200,83)",
    "rgb(156,39,176)"
  ]
  const fontSizes=[
    {
      title:'Small',
      value:'12px'
    },
    {
      title:'Medium',
      value:'16px'
    },
    {
      title:'Large',
      value:'20px'
    }
  ]
  const animationSpeeds=[
    {
      title:'Slow',
      value:2
    },
    {
      title:'Medium',
      value:1
    },
    {
      title:'Fast',
      value:.5
    }
  ]
  const [primaryCol,setPrimarycol]=useState(0);
  const [fontSize,setFontSize] =useState(1);
  const [animationSpeed,setAnimationSpeed ] =useState(1);
  return (
    <div>
       <div className="section d-block">
          <h2>prefered theme</h2>
          <div className="option-container">
             <div className="option light">
                {theme === "light" && (
                  <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )}
             </div>
             <div className="option dark">
             {theme === "dark" && (
                  <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )}
             </div>
          </div>
       </div>

       <div className="section d-block">
          <h2>primary color</h2>
          <div className="option-container">
             
             {primaryColor.map((color,index) =>(
                <div className="option light" style={{backgroundColor:color}}>
                  {primaryCol === index && (
                    <div className="check">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  )}
                </div> 
             ))}
             
          </div>
       </div>

       <div className="section d-block">
          <h2>font size</h2>
          <div className="option-container">
             
             {fontSizes.map((size,index) =>(
                <button className='btn'>
                   {size.title} 
                  {fontSize === index && <span><FontAwesomeIcon icon={faCheck} /></span> }
                  
                </button>
             ))}
             
          </div>
       </div>
       <div className="section d-block">
          <h2>Animation speed</h2>
          <div className="option-container">
             
            { animationSpeeds.map((speed,index) =>(
                <button className='btn'>
                   {speed.title} 
                  {animationSpeed === index && <span><FontAwesomeIcon icon={faCheck} /></span> }
                  
                </button>
             ))}
             
          </div>
       </div>

    </div>
  )
}

export default Settings
