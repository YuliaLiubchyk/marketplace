import React, { Component, createContext } from 'react';

export const FormContext = createContext(null);

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = props.initialValue;
    }

    onChange(name, e) {
        this.setState({ [name]: e.target.value });
    }

    render() {
        const value = {
            formState: this.state,
            onChange: (name, e) => this.onChange(name, e)
        };

        return <FormContext.Provider value={value}>
            {this.props.children}
        </FormContext.Provider>
    }

}

export default FormContainer;