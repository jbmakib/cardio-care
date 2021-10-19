import React from "react";
import "./Doctor.css";

const Doctor = ({ name, img, des }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="doctor-image" src={img} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base uppercase">{des}</p>
            </div>
        </div>
    );
};

export default Doctor;
