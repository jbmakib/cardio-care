import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useServices from "../../hooks/useServices";

const BookService = () => {
    const services = useServices();
    const { id } = useParams();
    const history = useHistory();
    const service = services.find((srvc) => srvc.id === parseInt(id));
    const handleButtonClick = () => {
        alert("Service added");
        history.push("/");
    };
    return (
        <div className="container mx-auto my-10">
            <img className="w-1/2" src={service?.img} alt={service?.name} />
            <div className="pr-6 py-4">
                <div className="font-bold text-xl mb-2">{service?.name}</div>
                <p className="text-gray-700 text-base">
                    {service?.description}
                </p>
            </div>
            <button
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                onClick={handleButtonClick}
            >
                Get The Service
            </button>
        </div>
    );
};

export default BookService;
