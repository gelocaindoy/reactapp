import React, { useState , useEffect} from 'react';
import "./addemployee.css"
import firebase from './firebase';

const AddEmployee = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);

  // retrieve employee data from props
  useEffect(() => {
    if (props.location && props.location.state) {
      setName(props.location.state.employee.name);
      setEmail(props.location.state.employee.email);
      setPosition(props.location.state.employee.position);
      setSalary(props.location.state.employee.salary);
      setIsEdit(true);
      setId(props.location.state.employee.id);
    }
  }, [props.location]);

  const handleSubmit = (e) => {
    console.log(name, email, salary , position);
    e.preventDefault();
    if (!isEdit) {
      firebase.database().ref('employees').push({
        name,
        email,
        position,
        salary,
      });
    } else {
      firebase.database().ref(`employees/${id}`).set({
        name,
        email,
        position,
        salary,
      });
    }
  
    setName('');
    setEmail('');
    setPosition('');
    setSalary('');
    setIsEdit(false);
    setId(null);
  };

  return (
    <div className="outer-div">
    <form onSubmit={handleSubmit}>
      <input className="login-form-input"
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input className="login-form-input"
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input className="login-form-input"
        type="text"
        value={position}
        required
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
      />
      <input className="login-form-input"
        type="text"
        value={salary}
        required
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Salary"
      />
      <button className="login-form-input" type="submit">
        {isEdit ? 'Update' : 'Submit'}
      </button>
      
    </form>
    </div>
  );
};

export default AddEmployee;