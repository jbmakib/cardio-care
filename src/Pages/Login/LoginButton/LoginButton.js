import React from "react";

const LoginButton = ({ children, ...rest }) => {
    return (
        <button
            {...rest}
            className="bg-white active:bg-red-100 text-red-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs small-transition"
            type="button"
        >
            {children}
        </button>
    );
};

export default LoginButton;
