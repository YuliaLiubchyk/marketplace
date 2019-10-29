import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import ProductView from './ProductView';
import s from './ProductView.module.scss';
import { Loading } from '../../components';

const mapStateToProps = (state) => {
    return {
        isLoading: state.products.fetchLatest.isLoading,
        latestProductsList: state.products.latestProducts
    }
};

function ProductModal(props) {
    const history = useHistory();
    const { id } = useParams();
    if (props.isLoading) {
        return <Loading />
    }
    document.body.classList.add('scroll-hidden');

    const back = e => {
        e.stopPropagation();
        history.goBack();
        document.body.classList.remove('scroll-hidden');
    };

    const productClick = e => {
        e.stopPropagation();
    };

    const product = props.latestProductsList.find(product => product.id === id);
    return (<div onClick={back} className={s.background}>
        <div onClick={productClick} className={s.modal}>
            <ProductView product={product} />
        </div>
    </div>)
};

export default connect(mapStateToProps)(ProductModal);