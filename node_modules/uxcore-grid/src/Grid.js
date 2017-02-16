/*
 * Inspired by react-bootstrap: https://github.com/react-bootstrap/react-bootstrap/ 
 */

let classNames = require('classnames');
let elementType = require('react-prop-types/lib/elementType');
let Row = require("./Row");
let Col = require("./Col");
let React = require('react'); 
let ReactDOM = require('react-dom');

class Grid extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let ComponentClass = this.props.componentClass;
        let className = this.props.fluid ? 'kuma-container-fluid' : 'kuma-container';

        return (
          <ComponentClass
            {...this.props}
            className={classNames(this.props.className, className)}>
            {this.props.children}
          </ComponentClass>
        );
    }
}

Grid.displayName = "Grid";
Grid.propTypes = {
    /**
     * Turn any fixed-width grid layout into a full-width layout by this property.
     *
     * Adds `container-fluid` class.
     */
    fluid: React.PropTypes.bool,
    /**
     * You can use a custom element for this component
     */
    componentClass: elementType
};

Grid.defaultProps = {
    componentClass: 'div',
    fluid: false
}

Grid.Row = Row;
Grid.Col = Col;

module.exports = Grid;