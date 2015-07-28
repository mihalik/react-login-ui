import React from 'react';
import Login from '../../lib/index';

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>react-login-ui</h1>
        <h3>Basic Component Example</h3>
        <Login/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('container'));
