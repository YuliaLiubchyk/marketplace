import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "./scenes/routes.js";
import Api from './api';

class App extends React.Component {

    constructor(props) {
        super(props);
        Api.init();
    }

    render() {
        return <div>
            <Router />
        </div>
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
