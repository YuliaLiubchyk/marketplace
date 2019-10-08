import * as actions from './appActions';
import Api from '../../api';
import { fetchViewer } from '../viewer/viewerOperations';
import {fetchLatest} from "../products/productsOperations";

export const init = () => {
    return async function initThunk(dispatch) {
        try {
            dispatch(actions.initialization.start());
            Api.init();
            if (Api.Auth.isLoggedIn) {
                await dispatch(fetchViewer());
            }
            await dispatch(fetchLatest());
            dispatch(actions.initialization.success());
        } catch (err) {
            dispatch(actions.initialization.error({ message: err.message }));
        }
    }
};
