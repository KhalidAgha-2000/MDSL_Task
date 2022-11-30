import React, { useState } from 'react'
import axios from 'axios';
import Inputs from './Shared/Inputs';
import Buttons from './Shared/Buttons';

const Form = (props) => {

    //*******************Initial form data
    const initialData = { name: "", email: "", mobile: "" }
    const [employeeData, setEmployeeData] = useState(initialData)


    //*******************Tracking inputs value
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setEmployeeData({ ...employeeData, [name]: value.trim() });
    };

    //*******************Validation no empty inputs , type is email
    const checkIfEmpty = (obj) => {
        const email = document.getElementById("email");
        const mobile = document.getElementById("mobile");
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let status = false
        for (let key in obj) {
            if (obj[key] === "" || !email.value.length === 0 || !validRegex.test(email.value) || mobile.value.length > 8) {
                status = true
            }
        }

        return status;
    }

    //*******************Submit 
    const hundleSubmit = async (e) => {
        let data = { name: employeeData.name, email: employeeData.email, mobile: employeeData.mobile }
        const response = await axios.post(
            'http://localhost:5000/api/employee/add', data,
        )

        //*******************Fetching all employee with new entry  
        props.getAllEmployee()

        //*******************Hide Form  
        props.setShowAddForm(false)

    }

    return (
        <div>
            <form className='py-4 px-4 my-4 border-b border-b-add h-auto 
            w-full flex  flex-row justify-around items-center 
            md:flex-col md:items-center 
            '
                onSubmit={(e) => { e.preventDefault() }}
            >
                {/*************************** Name****************************** */}

                <Inputs
                    onChange={handleChange}
                    id={'name'}
                    name={'name'}
                    type={'text'}
                    labelValue={'name'}
                    labelFor={'name'}
                />

                {/*************************** Email****************************** */}

                <Inputs
                    onChange={handleChange}
                    id='email'
                    name={'email'}
                    type={'email'}
                    labelValue={'Your email'}
                    labelFor={'email'}
                />


                {/*************************** Mobile****************************** */}

                <Inputs
                    onChange={handleChange}
                    id={'mobile'}
                    name={'mobile'}
                    type={'number'}
                    labelValue={'Your Number (8) numbers'}
                    labelFor={'mobile'}


                />

                {/*************************** Add ****************************** */}

                <Buttons action={"Done"}
                    onClick={() => hundleSubmit()}
                    disabled={checkIfEmpty(employeeData)}

                />

                {/*************************** Cancel****************************** */}

                <Buttons action={"Canecl"}
                    onClick={() => props.setShowAddForm(false)}
                />
            </form>

        </div>
    )
}

export default Form