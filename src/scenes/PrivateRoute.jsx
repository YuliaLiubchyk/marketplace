import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Api from '../api';
import {LOGIN} from '../constants/routesConstants';
import {connect} from 'react-redux';

function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route {...rest}
           render={(props) => {
             return Api.Auth.isLoggedIn
               ? <Component {...props} />
               : <Redirect to={LOGIN}/>
           }}
    />
  )
}

export default connect()(PrivateRoute);
