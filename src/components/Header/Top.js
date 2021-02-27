import React from 'react';
import './Header.css'

function Top({sort, icon}) {
  return (
    <div className="row top">
      <p className="col-md-3 center categories">Image</p>
      <p className="col-md-3 center categories">Name<span onClick={() => sort()}>{icon}</span></p>
      <p className="col-md-3 center categories">Email</p>
      <p className="col-md-3 center categories">DOB</p>
    </div>
  )
}

export default Top;