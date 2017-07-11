import React from 'react';
import DocumentTitle from 'react-document-title';
import classnames from 'classnames';

export default (props) => {
  const { data, pageData, params, utils } = props;
  console.log('in kitchen')
  let demos = utils.get(utils.get(data.demos, params.component) || {}, params.name) || {};
  // return(<div/>)
      // {utils.toReactComponent(demos.preview)}
  return (
    <DocumentTitle title={`${params.component} - Component`}>
    <div>{`${params.component} - Component`}</div>
    </DocumentTitle>
  );
}
