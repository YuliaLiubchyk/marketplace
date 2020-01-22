import React, { useContext } from 'react';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormInput.module.scss';

function SimpleInput(props) {
    return <input {...props} />
}

function TextArea(props) {
    return <textarea {...props} />
}

function UploadArea(props) {
    return <div {...props}>
        <div className={s['upload-container']}>
            <input
                type="file"
                accept=".png, .jpg"
            />
            <hr />
            <hr className={s.horizontal} />
        </div>
    </div>
}

const childComponents = {
    Input: SimpleInput,
    TextArea: TextArea,
    Upload: UploadArea
}

function FormInput({ label, name, type, ...props }) {
    const value = useContext(FormContext);
    const Component = type
        ? childComponents[type]
        : SimpleInput;
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

