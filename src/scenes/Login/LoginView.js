import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/index';
import s from './Login.module.scss';
import { routes } from '../routes';

function Login({ handleLogin, handleFieldChange, isLoading }) {
    return (<div>
        <div className={`${s.container} ${s['form-container']}`}>
            <div className={s.login}>Login</div>
            <Input
                label='email'
                name='email'
                placeholder='Example@gmail.com'
                onChange={handleFieldChange} />
            <Input
                type='password'
                name='password'
                label='password'
                onChange={handleFieldChange} />
            <div className={s['button-container']}>
                <button onClick={handleLogin} className={s.button}>
                  <span className={s['button-label']}>{isLoading ? 'Loading' : 'Continue'}</span>
                </button>
            </div>
        </div>
        <div className={`${s.container} ${s['register-container']}`}>
            <span className={s['footer-text']}>I have no account, </span>
            <Link to={routes.register} className={`${s['footer-text']} ${s['footer-text-color']}`}>
              REGISTER NOW
            </Link>
        </div>
    </div>);
}

export default Login;
