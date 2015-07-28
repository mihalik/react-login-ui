import React from 'react';
import ReactLoginUI from '../../lib/index';

const styles = {
  dialog: 'ReactLoginUI--dialog',
  button: 'ReactLoginUI--button',
  textBox: 'ReactLoginUI--text-box'
};

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>react-login-ui</h1>
        <h3>CSS Styles Example</h3>
        <ReactLoginUI theme={styles} termsUrl="http://www.example.com/terms"/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('container'));
