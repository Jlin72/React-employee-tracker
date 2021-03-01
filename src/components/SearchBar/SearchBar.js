import React from 'react';
import './SearchBar.css';

function SearchBar({value, inputChange}) {
  return (<div style={{marginTop:'25px'}}>
    <input type="text" class="form-control" id="searchBar" placeholder="Enter name" value={value} name="searchInput" onChange={inputChange} />
  </div>)
}

export default SearchBar;