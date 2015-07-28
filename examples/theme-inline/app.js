import React from 'react';
import ReactLoginUI from '../../lib/index';

const styles = {
  dialog: {
    backgroundColor: '#ccc',
    border: '1px solid #bbb',
    borderRadius: '4px',
    width: '420px',
    margin: '1em auto'
  },
  tabs: {
    display: 'none'
  },
  header: {
    display: 'none'
  }
};

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>react-login-ui</h1>
        <h3>Inline Styles Example</h3>
        <ReactLoginUI theme={styles} termsUrl="http://www.example.com/terms"/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('container'));
