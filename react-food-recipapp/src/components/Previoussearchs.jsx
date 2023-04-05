import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Previoussearchs = () => {
    const searchs = ['pizza','burger','cookies','juice','salad','ice cream','soup','pudding'];

  return (
    <div>
       <div className="previous-search section">
            <h2>Previous search</h2>
            <div className="previous-container">
                 {searchs.map((search,index) => (
                     <div key={index} style={{animationDelay:index * .1 + 's'}} className="search-item">
                      {search}
                     </div>
                 ))}
            </div>
        </div>
        <div className="search-box">
           <input type="text" placeholder="search" />
           <button className="btn btn-search">
               <FontAwesomeIcon icon={faSearch}/>
           </button>
        </div>
    </div>
  )
}

export default Previoussearchs
