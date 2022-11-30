import './App.css';
import Form from './Components/Form';
import Employees from './Components/Employees';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Buttons from './Components/Shared/Buttons';

function App() {

  const [allEmployees, setAllEmployees] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)

  useEffect(() => {
    //*********Fetching all employees */
    getAllEmployee()
  }, [])

  //*********Fetching all employees */
  const getAllEmployee = () => {
    axios.get(`http://localhost:5000/api/employee`)
      .then(response => {
        setAllEmployees(response.data.data)
      }).catch((err) => { console.log(err) })
  }

  return (
    <div className="App relative ">
      {/*************************** Header****************************** */}
      <nav className='w-full shadow-xl shadow-disable text-center text-text font-bold text-3xl md:px-0 p-5'>Employee Profiles</nav>

      {/*************************** Add ****************************** */}
      <div className={`${showAddForm ? "hidden" : "fixed"} md:right-0 md:top-5  right-2 top-3 w-20 h-10 `}>
        <Buttons
          action={"Add"}
          onClick={() => setShowAddForm(true)}
        />
      </div>

      {!showAddForm ? null
        :
        <Form
          showAddForm={showAddForm}
          setShowAddForm={setShowAddForm}
          getAllEmployee={getAllEmployee} />
      }

      <Employees
        allEmployees={allEmployees}
        setAllEmployees={setAllEmployees}
        getAllEmployee={getAllEmployee}
      />
    </div>
  );
}

export default App;
