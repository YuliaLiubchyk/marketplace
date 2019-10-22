import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import ProductView from './ProductView';
import s from './ProductView.module.scss';

const mapStateToProps = (state) => {
    return {
        latestProductsList: state.products.latestProducts
    }
};

function ProductModal({ latestProductsList }) {
    const history = useHistory();
    const { id } = useParams();
    document.body.classList.add('scroll-hidden');

    const back = e => {
        e.stopPropagation();
        history.goBack();
        document.body.classList.remove('scroll-hidden');
    };

    const product = latestProductsList.find(product => product.id === id);
    return (<div onClick={back} className={s.background}>
        <div className={s.modal}>
            <ProductView product={product} />
        </div>
    </div>)
};

export default connect(mapStateToProps)(ProductModal);