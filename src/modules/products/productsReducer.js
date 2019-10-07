import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
    fetchLatest: {
        isLoading: false,
        isError: false,
        error: null
    },
    products: null
}

export const reducer = handleActions({
    [actions.fetchLatest.start]: (state) => ({
        ...state,
        fetchLatest: {
            ...state.fetchLatest,
            isLoading: true,
            isError: false,
            error: null
        }
    }),
    [actions.fetchLatest.success]: (state, action) => ({
        ...state,
        fetchLatest: {
            ...state.fetchLatest,
            isLoading: false
        },
        products: action.payload
    }),
    [actions.fetchLatest.error]: (state, action) => ({
        ...state,
        fetchLatest: {
            ...state.fetchLatest,
            isLoading: false,
            isError: true,
            error: action.payload
        }
    })
}, INITIAL_STATE);