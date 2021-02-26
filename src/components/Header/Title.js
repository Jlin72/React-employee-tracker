import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

function Title({children, inputChange, value}) {
  return(
    <div>
      <header>
        <div className="header">
          <h1>Employee Directory</h1>
          <p style={{textAlign: 'center'}}>Click on the the headers to sort information or use the search bar to narrow results</p>
        </div>
      </header>
      <SearchBar inputChange={inputChange} value={value}/>
      {children}
    </div>
  )
}

export default Title;