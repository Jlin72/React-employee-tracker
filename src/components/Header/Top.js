import React from 'react';
import './Header.css'

function Top(props) {
  return (
    <div className="row">
      <p className="col-md-3 center">Image</p>
      <p className="col-md-3 center"><span onClick={() => props.sort()}>Name</span></p>
      <p className="col-md-3 center">Email</p>
      <p className="col-md-3 center">DOB</p>
    </div>
  )
}

export default Top;