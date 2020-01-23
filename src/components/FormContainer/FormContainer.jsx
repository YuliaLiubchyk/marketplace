import React, { Component, createContext } from 'react';
import { Button } from '../../components/index';

//TODO:: rewrite on functional component with hook's
export const FormContext = createContext(null);

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = props.initialValue;
        this.handleUpload = props.handleUpload;
    }

    onChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    render() {
        const value = {
            formState: this.state,
            onChange: (name, e) => this.onChange(name, e)
        };

        return <FormContext.Provider value={value}>
            {this.props.children}
            <Button
                onClick={() => this.handleUpload(this.state)}
                labelValue={'Submit'} />
        </FormContext.Provider>
    }

}

export default FormContainer;