import React, {Component, findDOMNode, PropTypes} from 'react';
import themeable from 'react-themeable';

import Error from './Error';

const defaultTheme = {};

export default class Create extends Component {

  static propTypes = {
    forgotAction: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    findDOMNode(this.refs.submitButton).disabled = true;
    const username = findDOMNode(this.refs.email).value.trim().toLowerCase();

    if (this.props.forgotAction) {
      this.props.forgotAction(username);
    }

    findDOMNode(this.refs.submitButton).disabled = false;
  }

  render() {
    const themeStyle = {...defaultTheme, ...this.props.theme};
    const theme = themeable(themeStyle);
    return (
      <div>
        <h2 {...theme(6, 'header')}>Forgot Password</h2>
        <form onSubmit={this.handleSubmit}>
          <Error {...this.props}/>
          <input type="text" ref="username" placeholder="Email Address" {...theme(1, 'textBox')}/>
          <button ref="submitButton" {...theme(2, 'button')}>Send Recovery Email</button>
        </form>
        <div {...theme(3, 'helpText')}>
          <p>An email will be sent to your email address to allow you to reset your password</p>
        </div>
      </div>
    );
  }
}
