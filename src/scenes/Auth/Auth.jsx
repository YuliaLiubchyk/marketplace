import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Header, Footer } from "../../components/index.js";
import { routes } from "../routes.js";
import Api from "../../api";

function Auth() {
    return (<Route path={routes.auth} >
        <Header theme="light" />
        <Switch>
            {Api.Auth.isLoggedIn && <Redirect to={routes.home} />}
            <Route path={routes.login} component={Login} />
            <Route path={routes.register} component={Register} />
        </Switch>
        <Footer />
    </Route>
    );
}

export default Auth;