/**
 * Icon Component for tinglejs
 * @auther hanyu
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
const React = require('react');
const classnames = require('classnames');
let svg4everybody = require('./svg4everybody');
let webkitUA = /\bAppleWebKit\/(\d+)\b/;
const {prefixClass} = require('@ali/tingle-context');

class Icon extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let webkitUAVersion = (navigator.userAgent.match(webkitUA) || [])[1];
        svg4everybody({
            polyfill: webkitUAVersion === '600' || webkitUAVersion < 537
        });
    }

    render() {
        let t = this;

        let {className, width, height, fill, ...other} = t.props;
  
        return (
            <div onClick={t.props.onClick.bind(t)} className={classnames(prefixClass('icon'), {
               [className]: !!className
            })}> 
                <svg className={prefixClass('icon-svg')} fill={fill} width={width} height={height} {...other}>
                    <use xlinkHref={'#' + t.props.name}/>
                </svg>
                <div className={prefixClass('icon-mask')}></div>
            </div>
        );
    }
}

Icon.defaultProps = {
    className: '',
    name: '',
    width: 32,
    height: 32,
    fill: '#000',
    onClick: () => {}
};


// http://facebook.github.io/react/docs/reusable-components.html
Icon.propTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    fill: React.PropTypes.string,
    onClick: React.PropTypes.func
};

Icon.displayName = 'Icon';

module.exports = Icon;
