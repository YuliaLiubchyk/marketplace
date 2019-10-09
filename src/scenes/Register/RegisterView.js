import React from 'react';
import { Input } from '../../components';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import s from './Register.module.scss';

function Register({ handleRegister, handleFieldChange }) {
    return <div>
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
                onChange={handleFieldChange}
            />
            <Input
                label='password'
                name='password'
                type='password'
                onChange={handleFieldChange}
            />
            <Input
                label='password again'
                name='passwordAgain'
                type='password'
                onChange={handleFieldChange}
            />
            <div className={s['button-container']}>
                <button className={s.button} onClick={handleRegister}>
                    Register
            </button>
            </div>
        </div>
        <div className={`${s.container} ${s['login-container']}`}>
            <span>I already have an account, </span>
            <Link to={routes.login}>LOG IN</Link>
        </div>
    </div>
}

export default Register;