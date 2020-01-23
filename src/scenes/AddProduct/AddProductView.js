import React from 'react';
import { FormContainer, FormInput } from '../../components/index';
import s from './AddProduct.module.scss';

function AddProduct({ handleUpload }) {
  const initialValue = {
    title: '',
    description: '',
    price: 0,
    photos: [],
    location: ''
  };

  return <div className={s.container}>
    <div className={s.title}>Add product</div>
    <FormContainer
      initialValue={initialValue}
      handleUpload={handleUpload}>
      <FormInput
        name='title'
        label='TITLE'
        placeholder='For example: Iron man suit'
        maxLength={25}
        type='Input'
      />
      <FormInput
        name='location'
        label='LOCATION'
        placeholder='For example: Los Angeles, CA'
        maxLength={25}
        type='Input'
      />
      <FormInput
        name='description'
        label='DESCRIPTION'
        placeholder='For example: Iron man suit'
        type='TextArea'
      />
      <FormInput
        name='photos'
        label='PHOTOS'
        type='Upload'
      />
      <FormInput
        name='price'
        label='PRICE'
        placeholder='For example: 1000'
        maxLength={10}
        type='Input'
      />
    </FormContainer>
  </div>
}

export default AddProduct;
