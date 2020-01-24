import React, { Component, createContext, useState } from 'react';
import { Button } from '../../components/index';
import { useHistory } from 'react-router-dom';

export const FormContext = createContext(null);

const FormContainer = ({ initialValue, handleUpload, children }) => {
    const [formState, setFormState] = useState(initialValue);

    const value = {
        formState: formState,
        onChange: (name, value) => setFormState({ ...formState, [name]: value, })
    };

    const history = useHistory();

    return <FormContext.Provider value={value}>
        {children}
        <Button
            onClick={() => handleUpload(formState, history)}
            labelValue={'Submit'} />
    </FormContext.Provider>

}

export default FormContainer;