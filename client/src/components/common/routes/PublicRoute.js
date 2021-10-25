import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { verifyToken } from '../utilities';
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            verifyToken() && restricted ?
                <Redirect to="/" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;


