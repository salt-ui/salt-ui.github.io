import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'salt-icon';
import nattyFetch from 'natty-fetch';


import { transformCode } from '../../utils';

const ARGS = 'ReactDOM, React, SaltUI, mountNode, require';


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
      const oldHref = ele.getAttribute('href');
      const href = oldHref.replace(/\/(\w+?)\.min\.css/, `/${themeMap[event.data.theme]}.min.css`);

      ele.setAttribute('href', href);
    } else {
      this.renderCode(event.data.code);
    }
  }

  renderCode(data) {
    const mount = this.mountNode;
    // TODO, use babel-plugin to import
    window.SaltUI.Icon = Icon;
    const require = (dep) => {
      const saltuiComp = dep.match(/saltui\/lib\/(.*)/);
      if (saltuiComp) {
        return SaltUI[saltuiComp[1]];
      }
      const saltIcon = dep.match(/salt-icon\/lib\/(.*)/);
      if (saltIcon) {
        return Icon[saltIcon[1]];
      }
      if (dep === 'saltui') {
        return SaltUI;
      }
      if (dep === 'salt-icon') {
        return Icon;
      }
      if (dep === 'natty-fetch') {
        return nattyFetch;
      }
      return null;
    };
    const copms = [ReactDOM, React, window.SaltUI, mount, require];
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
        <div ref={(c) => { this.mountNode = c; }} />
      </div>
    );
  }
}
