import React from 'react';
import s from './Input.module.scss';

function Input({ label, name, onChange, ...props }) {
    return <div>
        <label>
            <div className={s.label}>{label}</div>
            <input {...props}
                onChange={(e) => onChange(name, e.target.value)}
                className={s.inputRectangle}
                name={name} />
        </label>
    </div>
}

export default Input;