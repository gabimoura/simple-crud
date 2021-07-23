import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);
  const [employee, setSelectedEmployee] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success");
    });
  };

  const showEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((res) => {
      setEmployeeList(res.data);
    });
  };

  const displayDetails = (val) => {
    console.log("employee", val);
    setSelectedEmployee(val);
    alert(employee.name);
  };

  return (
    <div className="App">
      <div>
        <h2>Team management</h2>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage:</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add employee</button>
        <div>
          <button onClick={showEmployees}>Show employees</button>
          <ul>
            {employeeList.map((val, i) => {
              return (
                <li key={i} onClick={() => displayDetails(val)}>
                  {val.name}
                </li>
              );
            }, this)}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default App;
