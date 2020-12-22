 import React from 'react';
 
 
 
 
 function DataBody(props) {
    return props.employees.map((employee) => {
      const { first, last } = employee.name;
      const fullName = `${first} ${last}`;
      const { id } = employee; //destructuring
      //console.log(id)
      return (
          <>
          
        <tr key={id.value}>
          <td>
            <img src={employee.picture.thumbnail} alt="employee pic" />
          </td>
          <td className="align-middle name">{fullName}</td>

          <td className="align-middle phone">
            <a href={`tel:+1${employee.phone}`}>{employee.phone}</a>
          </td>
          
          <td className="align-middle email">
            <a href={`mailto:${employee.email}`}>{employee.email}</a>
          </td>
        </tr>
        </>
      );
    });
  } 


  export default DataBody;