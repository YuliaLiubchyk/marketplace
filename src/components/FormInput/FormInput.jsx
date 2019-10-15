import React from 'react';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormInput.module.scss';

function FormInput({ label, name, ...props }) {
    return <FormContext.Consumer>
        {({ formState, onChange }) => (
            <div>
                <label>
                    <div>{label}</div>
                    <input {...props}
                        value={formState[name]}
                        name={name}
                        onChange={(e) => onChange(name, e)}>
                    </input>
                </label>
            </div>
        )}
    </FormContext.Consumer>
}

export default FormInput;