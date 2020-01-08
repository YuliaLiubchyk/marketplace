import React from 'react';
import s from './Input.module.scss';

function SimpleInput({ name, onChange, ...props }) {
    return <input {...props}
        onChange={(e) => onChange(name, e.target.value)}
        className={s.inputRectangle}
        name={name} />
};

export default SimpleInput;
