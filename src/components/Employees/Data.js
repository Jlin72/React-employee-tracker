import React from 'react';
import './Data.css'

function Data({source, firstName, lastName, email, dob}) {
  return(
    <div className="row employeeRow">
      <div className="col-md-3">
        <div className="center">
          <img src={source} alt="employee" className="employeePic"/>
        </div>
      </div>
      <p className="col-md-3 textCenter">{firstName} {lastName}</p>
      <p className="col-md-3 textCenter">{email}</p>
      <p className="col-md-3 textCenter">{dob}</p>
    </div>
  )
}

export default Data;