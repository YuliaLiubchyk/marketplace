import { createAsyncActions } from '@letapp/redux-actions';

export const register = createAsyncActions('auth/REGISTER');

export const login = createAsyncActions('auth/LOGIN');

export const logout = createAsyncActions('auth/LOGOUT');