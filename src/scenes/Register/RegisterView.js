import React from 'react';
import { Input, Button } from '../../components/index';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../constants/routesConstants';
import s from './Register.module.scss';

function Register({ handleRegister, handleFieldChange }) {
  const _handleEnterPressed = (e) => {
    if (e.key === 'Enter') {
      handleRegister()
    }
  };

  return <div onKeyDown={_handleEnterPressed} className={s['main-container']}>
    <div className={`${s.container} ${s['form-container']}`}>
      <div className={s.register}>Register</div>
      <Input
        label='email'
        name='email'
        placeholder='Example@gmail.com'
        onChange={handleFieldChange}
      />
      <Input
        label='full name'
        name='fullName'
        placeholder='Tony Stark'
        onChange={handleFieldChange}
      />
      <Input
        label='password'
        name='password'
        type='password'
        isShowProperty={true}
        onChange={handleFieldChange}
      />
      <Input
        label='password again'
        name='passwordAgain'
        type='password'
        isShowProperty={true}
        onChange={handleFieldChange}
      />
      <Button
        labelValue={'Register'}
        onClick={handleRegister}
      />
    </div>
    <div className={`${s.container} ${s['login-container']}`}>
      <div className={s['login-text']}>
        <span className={s['footer-text']}>I already have an account, </span>
        <Link to={LOGIN} className={`${s['footer-text']} ${s['footer-text-color']}`}>LOG IN</Link>
      </div>

    </div>
  </div>
}

export default Register;
