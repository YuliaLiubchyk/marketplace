import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Router } from "./scenes/routes.js";
import { store } from './store/createStore';
import * as appOperations from './modules/app/appOperations';

class App extends React.Component {

    constructor(props) {
        super(props);
        props.dispatch(appOperations.init());
    }

    render() {
        console.log("rerender");
        if (this.props.isLoading) {
            return <div>Loading...</div>
        }
        return <div>
            <Router />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.app.isLoading,
        isLoggedIn: state.auth.isLoggedIn
    }
}

const ConnectedApp = connect(mapStateToProps)(App);

const ReduxApp = <Provider store={store}>
    <ConnectedApp />
</Provider>

ReactDOM.render(ReduxApp, document.getElementById('root'));
