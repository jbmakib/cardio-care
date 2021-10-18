import React from "react";

const Input = ({ children, type, id }) => {
    return (
        <div className="relative w-full mb-3">
            <label
                className="block uppercase text-red-700 text-xs font-bold mb-2"
                htmlFor={id}
            >
                {children}
            </label>
            <input
                type={type}
                id={id}
                className="px-3 py-3 placeholder-red-400 text-red-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder={children}
                style={{
                    transition: "all 0.15s ease 0s",
                }}
            />
        </div>
    );
};

export default Input;
