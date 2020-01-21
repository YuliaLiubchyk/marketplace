import React, { useContext } from 'react';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormInput.module.scss';

function FormInput({ label, name, ...props }) {
    const value = useContext(FormContext);
    return <div>
        <label>
            <div className={s.label}>{label}</div>
            <input {...props}
                value={value.formState[name]}
                name={name}
                onChange={(e) => value.onChange(name, e)}
                className={s.input} />
        </label>
    </div>
}

export default FormInput;

