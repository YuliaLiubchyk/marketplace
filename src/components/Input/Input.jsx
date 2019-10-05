import React from 'react';
import s from './Input.module.scss';

function Input({ label, name, onChange, ...props }) {
    return <div>
        <label>
            <div className={s.label}>{label}</div>
            <div className={s.container}>
                <input {...props}
                    onChange={(e) => onChange(name, e.target.value)}
                    className={s.inputRectangle}
                    name={name}>
                </input>
            </div>

        </label>

    </div>
}

export default Input;