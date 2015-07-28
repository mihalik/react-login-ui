import React, {Component, PropTypes, findDOMNode} from 'react';
import themeable from 'react-themeable';

import Error from './Error';

const defaultTheme = {};

export default class Create extends Component {

  static propTypes = {
    termsUrl: PropTypes.string,
    createAction: PropTypes.func
  };
  static defaultProps = {termsUrl: '/terms.html'};

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    findDOMNode(this.refs.submitButton).disabled = true;
    const username = findDOMNode(this.refs.email).value.trim().toLowerCase();
    const password = findDOMNode(this.refs.password).value.trim();
    const name = findDOMNode(this.refs.name).value;
    let extras = this.props.createExtras || {};
    extras.name = name;

    if (this.props.createAction) {
      this.props.createAction(username, password, extras);
    }

    findDOMNode(this.refs.submitButton).disabled = false;
  }

  render() {
    const themeStyle = {...defaultTheme, ...this.props.theme};
    const theme = themeable(themeStyle);
    return (
      <div>
        <h2 {...theme(6, 'header')}>New Account</h2>
        <form onSubmit={this.onSubmit}>
          <Error {...this.props}/>
          <input type="text" ref="name" placeholder="Name" {...theme(1, 'textBox')}/>
          <input type="text" ref="email" placeholder="Email Address" {...theme(2, 'textBox')}/>
          <input type="password" ref="password" placeholder="Create Password" {...theme(3, 'textBox')}/>
          <button ref="submitButton" {...theme(4, 'button')}>Sign Up</button>
        </form>
        <div {...theme(5, 'helpText')}>By signing up you agree to our <a href={this.props.termsUrl} {...theme(6, 'link')}>Terms of Service</a></div>
      </div>
    );
  }
}
