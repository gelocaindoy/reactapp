import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import AddEmployee from "./addemployee";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [isAddEmployeeVisible, setIsAddEmployeeVisible] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(true);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);
  const addEmployee = (name, email, position, salary) => {
    console.log(name, email, position, salary);
    firebase.database().ref("employees").push({ name, email, position, salary });
      
  };
  useEffect(() => {
    const dbRef = firebase.database().ref("employees");
    dbRef.on("value", (snapshot) => {
      const employeeData = snapshot.val();
      const employeesArray = [];
      for (let key in employeeData) {
        employeesArray.push({
          id: key,
          name: employeeData[key].name,
          email: employeeData[key].email,
          position: employeeData[key].position,
          salary: employeeData[key].salary,
        });
      }
      setEmployees(employeesArray);
    });
  }, []);

  // Get current employees
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const Button = ({ onClick, children }) => (
    <button onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //page number
  const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    // console.log(itemsPerPage , totalItems, paginate)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      //https://stackoverflow.com/questions/14613956/how-to-get-current-page-using-start-index-items-per-page-total-items-and-tota
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                type="button"
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  // Delete
  const deleteEmployee = (id) => {
    firebase.database().ref(`employees/${id}`).remove(); //https://www.tabnine.com/code/javascript/functions/firebase/Reference/remove
  };
  //edit
  const editEmployee = (employee) => {
    setEditingEmployee(employee);
    setIsAddEmployeeVisible(!isAddEmployeeVisible);
    setIsTableVisible(!isTableVisible);
  };

  //update
  const updateEmployee = (id, name, email, position, salary) => {
    firebase
      .database()
      .ref(`employees/${id}`)
      .update({ name, email, position, salary });

    const updatedEmployees = employees.map((employee) => {
      console.log(employee);
      if (employee.id === id) {
        return { ...employee, name, email, position, salary };
      }
      return employee;
    });

    setEmployees(updatedEmployees);
    setEditingEmployee("");
    setIsAddEmployeeVisible(false);
    setIsTableVisible(true);
  };

  const Table = ({ employees, deleteEmployee, editEmployee }) => (
    <table className="table">
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
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                onClick={() => editEmployee(employee)}
                icon={faEdit}
              />
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faTrash}
                onClick={() => deleteEmployee(employee.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <Button onClick={() => setIsAddEmployeeVisible(!isAddEmployeeVisible)}>
        Add Employee
      </Button>
      {isAddEmployeeVisible && (
        <AddEmployee
        isVisible={isAddEmployeeVisible}
        onClose={() => setIsAddEmployeeVisible(!isAddEmployeeVisible)}
        addEmployee={addEmployee}
        editingEmployee={editingEmployee}
        updateEmployee={updateEmployee}
      />
      )}
      {isTableVisible && (
        <>
          <Table
            employees={currentEmployees}
            deleteEmployee={deleteEmployee}
            editEmployee={editEmployee}
          />
          <Pagination
            itemsPerPage={employeesPerPage}
            totalItems={employees.length}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
};
export default AdminDashboard;
