import React from "react";
import Service from "../Service/Service";
import useServices from "../../../hooks/useServices";

const Services = ({ items }) => {
    const services = useServices(items);

    return (
        <>
            <h2 className="text-5xl text-red-500 font-bold text-center mt-4">
                Our Services
            </h2>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {services.map((service) => (
                    <Service key={service.id} service={service} />
                ))}
            </div>
        </>
    );
};

export default Services;
