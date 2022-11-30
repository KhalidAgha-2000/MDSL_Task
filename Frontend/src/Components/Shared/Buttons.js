import React from 'react'

const Buttons = ({ onClick, action, disabled, className }) => {
    return (
        <button
            type="submit"
            disabled={disabled}
            onClick={onClick}
            className={`${action === 'Add' ? "bg-add"
                : action === "Delete" ? "bg-delete"
                    : action === "Done" ? " bg-done   md:w-1/4 md:mt-2"
                        : action === "Canecl" ? "bg-add  md:w-1/4 md:mt-2" : ""}
                        "inline-flex mx-1 items-center px-3 py-2 text-sm font-medium text-center text-white 
                        rounded-lg focus:ring-4 focus:outline-none 
                        disabled:cursor-not-allowed disabled:bg-disable`}
        >
            {action}
        </button>
    )
}

export default Buttons