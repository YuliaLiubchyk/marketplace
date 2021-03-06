import { createAsyncActions } from '@letapp/redux-actions';

export const fetchLatest = createAsyncActions(
    'products/FETCH_LATEST'
);

export const uploadProduct = createAsyncActions(
    'products/UPLOAD'
);