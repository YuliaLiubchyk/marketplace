import React, { createContext } from 'react';

export const FormContext = createContext(null);

const FormContainer = ({ value, children }) => {
    return <FormContext.Provider value={value}>
        {children}
    </FormContext.Provider>
}

export default FormContainer;