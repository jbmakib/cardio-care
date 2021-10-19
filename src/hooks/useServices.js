import { useState, useEffect } from "react";

const useServices = (length) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then((res) => res.json())
            .then((data) => setServices(data.slice(0, length)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return services;
};

export default useServices;
