import React from 'react'

const Employee = ({emp}) => {
  return (
    <tr>
        <td>{emp.empId}</td>
        <td>{emp.name}</td>
        <td>{emp.designation}</td>
    </tr>
  )
}

export default Employee
