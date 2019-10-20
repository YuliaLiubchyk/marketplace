import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import NotFound from './NotFound/NotFound';
import Inbox from './Inbox/Inbox';
import PrivateRoute from './PrivateRoute';
import { HOME, INBOX, ADD_PRODUCTS } from '../constants/routesConstants';
import AddProduct from '../scenes/AddProduct/AddProductView';

export function Router() {
  return (<BrowserRouter>
    <Switch>
      <Route exact path={ADD_PRODUCTS} component={AddProduct} />
      <Route exact path={HOME} component={Home} />
      <PrivateRoute exact path={INBOX} component={Inbox} />
      <Auth />

      <Route component={NotFound} />
    </Switch>

  </BrowserRouter>)
}
