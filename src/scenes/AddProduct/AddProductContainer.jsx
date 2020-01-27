import React from 'react';
import AddProductView from './AddProductView';
import { uploadProduct } from '../../modules/products/productsOperations'
import { Header, Loading } from '../../components/index';
import { connect } from 'react-redux';
import s from './AddProduct.module.scss';

const mapStateToProps = (state) => {
    return {
        isLoading: state.products.uploadProduct.isLoading
    }
};

const mapDispatchToProps = {
    handleUpload: uploadProduct
};

function AddProductContainer({ handleUpload, isLoading }) {
    return <div>
        <Header theme="dark" />
        <AddProductView handleUpload={handleUpload} />
        {isLoading &&
            <div className={s.background}>
                <Loading />
            </div>
        }
    </div>

}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);