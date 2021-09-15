import React from 'react';
import logo from './logo.jpg';
import './App.css';
import employees from './data/employees';
import SearchableList from '../src/SearchableList';

const Employees = employees;

function EmployeeList(props) {
  // const employees = props.employees;
  const listItems = Employees.map((employee) => 
    <li>{employee}</li>
  );
  return (
    <ul>{listItems.id}</ul>
  );
}

function App() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-subheader">Fiber optic network planning, simplified</span>
      </header>
      <ul>

      {/* {employees.employees.map((item, i) => (
        <li key={i}>last{item.lastName}</li>
        ))} */}
      </ul>
      <div className="App-body">
        <SearchableList />
        <div></div>
        {/* <EmployeeList employees={Employees} /> */}
      </div>
    </div>
  );
}

export default App;
