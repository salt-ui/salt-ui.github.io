/**
 * Tab Component for tingle
 * @author zhangshun
 *
 * Modified by quanyun.ma @ NOV. 16, 2015
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const Context = require('tingle-context');
const classnames = require('classnames');
const Scroller = require('tingle-scroller');

const TabItem = require('./TabItem');

class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: props.index
        }
    }

    componentDidMount() {
        // 计算宽度和滚动
        let t = this;
        if (!t.props.scroll) {
            return;
        }
        let w = 0;
        let scrollEl = React.findDOMNode(t.refs.scroll);
        let chNodes = scrollEl.childNodes;
        for (let i = 0, l = chNodes.length; i < l; i++) {
            w += chNodes[i].offsetWidth + 1;
        }

        scrollEl.style.width = w + "px";
        // 实例化滚动
        t.refs.head.scroller.refresh();
    }

    componentWillReceiveProps(nextProps) {
        let t = this;
        if (nextProps.index !== t.state.index) {
            t.setState({
                index: nextProps.index
            });
        }
    }

    handleChange(index, data, e) {
        let t = this;
        let preIndex = t.state.index;
        t.setState({
            index: index
        });
        t.props.onChange({
            index: index,
            preIndex: preIndex,
            data: data,
            e: e
        });
    }

    render() {
        let t = this;
        let _className = classnames({
            'tTab': true,
            [t.props.className]: !!t.props.className
        });
        return (<div className={_className}>
            {t._renderHead()}
            {t._renderBody()}
        </div>)
    }

    _renderHead() {
        let t = this;
        if (t.props.scroll) {
            return <Scroller className="tTabHead" scrollX={true} scrollY={false} ref="head">
                {t._renderHeadContent(true, t)}
            </Scroller>
        } else {
            return <div className="tTabHead" ref="head">
                {t._renderHeadContent(false, t)}
            </div>

        }
    }

    _renderHeadContent(scroll, t) {
        return <div className={classnames({
            'tTabHeadScroll': scroll,
            'tTabHeadContainer tCL': true,
            'tFBH': !scroll
        })} ref="scroll">
                {
                    React.Children.map(t.props.children, (child, index) => {
                        let _className = classnames({
                            'tTabHeadItem tFAC': true,
                            'tFL': scroll,
                            'tFB1': !scroll,
                            'active': t.state.index == index
                        });
                        return <div className={_className} key={index} index={index}  onClick={t.handleChange.bind(t, index, child.props.data)} >
                            <span>{child.props.title}</span>
                        </div>
                    })
                    }
        </div>

    }

    _renderBody() {
        let t = this;
        return (
            <div className="tTabBody">
        {
            React.Children.map(t.props.children, (child, index) => {
                let _className = classnames({
                    'tTabBodyItem': true,
                    'tHide': !(t.state.index == index)
                });
                return <div className={_className} key={index} index={index} >{child}</div>
            })
            }
            </div>
        );
    }
}

Tab.defaultProps = {
    index: 0,
    onChange: Context.noop,
    scroll: false
};

// http://facebook.github.io/react/docs/reusable-components.html
Tab.propTypes = {
    index: React.PropTypes.number,
    onChange: React.PropTypes.func,
    scroll: React.PropTypes.bool
};

Tab.item = TabItem;
Tab.displayName = 'Tab';

module.exports = Tab;

