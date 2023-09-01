// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// const Employees = () => {
//   const [employees, setEmployees] = useState([
//     { empId: 1234, name: "John", designation: "SE" },
//     { empId: 4567, name: "Tom", designation: "SSE" },
//     { empId: 8910, name: "Kevin", designation: "TA" },
//   ]);
//   const addEmployee = () => {
//     setEmployees([
//       ...employees,
//       { empId: 6789, name: "Sam", designation: "TL" },
//     ]);
//     // spread operator doing the concat job
//   let arr = [1, 2, 3];
//   let arr2 = [4, 5];
//   arr = [...arr, ...arr2];
//   console.log(arr); // [ 1, 2, 3, 4, 5 ]

//   };
//   return (
//     <>
//       <table style={{ width: "60%" }} className="table">
//         <thead className="thead-light">
//           <tr>
//             <th>EmpID</th>
//             <th>Name</th>
//             <th>Designation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => {
//             return (
//               <tr key={employee.empId}>
//                 <td>{employee.empId}</td>
//                 <td>{employee.name}</td>
//                 <td>{employee.designation}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <button className="btn btn-primary" onClick={addEmployee}>Add an Employee</button>
//     </>
//   );
// };
// export default Employees;
