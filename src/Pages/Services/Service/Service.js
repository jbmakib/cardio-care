import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service: { name, img, id, description } }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={img} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to={`/service/${id}`}>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                        Buy The Service
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Service;
