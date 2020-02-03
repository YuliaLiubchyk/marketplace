import React, { useState } from 'react';
import { FormContainer, FormInput, Button } from '../../components/index';
import s from './AddProduct.module.scss';
import { useHistory } from 'react-router-dom';

const AddProduct = ({ handleUpload }) => {
  const initialValue = {
    title: '',
    description: '',
    price: 0,
    photos: [],
    location: ''
  };

  const [formState, setFormState] = useState(initialValue);
  const history = useHistory();

  const value = {
    formState: formState,
    onChange: (name, value) => setFormState({ ...formState, [name]: value, })
  };

  return <div className={s.container}>
    <div className={s.title}>Add product</div>
    <FormContainer value={value}>
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
      <Button
        onClick={() => handleUpload(formState, history)}
        labelValue={'Submit'} />
    </FormContainer>
  </div>
}

export default AddProduct;
