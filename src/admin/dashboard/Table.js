import React from "react";
import Button from "./Button";

const Table = ({ employees, deleteEmployee, editEmployee }) => (

  <table className="table table-striped text-white">
    <thead>
      <tr>
        <th col="row">Name</th>
        <th col="row">Email</th>
        <th col="row">Position</th>
        <th col="row">Salary</th>
        <th col="row">Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.position}</td>
          <td>{employee.salary}</td>
          <td>
            <Button onClick={() => editEmployee(employee)}>Edit</Button>
            <Button onClick={() => deleteEmployee(employee.id)}>Delete</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default Table;