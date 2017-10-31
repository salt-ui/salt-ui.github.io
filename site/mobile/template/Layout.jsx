import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'salt-icon';


import { transformCode } from '../../utils';

const ARGS = 'ReactDOM, React, SaltUI, mountNode';


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeFlag: 0,
    };
    this.receiveMessage = this.receiveMessage.bind(this);
    this.renderCode = this.renderCode.bind(this);
  }

  componentDidMount() {
    const { data: { demos }, params: { demo, name } } = this.props;
    const data = demos[demo][name].content;
    if (data.length > 2) {
      const style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = data[2][2][1];
      document.getElementsByTagName('head').item(0).appendChild(style);
    }
    this.renderCode(transformCode(data[1][2][1]).code);
    window.addEventListener('message', this.receiveMessage);
  }

  shouldComponentUpdate() {
    return false;
  }


  receiveMessage(event) {
    if (event.data.theme) {
      const themeMap = {
        blue: 'dd',
        orange: 'salt-ui',
      };
      console.log('change theme');
      const ele = document.getElementById('mobile-theme');
      const href = `https://g.alicdn.com/platform/saltui/3.1.7/${themeMap[event.data.theme]}.min.css`;

      ele.setAttribute('href', href);
    } else {
      this.renderCode(event.data.code);
    }
  }

  renderCode(data) {
    const mount = this.refs.mountNode;
    // TODO, use babel-plugin to import
    winddow.SaltUI.Icon = Icon;
    const copms = [ReactDOM, React, window.SaltUI, mount];
    try {
      const f = new Function(ARGS, data);
      f(...copms);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <div ref="mountNode" />
      </div>
    );
  }
}
