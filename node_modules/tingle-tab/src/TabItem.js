/**
 * Tab item
 * author: zhangshun
 * date: 2015-05-22
 */
class TabItem extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return <div>{this.props.children}</div>
    }
}

TabItem.defaultProps = {
    title: "",
    data:{}
};

// http://facebook.github.io/react/docs/reusable-components.html
TabItem.propTypes = {
    title: React.PropTypes.string,
    data: React.PropTypes.object
};

TabItem.displayName = 'TabItem';

module.exports = TabItem;