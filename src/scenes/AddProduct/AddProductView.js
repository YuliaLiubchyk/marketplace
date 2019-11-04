import React from 'react';
import { FormContainer, FormInput } from '../../components/index';
import Api from '../../api';
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
        placeholder='For example: Iron man suit'
      />
      <FormInput
        name='location'
        label='LOCATION'
        placeholder='For example: Los Angeles, CA'
      />
      <FormInput
        name='description'
        label='DESCRIPTION'
        placeholder='For example: Iron man suit'
      />
      <FormInput
        name='photos'
        label='PHOTOS'
      />
      <FormInput
        name='price'
        label='PRICE'
        placeholder='For example: 1000'
      />
      <div className={s['button-container']}>
        <div className={s.button}>
          <span className={s['button-label']}>Submmit</span>
        </div>
      </div>
    </FormContainer>
  </div>
}

export default AddProduct;
