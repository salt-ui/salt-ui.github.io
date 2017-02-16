/**
 * Scroller Component Demo for tingle
 * @author gbk
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var classnames = require('classnames');

// NOTE: 定制版的iscroll, 在原版iscroll-zoom的基础上加入了zoom事件
var IScroll = require('./iscroll');

class Scroller extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var t = this;

        // 根节点的dom引用
        t.el = React.findDOMNode(t.refs.root);

        // 初始化 iscroll
        t.initScroll();
    }

    componentDidUnMount() {

        // 销毁 iscroll
        this.scroller.destroy();
    }

    componentDidUpdate() {

        var t = this;

        // 避免很频繁的调用
        clearTimeout(t._timeout);
        t._timeout = setTimeout(function () {

            // 有些场景下不需要刷新
            if (t.props.autoRefresh) {

                // 更新 iscroll
                t.scroller.refresh();
            }
        }, 10);
    }

    render() {
        var t = this;

        // iscroll 需要一个 wrapper，所以里面多加了一层 div
        return (
            <div className={classnames('tScroller', {
                [t.props.className]: !!t.props.className
            })} ref="root">
                <div className="tDIB" style={{minWidth: t.props.minWidth}}>{this.props.children}</div>
            </div>
        );
    }

    initScroll() {
        var t = this;

        // 参数过滤，onXxx 是事件，否则是配置参数
        var options = {};
        var events = {};
        for (let key in t.props) {
            var matches = /^on([A-Z]\w*)$/.exec(key);
            if (matches) { // 事件
                var evtName = matches[1].replace(/./, function (p) {
                    return p.toLowerCase();
                });
                events[evtName] = t.props[key];
            } else if (key !== 'className' && key !== 'autoRefresh' &&
                key !== 'minWidth') { // 配置
                options[key] = t.props[key];
            }
        }

        // iscroll 实例化
        t.scroller = new IScroll(t.el, options);

        // 事件挂载
        for (let key in events) {
            t.scroller.on(key, events[key].bind(null, t.scroller));
        }
    }
}

// 更多配置参数，详见 http://iscrolljs.com/ ，事件用 onXxx 的格式，例如 scrollEnd 事件对应的参数是 onScrollEnd
Scroller.defaultProps = {
    click: /chrome/i.test(navigator.userAgent),
    autoRefresh: true,
    minWidth: '100%'
};

// http://facebook.github.io/react/docs/reusable-components.html
Scroller.propTypes = {
    autoRefresh: React.PropTypes.bool,
    className: React.PropTypes.string
};

module.exports = Scroller;