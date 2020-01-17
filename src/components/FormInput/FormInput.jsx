import React from 'react';
import { FormContext } from '../FormContainer/FormContainer';
import s from './FormInput.module.scss';

//TODO:: use 'useContext' hook instead of 'Consumer'
function FormInput({ label, name, ...props }) {
    return <FormContext.Consumer>
        {({ formState, onChange }) => (
            <div>
                <label>
                    <div className={s.label}>{label}</div>
                    <input {...props}
                        value={formState[name]}
                        name={name}
                        onChange={(e) => onChange(name, e)}
                        className={s.input}/>
                </label>
            </div>
        )}
    </FormContext.Consumer>
}

export default FormInput;