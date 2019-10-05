import { handleActions } from '@letapp/redux-actions';
import * as actions from './appActions';

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    error: null
};

export const reducer = handleActions({
    [actions.initialization.start]: (state) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: null
    }),
    [actions.initialization.success]: (state) => ({
        ...state,
        isLoading: false
    }),
    [actions.initialization.error]: (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
        isError: true
    })

}, INITIAL_STATE);
