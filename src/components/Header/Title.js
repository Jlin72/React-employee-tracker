import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Title({children, inputChange, value}) {
  return(
    <div>
      <header>
        <div className="header">
          <h1>Employee Directory</h1>
          <p style={{textAlign: 'center'}}>Click on the the arrows to sort information or use the search bar to narrow results by name</p>
        </div>
      </header>
      <div className="sizing">
        <SearchBar inputChange={inputChange} value={value}/>
        {children}
      </div>
    </div>
  )
}

export default Title;