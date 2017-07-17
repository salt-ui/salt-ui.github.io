import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Link } from 'react-router';

import Nav from './Nav';
import { NAV_MAP } from '../../../constants';
import { upperFirstCharactor, removeTinglePrefix, mappingNavItem } from '../../../utils';

import 'uxcore/assets/iconfont.css';
// import 'uxcore/assets/orange.min.css';
import '../../static/style.less';

// export default ({ data, children, routeParams, route, params }) => {
export default ({ data: { components }, children, route, params }) => {
  return (
    <div className="kuma-container-full layout-demo-container">
      <Nav route={route} items={components} />
      { children }
    </div>
  );
};


/*
export default class Layout extends Component {

  // static defaultProps = {
  //   hasAside: true,
  // }
  // static propTypes = {
  //   hasAside: React.PropTypes.bool,
  // }

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    const { data: { components } } = this.props;
    let types = {};
    Object.keys(components).map((compName) => {
      let mapItem = mapping[removeTingle(compName)];
      if(mapItem){
        const type = mapItem.type;
        if(!types[type]){
          types[type] = [];
        }

        types[type].push({ ...mapItem, name: compName});
      }
    });

    this.types = types;

  }

  render() {
    const { data, children, routeParams, route, hasAside, params } = this.props;
    console.log(data)
    return (
      <div className={classnames('page-wrap', {
        'hide-aside': !hasAside, 
      })}>

        <Nav route={route} components={data.components} />

        {
          hasAside && 
            <Aside 
              key="aside"
              params={params} 
              components={data.components}
              types={this.types}
              />
        }
        
        <div className="main">
          <div className={classnames({
            content: hasAside,
          })}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}*/

