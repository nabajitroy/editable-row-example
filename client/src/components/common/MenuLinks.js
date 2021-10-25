import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import LoginForm from '../LoginComponent'
import PrivateRoute from '../common/routes/PrivateRoute';
import PublicRoute from '../common/routes/PublicRoute';
//import ProfileComponent from '../ProfileComponent';
import HomeComponent from '../HomeComponent';

const MenuLinks = ({ component: Component, ...props }) => {
    return (
        <BrowserRouter basename="/ProcureToPayProcess">
            <Switch>
                <PublicRoute restricted={true} component={LoginForm} path="/login" exact />

                <PrivateRoute restricted={true} component={HomeComponent} path="/" exact />
            </Switch>
        </BrowserRouter >
    )
}
export default MenuLinks;
