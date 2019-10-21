import React from 'react';
import ProductView from './ProductView';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loading } from '../../components/index';

const mapStateToProps = (state) => {
    return {
        isLoading: state.app.isLoading,
        latestProductsList: state.products.latestProducts
    }
};

function ProductContainer(props) {
    let { id } = useParams();
    if (props.isLoading) {
        return <Loading />
    }
    const product = props.latestProductsList.filter(product => product.id === id);
    return <ProductView product={product} />
};

export default connect(mapStateToProps)(ProductContainer);