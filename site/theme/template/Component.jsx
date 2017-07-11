import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import { toHTMLText } from 'jsonml.js/lib/html';
import classnames from 'classnames';
import uppercamelcase from 'uppercamelcase';
import Layout from 'uxcore/lib/Layout';


import Wrap from './layout/Wrap';
import Markdown from './components/Markdown';
import Demo from './components/Demo';
import Aside from './components/Aside';
import { removeTinglePrefix } from '../../utils';
import { NAV_MAP } from '../../constants';

const { Left, Right } = Layout;

const parseDemoRaw = (demos) => {

  let ret = Object.keys(demos).map(name => {

    let content = demos[name].content;

    if (content[2] && content[2][0] && content[2][0] === 'ul') {

      let raw = content.splice(2, 1);

      raw = raw[0]
        .filter(d => Array.isArray(d))
        .map(d => d[1][1]);

      let rawMap = {};

      raw.forEach(d => {
        d = d.split(':');
        rawMap[d[0]] = d[1].trim();
        if (d[0] === 'order') {
          rawMap['order'] = Number(rawMap['order']);
        }
      });

      demos[name].raw = rawMap;

    } else {
      demos[name].raw = {
        order: 0,
      }
    }
    demos[name].name = name;

    return demos[name];
  });

  ret.sort((a, b) => a.raw.order - b.raw.order);

  return ret;
};

export default (props) => {
  const { data, pageData, params: { component }, utils } = props;

  const demos = utils.get(data.demos, component) || {};
  const demosList = parseDemoRaw(demos);
  const doc = pageData.index ? pageData.index.content : null;
  const history = pageData.HISTORY.content;
  const title = component === 'tingle-ui' ? 'History' : `${component} - Component`;
  const clearName = removeTinglePrefix(component);

  return (
    <DocumentTitle title={title}>
     <Wrap {...props}>
      <Layout>
        <Left width={230}><Aside components={data.components} /></Left>
        <Right adaptive={true}>
          <div className="ui-main">
            {
              component !== 'tingle-ui' && (
                <div className="ui-main-title">
                  <span className="fn-highlight">{NAV_MAP[clearName].zh}</span>
                  {uppercamelcase(clearName)}
                </div>
              )
            }
            {
              Object.keys(demosList).length > 0 && (
                <Demo demos={demosList} params={component} utils={utils} />
              )
            }
            {
              doc && (
                <Markdown icon="document" title="文档" content={ utils.toReactComponent(doc) } />
              )
            }
            {
              history.length && (
                <Markdown icon="history" title="版本更新" content={ utils.toReactComponent(history) } />
              )
            }
          </div>
        </Right>
        </Layout>
      </Wrap>
    </DocumentTitle>
  );
}

// <CardWrap width="100%">
//               {
//                 doc && (
//                   <Card>
//                     <Markdown icon="doc" title="文档" content={ utils.toReactComponent(doc) } />
//                   </Card>
//                 )
//               }
//               {
//                 history.length && (
//                   <Card>
//                     <Markdown icon="history" title="版本更新" content={ utils.toReactComponent(history) } />
//                   </Card>
//                 )
//               }
//             </CardWrap>

 /*<div>
        {
          params.component !== 'tingle-ui' && (
            <h2 className="component-page-title">
              <a href={`//gitlab.alibaba-inc.com/uxcore/${params.component}`} target="_blank">
              {uppercamelcase(removeTinglePrefix(params.component))}</a>
            </h2>
          )
        }
        {
          Object.keys(demos).length > 0 && (
            <CardWrap width="100%">
              <Card>
                <Demo demos={demos} params={params.component} utils={utils}/>
              </Card>
            </CardWrap>
          )
        }
        <CardWrap width="100%">
          {
            doc && (
              <Card>
                <Markdown icon="doc" title="文档" content={ utils.toReactComponent(doc) } />
              </Card>
            )
          }
          {
            history.length && (
              <Card>
                <Markdown icon="history" title="版本更新" content={ utils.toReactComponent(history) } />
              </Card>
            )
          }
        </CardWrap>
      </div>*/
