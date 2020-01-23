import React from 'react';
import AddProductView from './AddProductView';
import { uploadProduct } from '../../modules/products/productsOperations'
import { Header } from '../../components/index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isLoading: state.products.uploadProduct.isLoading
    }
};

const mapDispatchToProps = {
    handleUpload: uploadProduct
};

function AddProductContainer({handleUpload}) {
    return <div>
        <Header theme="dark" />
        <AddProductView handleUpload={handleUpload}/>
    </div>

}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);