import {Component} from 'react';

export default class TabPane extends Component {
  render() {
    const active = this.props.active || false;
    if (active) {
      return this.props.children;
    }
    return null;
  }
}
