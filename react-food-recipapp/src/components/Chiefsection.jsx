import React from 'react'
import Chiefscard from './Chiefscard'

const Chiefsection = () => {
const chiefs=[
    {
        name:"juan carlos",
        img:"/img/top-chiefs/img_1.jpg",
        count:"10",
        cuisine:"Mexican"
    },
    {
        name:"john Doe",
        img:"/img/top-chiefs/img_2.jpg",
        count:"05",
        cuisine:"japanese"
    },
    {
        name:"Erich Maria",
        img:"/img/top-chiefs/img_3.jpg",
        count:"13",
        cuisine:"Italian"
    },
    {
        name:"Chris Brown",
        img:"/img/top-chiefs/img_4.jpg",
        count:"08",
        cuisine:"American"
    },
    {
        name:"Blake Lively",
        img:"/img/top-chiefs/img_5.jpg",
        count:"09",
        cuisine:"French"
    },
    {
        name:"Ben Affleck",
        img:"/img/top-chiefs/img_6.jpg",
        count:"04",
        cuisine:"Indian"
    }
]

  return (
    <div className='section chiefs'>
        <h1 className='title'>Our Top Chiefs</h1>
        <div className="chiefs-container">
           { chiefs.map( 
                chief =><Chiefscard 
                    chief={chief} 
                />
            )}
            
        </div>
    </div>
  )
}

export default Chiefsection
