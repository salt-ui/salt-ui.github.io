/**
 * Tingle Context
 * The environment for tingle's initialization
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const win = window;
const doc = document;

const ua = navigator.userAgent;
const isMobile = !!ua.match(/mobile/i) || 'orientation' in win;
const isPC = !isMobile;

const supportTouch = 'ontouchstart' in window;
const support3D = ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix());
const supportHairline = (() => {
    var support = false;
    if (win.devicePixelRatio && devicePixelRatio >= 2) {
        const testElem = doc.createElement('div');
        testElem.style.border = '.5px solid transparent';
        doc.body.appendChild(testElem);
        if (testElem.offsetHeight == 1) { // 0.5 + 0.5 = 1
            support = true;
        }
        doc.body.removeChild(testElem);
    }
    return support;
})();

// 常量
const TOUCH_START = supportTouch ? 'touchstart' : 'mousedown';
const TOUCH_MOVE = supportTouch ? 'touchmove' : 'mousemove';
const TOUCH_END = supportTouch ? 'touchend' : 'mouseup';
const TOUCH_CANCEL = supportTouch ? 'touchcancel' : 'mouseup';

const env = {
    // 是什么环境
    isPC,
    isMobile,

    // 是否支持
    support3D,
    supportHairline,
    supportTouch,

    // 事件去差异
    TOUCH_START,
    TOUCH_MOVE,
    TOUCH_END,
    TOUCH_CANCEL,
    RESIZE: 'resize'
};

module.exports = env;