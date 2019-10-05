import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Api from '../api';
import {routes} from './routes';
import {connect} from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest}
            render={(props) => {
                return Api.Auth.isLoggedIn
                    ? <Component {...props} />
                    : <Redirect to={routes.login} />
            }}
        />
    )
}

export default connect()(PrivateRoute);