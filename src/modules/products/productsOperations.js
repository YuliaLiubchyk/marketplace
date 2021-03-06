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

export const uploadProduct = (body) => {
    return async function uploadProduct(dispatch) {
        try {
            dispatch(actions.uploadProduct.start());
            await Api.Products.upload(body);
            dispatch(actions.uploadProduct.success());
        } catch (err) {
            dispatch(actions.uploadProduct.error({ message: err.message }));
        }
    }
};
