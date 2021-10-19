import React from "react";
import { Route, Redirect } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="text-3xl text-center mt-20 font-bold text-red-500">
                Loading data from server please wait
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: location } }}
                    ></Redirect>
                )
            }
        ></Route>
    );
};

export default PrivateRoute;
