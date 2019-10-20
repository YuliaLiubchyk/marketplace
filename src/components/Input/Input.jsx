import React from 'react';
import s from './Input.module.scss';
import { ReactComponent as ShowPassword } from '../../assets/Shape.svg';

function Input({ label, name, onChange, ...props }) {
    return <div>
        <label>
            <div className={s.label}>{label}</div>
            <div className={s.inputRectangle}>
                <input {...props}
                    onChange={(e) => onChange(name, e.target.value)}
                    className={s.inputRectangle}
                    name={name}>
                </input>
                {/* {props.type === 'password' && <ShowPassword />} */}
            </div>

        </label>

    </div>
}

export default Input;