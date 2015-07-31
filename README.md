# React Login UI

First pass on a reusable (and themeable) interaction component for React.

**This project is still early and the interface will likely change.**

## Install

TODO

## Screenshot

![Screenshot](https://cldup.com/gCZ_AYDNkk.png)

## Usage

The login functions and results are provided as properties to the login ui component.  Here is a simplified example.  See the `examples` folder for other examples.

```javascript
React.createClass({

  login(username, password) {
    console.log('Attempted login as ' + username);
    this.setState({loginError: "Unable to login"});
  },

  render() {
    return (
      <Login
        loginAction={this.login}
        errorMessage={this.state.loginError}
      />
    );
  }

});
```

## Override Theme

This project uses [react-themeable](https://github.com/markdalgleish/react-themeable) in an attempt to make it easy to override built-in themes.  React-themable supports a number of different styling mechanisms.  See `theme-css` and `theme-inline` examples for two examples of overriding the default styles for the component.

## Development

This project uses [rackt-cli](https://github.com/mzabriskie/rackt-cli) to eliminate some of the boilerplate around maintaining components.  

```bash
$ npm install -g rackt-cli
```
