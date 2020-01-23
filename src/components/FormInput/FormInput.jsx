import React, { useContext } from 'react';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormInput.module.scss';
import UploadArea from './UploadArea.jsx';

const SimpleInput = ({ name, onChange, ...rest }) => <input
    {...rest}
    onChange={(e) => onChange(name, e.target.value)}
/>;

const TextArea = ({ name, onChange, ...rest }) => <textarea
    {...rest}
    onChange={(e) => onChange(name, e.target.value)}
/>;

const childComponents = {
    Input: SimpleInput,
    TextArea: TextArea,
    Upload: UploadArea
}

const FormInput = ({ label, name, type, ...props }) => {
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
                onChange={value.onChange}
                className={s['input-container']} />
        </label>
    </div>
};

export default FormInput;