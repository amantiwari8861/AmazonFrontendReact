import React, { useState } from "react";
import Employee from "./Employee";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ]);
  return (
    <div className="container">
    <table style={{ width: "100%" }} className="table table-striped text-center">
      <thead className="thead-light">
        <tr>
          <th>EmpID</th>
          <th>Name</th>
          <th>Designation</th>
          
        </tr>
      </thead>
      <tbody>
        {
            employees.map((employee) => {
            return  <Employee emp={employee} />;
            })
        }
      </tbody>
      <tfoot>
        <tr>
          <th>EmpID</th>
          <th>Name</th>
          <th>Designation</th>
        </tr>
      </tfoot>
    </table>
    </div>
  );
};

export default EmployeesList;
