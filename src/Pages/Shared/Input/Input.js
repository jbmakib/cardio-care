import React from "react";

const Input = ({ children, type, id, setInputState }) => {
    return (
        <div className="relative w-full mb-3">
            <label
                className="block uppercase text-red-700 text-xs font-bold mb-2"
                htmlFor={id}
            >
                {children}<sup className="text-red-900">*</sup>
            </label>
            <input
                type={type}
                id={id}
                onInput={(e) => setInputState(e.target.value)}
                className="px-3 py-3 placeholder-red-400 text-red-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full small-transition"
                placeholder={children}
                required
            />
        </div>
    );
};

export default Input;
