import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from "../Login/LoginContainer";
import Register from "../Register/RegisterContainer";
import { Header, Footer } from "../../components/index.js";
import { HOME, AUTH, LOGIN, REGISTER } from "../../constants/routesConstants";
import Api from "../../api";
import { connect } from 'react-redux';

function Auth() {
    return (
        <Route path={AUTH} >
            <Header theme="light" />
            <Switch>
                {Api.Auth.isLoggedIn && <Redirect to={HOME} />}
                <Route path={LOGIN} component={Login} />
                <Route path={REGISTER} component={Register} />
            </Switch>
            <Footer />
        </Route>
    );
}

export default connect()(Auth);
