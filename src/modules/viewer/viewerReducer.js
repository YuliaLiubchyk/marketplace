import { handleActions } from '@letapp/redux-actions';
import * as actions from './viewerActions';

const INITIAL_STATE = {
    fetchViewer: {
        isLoading: false,
        isError: false,
        error: null
    },
    user: null
};

export const reducer = handleActions({
    [actions.fetchViewer.start]: (state) => ({
        ...state,
        fetchViewer: {
            ...state.fetchViewer,
            isLoading: true,
            isError: false,
            error: null
        }
    }),
    [actions.fetchViewer.success]: (state, action) => ({
        ...state,
        fetchViewer: {
            ...state.fetchViewer,
            isLoading: false
        },
        user: action.payload
    }),
    [actions.fetchViewer.error]: (state, action) => ({
        ...state,
        fetchViewer: {
            ...state.fetchViewer,
            isLoading: false,
            isError: true,
            error: action.payload
        }
    })
}, INITIAL_STATE);
