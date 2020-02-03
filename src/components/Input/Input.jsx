import React from 'react';
import s from './Input.module.scss';
import SimpleInput from './SimpleInput';
import PasswordInput from './PasswordInput';


function Input({ label, name, onChange, isShowProperty, ...props }) {
    return <div className={s.container}>
        <label className={s.label}>
            {label}
            {isShowProperty
                ? <PasswordInput name={name} onChange={onChange} {...props} />
                : <SimpleInput name={name} onChange={onChange} {...props} />}
        </label>
    </div>
}

export default Input;