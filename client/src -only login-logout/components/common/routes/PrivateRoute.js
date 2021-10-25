import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { verifyToken } from '../utilities';
import { useDispatch, useSelector } from 'react-redux';
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector((state) => state.AppReducer);
    return (
        <Route {...rest} render={props => (
            verifyToken() ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;