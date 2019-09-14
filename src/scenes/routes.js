import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import NotFound from './NotFound/NotFound';
import Inbox from './Inbox/Inbox';
import PrivateRoute from './PrivateRoute';

export const routes = {
    home: "/",
    auth: "/auth",
    login: "/auth/login",
    register: "/auth/register",
    inbox: "/inbox"
};

export function Router() {
    console.log(Auth);
    return (<BrowserRouter>
        <Switch>
            <Route exact path={routes.home} component={Home} />
            <PrivateRoute path={routes.inbox} component={Inbox}/>
            <Auth />
            <Route component={NotFound} />
        </Switch>

    </BrowserRouter>)
}