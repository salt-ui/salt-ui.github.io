let classNames = require('classnames');
let elementType = require('react-prop-types/lib/elementType');
let React = require('react'); 
let ReactDOM = require('react-dom');

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let ComponentClass = this.props.componentClass;

        return (
          <ComponentClass {...this.props} className={classNames(this.props.className, 'kuma-row')}>
            {this.props.children}
          </ComponentClass>
        );
    }

}

Row.displayName = "Row";
Row.propTypes = {
    /**
     * You can use a custom element for this component
     */
    componentClass: elementType
};
Row.defaultProps = {
    componentClass: 'div'
}
module.exports = Row;