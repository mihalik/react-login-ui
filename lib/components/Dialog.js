import React, {Component, PropTypes} from 'react';
import themeable from 'react-themeable';

import TabbedArea from './TabbedArea';
import TabPane from './TabPane';
import Login from './Login';
import Forgot from './Forgot';
import Create from './Create';

const defaultTheme = {
  dialog: {
    backgroundColor: '#fff',
    width: '320px',
    margin: '3em auto',
    boxShadow: '0px 1px 8px #BEBEBE'
  },
  textBox: {
    boxSizing: 'border-box',
    display: 'block',
    margin: '15px 0px',
    width: '100%',
    padding: '6px 12px',
    color: '#555',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    lineHeight: '1.5',
    fontSize: '14px'
  },
  button: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#428bca',
    borderColor: '#357ebd',
    borderRadius: '4px',
    border: '1px solid transparent',
    display: 'inline-block',
    marginBottom: '0',
    fontWeight: '400',
    lineHeight: '1.5',
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    padding: '6px 12px',
    fontSize: '14px'
  },
  helpText: {
    marginTop: '15px',
    paddingBottom: '10px',
    textAlign: 'center'
  },
  link: {
    color: '#428bca',
    textDecoration: 'none'
  }
};

export default class Dialog extends Component {

  static propTypes = {
    termsUrl: PropTypes.string,
    defaultTab: PropTypes.string,
    createAction: PropTypes.func,
    loginAction: PropTypes.func,
    forgotAction: PropTypes.func,
    createExtras: PropTypes.object
  }
  static defaultProps = { defaultTab: 'login' };
  state = {selectedTab: this.props.defaultTab};

  constructor(props) {
    super(props);
    this.switchForgot = this.switchForgot.bind(this);
  }

  nameToIndex(state) {
    const si = {
      'login': 0,
      'create': 1,
      'forgot': 2
    };
    return si[state];
  }

  renderForgot() {
    return null;
  }

  switchForgot() {
    this.setState({selectedTab: 'forgot'});
  }

  renderForgot(themeStyle) {
    if (this.state.selectedTab === 'forgot') {
      return (
        <TabPane display="Forgot" theme={themeStyle}>
          <Forgot
            errorMessage={this.props.errorMessage}
            forgotAction={this.props.forgotAction}
            theme={themeStyle}
          />
        </TabPane>
      );
    }
    return null;
  }

  render() {
    const tabIndex = this.nameToIndex(this.state.selectedTab);
    const themeStyle = {...defaultTheme, ...this.props.theme};
    const theme = themeable(themeStyle);
    return (
      <div {...theme(1, 'dialog')}>
        <TabbedArea activeIndex={tabIndex} theme={themeStyle}>
          <TabPane display="Login" theme={themeStyle}>
            <Login
              errorMessage={this.props.errorMessage}
              loginAction={this.props.loginAction}
              switchForgot={this.switchForgot}
              theme={themeStyle}
            />
          </TabPane>
          <TabPane display="Sign Up" theme={themeStyle}>
            <Create
              errorMessage={this.props.errorMessage}
              termsUrl={this.props.termsUrl}
              createAction={this.props.createAction}
              createExtras={this.props.createExtras}
              theme={themeStyle}
            />
          </TabPane>
          {this.renderForgot(themeStyle)}
        </TabbedArea>
      </div>
    );
  }

}
