import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import Wrap from './layout/Wrap';

export default (props) => {
  // console.log(props);
  return (
    <DocumentTitle title="Not Found">
      <Wrap {...props}>
        <h1>404 Not Found!</h1>
      </Wrap>
    </DocumentTitle>
  );
}
