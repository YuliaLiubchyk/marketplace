import { handleActions } from '@letapp/redux-actions';
import * as actions from './authActions';

const INITIAL_STATE = {
    login: {
        isLoading: false,
        isError: false,
        error: null
    },
    register: {
        isLoading: false,
        isError: false,
        error: null
    },
    logout: {
        isLoading: false,
        isError: false,
        error: null
    },
    isLoggedIn: false
}

export const reducer = handleActions({
    //register
    [actions.register.start]: (state) => ({
        ...state,
        register: {
            ...state.register,
            isLoading: true,
            isError: false,
            error: null
        }
    }),
    [actions.register.success]: (state) => ({
        ...state,
        register: {
            ...state.register,
            isLoading: false
        },
        isLoggedIn: true
    }),
    [actions.register.error]: (state, action) => ({
        ...state,
        register: {
            ...state.register,
            isLoading: false,
            isError: true,
            error: action.payload
        }
    }),
    //login
    [actions.login.start]: (state) => ({
        ...state,
        login: {
            ...state.login,
            isLoading: true,
            isError: false,
            error: null
        },
        isLoggedIn: false
    }),
    [actions.login.success]: (state) => ({
        ...state,
        login: {
            ...state.login,
            isLoading: false
        },
        isLoggedIn: true
    }),
    [actions.login.error]: (state, action) => ({
        ...state,
        login: {
            ...state.login,
            isLoading: false,
            isError: true,
            error: action.payload
        },
        isLoggedIn: false
    }),
    //logout
    [actions.logout.start]: (state) => ({
        ...state,
        logout: {
            ...state.logout,
            isLoading: true,
            isError: false,
            error: null
        }
    }),
    [actions.logout.success]: (state) => ({
        ...state,
        logout: {
            ...state.logout,
            isLoading: false
        },
        isLoggedIn: false
    }),
    [actions.logout.error]: (state, action) => ({
        ...state,
        logout: {
            ...state.logout,
            isLoading: false,
            isError: true,
            error: action.payload
        },
        isLoggedIn: false
    })
}, INITIAL_STATE);