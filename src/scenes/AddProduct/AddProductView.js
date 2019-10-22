import React from 'react';
import { FormContainer, FormInput } from '../../components/index';
import s from './AddProduct.module.scss';

function AddProduct() {
  const initialValue = {
    title: '',
    description: '',
    price: 0,
    photos: '',
    location: ''
  };

  return <div className={s.container}>
    <FormContainer initialValue={initialValue} >
      <FormInput
        name='title'
        label='TITLE'
      />
      <FormInput
        name='location'
        label='LOCATION'
      />
    </FormContainer>
  </div>
}

export default AddProduct;
