import React from 'react'

const Inputs = ({ type, name, id, labelFor, labelValue, onChange, pattern, className }) => {
    return (
        <div className="relative z-0 mb-6 w-full group ">
            <input
                pattern={pattern}
                onChange={onChange}
                type={type}
                name={name}
                id={id}
                className={className || "block py-2.5 px-0 w-1/2 md:w-full bg text-sm text-text bg-[transparent] border-0 border-b-2 border-inputBorder appearance-none focus:outline-none focus:ring-0 focus:border-inputBorder peer"}
                placeholder=" "
                required
            />
            <label for={labelFor}
                className="peer-focus:font-medium absolute text-sm text-text  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-inputBorder  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {labelValue}
            </label>
        </div>
    )
}
export default Inputs;