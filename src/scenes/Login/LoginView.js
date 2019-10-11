import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from '../../components/index';
import s from './Login.module.scss';
import {REGISTER} from '../../constants/routesConstants';

function Login({handleLogin, handleFieldChange, isLoading}) {
  const _handleEnterPressed = (e) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  };

  return (<div onKeyDown={_handleEnterPressed}>
    <div className={`${s.container} ${s['form-container']}`}>
      <div className={s.login}>Login</div>
      <Input
        label='email'
        name='email'
        placeholder='Example@gmail.com'
        onChange={handleFieldChange}/>
      <Input
        type='password'
        name='password'
        label='password'
        onChange={handleFieldChange}/>
      <div className={s['button-container']}>
        <div onClick={handleLogin} className={s.button}>
          <span className={s['button-label']}>{isLoading ? 'Loading' : 'Continue'}</span>
        </div>
      </div>
    </div>
    <div className={`${s.container} ${s['register-container']}`}>
      <div className={s['register-text']}>
        <span className={s['footer-text']}>I have no account, </span>
        <Link to={REGISTER} className={`${s['footer-text']} ${s['footer-text-color']}`}>
          REGISTER NOW
        </Link>
      </div>


    </div>
  </div>);
}

export default Login;
