import React from 'react';
import Login from '../../lib/index';


let App = React.createClass({

  getInitialState() {
    return {user: null};
  },

  login(username, password) {
    console.log('Login: ' + username + ' ' + password);
    if (username === 'react') {
      this.setState({user: 'react'});
    } else {
      this.refs.login.setErrorMessage('Username must be \'react\'');
    }
  },

  create(email, password, extras) {
    console.log('Creating: ' + email + ' ' + password + ' ' + extras);
  },

  forgot(email) {
    console.log('Forgot: ' + email);
  },

  renderLogin() {
    if (!this.state.user) {
      return (
        <Login
          ref="login"
          loginAction={this.login}
          createAction={this.create}
          forgotAction={this.forgot}
        />
      );
    }
    return null;
  },

  renderPage() {
    if (this.state.user) {
      return (
        <div>Welcome, {this.state.user}</div>
      );
    }
    return null;
  },

  render() {
    return (
      <div className="example">
        <h1>react-login-ui</h1>
        <h3>Auth Hooks Example</h3>
        {this.renderLogin()}
        {this.renderPage()}
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('container'));
