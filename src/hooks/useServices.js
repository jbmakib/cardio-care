import { useState, useEffect } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return services;
};

export default useServices;
