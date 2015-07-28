import React, {Component} from 'react';
import themeable from 'react-themeable';

const defaultTheme = {
  error: {
    color: 'red'
  }
};

export default class Error extends Component {
  render() {
    const themeStyle = {...defaultTheme, ...this.props.theme};
    const theme = themeable(themeStyle);
    const error = this.props.errorMessage;
    if (!error) {
      return null;
    }
    return (
      <div {...theme(1, 'error')}>{error}</div>
    );
  }
}

