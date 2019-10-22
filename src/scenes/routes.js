import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import NotFound from './NotFound/NotFound';
import Inbox from './Inbox/Inbox';
import PrivateRoute from './PrivateRoute';
import ProductContainer from './ProductView/ProductContainer';
import ProductModal from './ProductView/ProductModal';
import { HOME, INBOX, ADD_PRODUCTS, PRODUCT, PROFILE, EDIT_PROFILE } from '../constants/routesConstants';
import AddProductContainer from '../scenes/AddProduct/AddProductContainer';
import ProfileContainer from './Profile/ProfileContainer';
import EditProfileContainer from './EditProfile/EditProfileContainer';

function ModalSwitch() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (<div>
    <Switch location={background || location} >
      <Route exact path={ADD_PRODUCTS} component={AddProductContainer} />
      <Route exact path={HOME} component={Home} />
      <Route exact path={PRODUCT} component={ProductContainer} />
      <PrivateRoute exact path={INBOX} component={Inbox} />
      <PrivateRoute exact path={PROFILE} component={ProfileContainer} />
      <PrivateRoute exact path={EDIT_PROFILE} component={EditProfileContainer} />
      <Auth />
      <Route component={NotFound} />
    </Switch >
    {background && <Route exact path={PRODUCT} children={<ProductModal />} />}

  </div>)
}

export function Router() {
  return (<BrowserRouter>
    <ModalSwitch />
  </BrowserRouter>)
}
