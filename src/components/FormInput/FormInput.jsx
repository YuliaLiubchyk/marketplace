import React, { useContext } from 'react';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormInput.module.scss';

function SimpleInput(props) {
    return <input {...props} />
}

function TextArea(props) {
    return <textarea {...props} />
}

const ChildComponents = {
    Input: SimpleInput,
    TextArea: TextArea
}

function FormInput({ label, name, type, ...props }) {
    const value = useContext(FormContext);
    const Component = ChildComponents[type];
    return <div>
        <label>
            <div className={s.label}>{label}</div>
            <Component {...props}
                value={value.formState[name]}
                name={name}
                onChange={(e) => value.onChange(name, e)}
                className={s['input-container']} />
        </label>
    </div>
}

export default FormInput;

