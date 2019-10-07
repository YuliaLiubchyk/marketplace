import React, { useState } from 'react';
import RegisterView from './RegisterView';
import { connect } from 'react-redux';
import { register } from '../../modules/auth/authOperations';

const mapStateToProps = (state) => {
    return {
        isLoading: state.auth.register.isLoading
    };
}

const mapDispatchToProps = {
    handleRegister: register
}

function Register({ handleRegister }) {
    const [fields, setFields] = useState({
        email: '',
        fullName: '',
        password: ''
    });
    return <RegisterView
        handleRegister={() => handleRegister(fields)}
        handleFieldChange={(fieldName, value) => setFields({ ...fields, [fieldName]: value })}
    />

}

export default connect(mapStateToProps, mapDispatchToProps)(Register);