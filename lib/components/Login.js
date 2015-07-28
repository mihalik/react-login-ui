import React, {Component, findDOMNode, PropTypes} from 'react';
import themeable from 'react-themeable';

import Error from './Error';

const defaultTheme = {};

export default class Login extends Component {

  static propTypes = {
    loginAction: PropTypes.func,
    switchForgot: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    findDOMNode(this.refs.submitButton).disabled = true;
    const username = findDOMNode(this.refs.username).value.trim().toLowerCase();
    const password = findDOMNode(this.refs.password).value.trim();

    if (this.props.loginAction) {
      this.props.loginAction(username, password);
    }

    findDOMNode(this.refs.submitButton).disabled = false;
  }

  render() {
    const themeStyle = {...defaultTheme, ...this.props.theme};
    const theme = themeable(themeStyle);
    return (
      <div>
        <h2 {...theme(6, 'header')}>Login</h2>
        <form onSubmit={this.onSubmit}>
          <Error {...this.props}/>
          <input type="text" ref="username" placeholder="Email Address" {...theme(4, 'textBox')}/>
          <input type="password" ref="password" placeholder="Password" {...theme(3, 'textBox')}/>
          <button ref="submitButton" {...theme(2, 'button')}>Login</button>
        </form>
        <div {...theme(1, 'helpText')}>
          <a href="#" onClick={this.props.switchForgot} {...theme(5, 'link')}>Forgot your password?</a>
        </div>
      </div>
    );
  }
}
