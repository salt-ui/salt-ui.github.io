import React from 'react';
import AceEditor from 'react-ace';
import classnames from 'classnames';
import Message from 'uxcore/lib/Message';
import Tooltip from 'uxcore/lib/Tooltip';
import QRCode from 'qrcode.react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { transformCode } from '../../../utils';

export default class DemoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // expand: false
      expand: props.selectIndex === props.index
    }

    // this.transform = this.transform.bind(this);
    this.toggleCode = this.toggleCode.bind(this);
  }

  componentWillReceiveProps(next) {
    if (next.selectIndex !== this.props.index) {
      this.setState({ expand: false });
    }
  }


  onChangeValue(newValue){
    const { data } = this.props;
    this.props.transform({ content: newValue, style: data.style });
  }

  toggleCode(e){
    this.props.toggleFrame(this.props.index);
    this.setState({
      expand: !this.state.expand
    });
  }
  

  render(){
    // const { data, selectIndex, index, showExpandDemo, toggleFrame, utils } = this.props;
    const { data, selectIndex, index, toggleFrame, utils, height, demoUrl } = this.props;
    const { expand } = this.state;

    const demoHeight = data.style ? height * 0.7 : height;

    const paneProps = {
      theme: 'github',
      mode:'jsx',
      width: "100%",
      height: `${demoHeight}px`,
      tabSize: 2,
      fontSize: 13,
      name: "UNIQUE_ID_OF_DIV",
      editorProps: {$blockScrolling: true},
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      value: data.content,
      onChange: this.onChangeValue.bind(this)
    }

    const Gen = () => <AceEditor {...paneProps} />;

    return(
      <div className={classnames('ui-demos-item', 
        {
          'ui-demos-item-expand': expand,
          'ui-demos-item-selected': selectIndex === index,
        })}
      >
        <div className="ui-demos-item-head">
          <CopyToClipboard 
            text={data.content}
            onCopy={() => Message.info('复制成功！')}
            >
            <Tooltip overlay="拷贝代码" placement="bottom">
            <div className="ui-demos-item-btn copy">
              <i className='iconfont icon-fuzhi'/>
            </div>
            </Tooltip>
          </CopyToClipboard>
          <Tooltip
            overlay={
              <div>
              <h4 style={{ margin: '8Px 0 12Px' }}>扫二维码查看演示效果</h4>
              <QRCode size={144} value={demoUrl} />
              </div>
            }
            placement="bottom"
          >
            <div className="ui-demos-item-btn copy">
              <i className='iconfont icon-qrcode'/>
            </div>
          </Tooltip>
          <h3 className="ui-demos-item-title" onClick={e => this.toggleCode(index)}>{data.meta.title}</h3>
        </div>
          {
            expand && (
              <div className="ui-demos-item-editor">
                <div className="gutter-cell " style={{ height: '15px' }}/>
                <Gen />
                <div className="ui-demos-item-css" style={{ height: height - demoHeight }}>{data.style && utils.toReactComponent(data.style)}</div>
              </div>
            )
          }
      </div>
    );
  }
}

// <span className="ui-demos-item-btn expand">
//             <i className='iconfont icon-expand' 
//               onClick={() => showExpandDemo({ 
//                 title: data.name, 
//                 content: data.highlightedCode,
//                 style: data.style ? data.style.highlightedCode : null
//               })}
//             />
//           </span>