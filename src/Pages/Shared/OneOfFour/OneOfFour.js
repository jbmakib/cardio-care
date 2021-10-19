import React from "react";

const OneOfFour = ({ children }) => {
    return (
        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
            {children}
        </div>
    );
};

export default OneOfFour;
