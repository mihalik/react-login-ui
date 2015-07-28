import React, {Component, PropTypes} from 'react';
import themeable from 'react-themeable';

const defaultTheme = {
  tabs: {
    background: '#F5F6F8',
    borderBottom: '1px solid #CED9EB',
    padding: '0 25px',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.06)',
    listStyleType: 'none'
  },
  tabList: {
    margin: '0',
    padding: '0'
  },
  activeMarker: {
    position: 'relative',
    height: '2px',
    background: '#1ddbf1',
    width: '100%',
    left: '0',
    bottom: '-1px'
  },
  tab: {
    display: 'inline-block'
  },
  tabLink: {
    padding: '15px',
    marginRight: '5px',
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    color: '#688EA7',
    fontWeight: '400'
  },
  tabBody: {
    'margin': '30px 30px 0',
    'position': 'relative',
    'perspective': '0px'
  }
};

export default class TabbedArea extends Component {
  static propTypes = {activeIndex: PropTypes.number}
  static defaultProps = {activeIndex: 0}

  constructor(props, context) {
    super(props, context);
    this.state = {activeIndex: props.activeIndex};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('activeIndex')) {
      this.setState({
        activeIndex: nextProps.activeIndex
      });
    }
  }

  handleClick(index, event) {
    this.setState({
      activeIndex: index
    });
    event.stopPropagation();
    event.preventDefault();
  }

  renderActive(theme, index) {
    if (this.state.activeIndex === index) {
      return (
        <div {...theme(6, 'activeMarker')}></div>
      );
    }
    return null;
  }

  renderTabs(theme) {
    let index = -1;
    return React.Children.map(this.props.children, (child) => {
      index++;
      if (child) {
        return (
          <li key={index} onClick={this.handleClick.bind(this, index)} {...theme(3, 'tab')}>
            <a href='' {...theme(4, 'tabLink')}>{child.props.display}</a>
            {this.renderActive(theme, index)}
          </li>
        );
      }
    });
  }

  renderContent(theme) {
    let index = -1;
    return React.Children.map(this.props.children, (child) => {
      index++;
      if (this.state.activeIndex === index) {
        return (
          <div key={index} {...theme(5, 'tabBody')}>
            {child.props.children}
          </div>
        );
      }
    });
  }

  render() {
    const themeStyle = {...defaultTheme, ...this.props.theme};
    const theme = themeable(themeStyle);
    return (
      <div>
        <div {...theme(1, 'tabs')}>
          <ul {...theme(2, 'tabList')}>
            {this.renderTabs(theme)}
          </ul>
        </div>
        <div className='tab-content'>
          {this.renderContent(theme)}
        </div>
      </div>
    );
  }

}
