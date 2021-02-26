import React from 'react';
import Data from './Data';

class Employees extends React.Component{
  render() {
    return (
      <div>
        {this.props.data.map(employee => <Data source={employee.picture.large} firstName={employee.name.first} lastName={employee.name.last} email={employee.email} dob={new Date(employee.dob.date).toLocaleDateString("en-US").split('/').join('-')} />)}
      </div>
    )
  }
}

export default Employees;