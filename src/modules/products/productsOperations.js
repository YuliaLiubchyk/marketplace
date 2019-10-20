import * as actions from './productsActions';
import Api from '../../api/index';

export const fetchLatest = () => {
    return async function fetchLatest(dispatch) {
        try {
            dispatch(actions.fetchLatest.start());

            const res = await Api.Products.latest();

            dispatch(actions.fetchLatest.success(res.data));
        } catch (err) {
            dispatch(actions.fetchLatest.error({ message: err.message }));
        }
    }
};
