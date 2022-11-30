import axios from 'axios'
import { useState } from 'react'
import Buttons from './Shared/Buttons'

const Employees = (props) => {

    //**************Delete Employee 
    const [deleteCompleted, setDeleteCompleted] = useState("")
    const deleteEmployee = (a_id) => {
        axios.delete(`http://localhost:5000/api/employee/${a_id}`)
            .then((response) => {
                props.getAllEmployee()
            })

    }
    return (
        <div className=' mt-5 flex flex-row md:flex-col flex-wrap gap-2 justify-evenly w-full '>
            {props.allEmployees.map((employee) => (
                <div className="relative w-1/3 md:w-[80%] md:m-auto p-6 bg-white border rounded-lg shadow-md ">

                    {/*************************** Name****************************** */}

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-text ">
                        {employee.name}
                    </h5>

                    {/*************************** Email ****************************** */}
                    <p className="mb-3 font-normal text-text">
                        {employee.email}
                    </p>
                    {/*************************** Mobile ****************************** */}

                    <p className="mb-3 font-normal text-text">
                        {employee.mobile}
                    </p>

                    <Buttons action={"Delete"} onClick={() => deleteEmployee(employee._id)} />
                </div>
            ))}
        </div>
    )
}
export default Employees