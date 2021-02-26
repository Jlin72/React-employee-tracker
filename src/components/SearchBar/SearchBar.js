import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return( 
      <div>
        <input type="text" class="form-control" id="searchBar" placeholder="Enter name" />
      </div>
    )
  }
}

export default SearchBar;