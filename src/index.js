import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Router } from "./scenes/routes.js";
import { store } from './store/createStore';
import * as appOperations from './modules/app/appOperations';
import s from './Index.module.scss';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(appOperations.init());
  }

  render() {
    if (this.props.isLoading) {
      return <div className={s.roller}><div /><div /><div /><div /><div /><div /><div /><div /></div>
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
};

const ConnectedApp = connect(mapStateToProps)(App);

const ReduxApp = <Provider store={store}>
  <ConnectedApp />
</Provider>;

ReactDOM.render(ReduxApp, document.getElementById('root'));
