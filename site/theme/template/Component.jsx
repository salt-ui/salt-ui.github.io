import React from 'react';
import DocumentTitle from 'react-document-title';
import uppercamelcase from 'uppercamelcase';
import Layout from 'uxcore/lib/Layout';


import Wrap from './layout/Wrap';
import Markdown from './components/Markdown';
import Demo from './components/Demo';
import Aside from './components/Aside';
import { NAV_MAP } from '../../constants';

const { Left, Right } = Layout;

const parseDemoRaw = (demos) => {
  const ret = Object.keys(demos).map((name) => {
    const content = demos[name].content;

    if (content[2] && content[2][0] && content[2][0] === 'ul') {
      let raw = content.splice(2, 1);

      raw = raw[0]
        .filter(d => Array.isArray(d))
        .map(d => d[1][1]);

      const rawMap = {};

      raw.forEach((d) => {
        d = d.split(':');
        rawMap[d[0]] = d[1].trim();
        if (d[0] === 'order') {
          rawMap.order = Number(rawMap.order);
        }
      });

      demos[name].raw = rawMap;
    } else {
      demos[name].raw = {
        order: 0,
      };
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
  const history = pageData.HISTORY ? pageData.HISTORY.content : [];
  const title = component === 'tingle-ui' ? 'History' : `${component} - Component`;

  return (
    <DocumentTitle title={title}>
      <Wrap {...props}>
        <Layout>
          <Left width={230}><Aside components={data.components} /></Left>
          <Right adaptive>
            <div className="ui-main">
              {
              component !== 'tingle-ui' && (
                <div className="ui-main-title">
                  <span className="fn-highlight">{NAV_MAP[component].zh}</span>
                  {uppercamelcase(component)}
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
                <Markdown icon="document" title="文档" content={utils.toReactComponent(doc)} />
              )
            }
              {
              history.length ? (
                <Markdown icon="history" title="版本更新" content={utils.toReactComponent(history)} />
              ) : null
            }
            </div>
          </Right>
        </Layout>
      </Wrap>
    </DocumentTitle>
  );
};
