import React from 'react';
import AddProductView from './AddProductView';
import { connect } from 'react-redux';

function AddProductContainer() {
    return <AddProductView />

}

export default connect()(AddProductContainer);