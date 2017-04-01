
export default ({ href, name, route, activeLink }) => {
	let clz = route.path === activeLink ? 'active' : '';
    if (location.pathname === '/components/tingle-ui') {
        clz = activeLink === '/components/tingle-ui' ? 'active' : '';
    }
	return <h2 className="nav-cnt"><a href={href} className={clz}>{ name }</a></h2>
}
