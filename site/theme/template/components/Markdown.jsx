import React from 'react';
import classnames from 'classnames';

export default ({content, title, icon}) => {
  return (
    <div className="ui-doc">
      <div className="ui-doc-title fn-highlight">
        <i className={classnames('iconfont', `icon-${icon}`)}></i>{title}
      </div>
      <div className="ui-doc-content">
        { content }
      </div>
    </div>
  );
}
