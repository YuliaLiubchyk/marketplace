import * as actions from './authActions';
import Api from '../../api/index';
import {fetchViewer} from '../viewer/viewerActions';

export const register = (body) => {
  return async function register(dispatch) {
    try {
      dispatch(actions.register.start());

      const res = await Api.Auth.register(body);
      const {user, token} = res.data;
      Api.Auth.setToken(token);
      dispatch(fetchViewer.success(user));

      dispatch(actions.register.success());
    } catch (err) {
      dispatch(actions.register.error({message: err.message}));
    }
  }
};

export const login = (body) => {
  return async function login(dispatch) {
    try {
      dispatch(actions.login.start());

      const res = await Api.Auth.login(body);
      const {user, token} = res.data;
      Api.Auth.setToken(token);
      dispatch(fetchViewer.success(user));

      dispatch(actions.login.success());
    } catch (err) {
      dispatch(actions.login.error({message: err.message}));
    }
  }
};

export const logout = () => {
  return async function logout(dispatch) {
    try {
      dispatch(actions.logout.start());

      Api.Auth.logout();

      dispatch(actions.logout.success());
    } catch (err) {
      dispatch(actions.logout.error({message: err.message}));
    }
  }
};
