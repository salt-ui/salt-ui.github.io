import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import uppercamelcase from 'uppercamelcase';
import {upperFirstCharactor, removeTingle, mappingNavItem } from '../../../utils';
import { typeOrder } from '../../../constants';


export default ({ sideNav, components, params, types }) => {

  return (
    <div className="aside">
      <ul className="aside-menu">
      { 
        typeOrder.map(type => {
          if(types[type]){
            return (
                <li className="aside-menu-group">
                  <div className="aside-menu-group-title">{type}</div>
                  <ul className="aside-menu-group-list">
                    {
                      types[type].map(list => 
                        <li 
                          key={list.name}
                          className={classnames({
                            'aside-menu-item': true,
                            active: params.component === list.name,
                          })}> 
                          <Link to={`/components/${list.name}`}>
                            { uppercamelcase(removeTingle(list.name))}
                            <span>{ list.zh}</span>
                          </Link>
                        </li>
                      )
                    }
                  </ul>
                </li>
              );
          }else{
            return null;
          }
        })
      }
      </ul>
    </div>
  );

}

