import React from 'react';


const Search = ({ placeholder, onChange, onClick, children}) => {
     
     return(
       <div className="searchBox">
         <div className="searchInput">
          <input type="search" placeholder={placeholder} onChange={onChange}/>
          <button onClick={onClick} >검색</button>
          </div>
              <div className="result">
                  {children}
                </div>
      </div>
     )
}

export default Search;