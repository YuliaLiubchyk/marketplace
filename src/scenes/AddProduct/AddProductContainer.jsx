import React from 'react';
import AddProductView from './AddProductView';
import { Header } from '../../components/index';
import { connect } from 'react-redux';

function AddProductContainer() {
    return <div>
        <Header theme="dark" />
        <AddProductView />
    </div>

}

export default connect()(AddProductContainer);