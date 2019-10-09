import React, { useState } from 'react';
import { login } from '../../modules/auth/authOperations';
import LoginView from './LoginView';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isLoading: state.auth.login.isLoading
    };
}

const mapDispatchToProps = {
    handleLogin: login
}

function Login({ handleLogin, isLoading}) {
    const [fields, setFields] = useState({ email: '', password: '' });

    return <LoginView
        handleLogin={() => handleLogin(fields)}
        handleFieldChange={(fieldName, value) => setFields({ ...fields, [fieldName]: value })}
        isLoading={isLoading}
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);