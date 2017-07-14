import React from 'react';
import brace from 'brace';
import Button from 'uxcore/lib/Button';
// import { withRouter } from 'react-router';
import Layout from 'uxcore/lib/Layout';
import 'brace/mode/jsx';
import 'brace/mode/javascript';
import 'brace/theme/github';


import DemoItem from './DemoItem';
import { transformCode } from '../../../utils';

const { Left, Right } = Layout;

class Demo extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      selectDemoIndex: 0,
      demos: this.sortDemos(props.demos),
      theme: window.localStorage.getItem('theme') || 'blue'
    };

    this.toggleFrame = this.toggleFrame.bind(this);
    this.transform = this.transform.bind(this);
    // this.showExpandDemo = this.showExpandDemo.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
	}

	componentWillReceiveProps(next){
		if(next.params != this.state.params){
			this.setState({
				selectDemoIndex: 0,
				demos: this.sortDemos(next.demos)
			}, () =>{
				window.setTimeout(() => {
					this.transform(this.state.demos[0]);
				}, 1000)
			})
		}

		const newTheme = window.localStorage.getItem('theme');

		if (newTheme && newTheme !== this.state.theme) {
			this.refs.preview.contentWindow.postMessage({
				theme
			}, '*');
			this.setState({
				theme: newTheme
			});
		}
	}

	componentDidMount(){
		const { demos, selectDemoIndex } = this.state;
		window.setTimeout(() => {
			// this.transform(demos[selectDemoIndex].content, demos[selectDemoIndex].style);
			this.transform(demos[selectDemoIndex]);
		}, 3000)
	}

	sortDemos(demos){
		return demos.map(({ name, content, meta }) => {
			const obj = {
				name,
				meta,
				content: content[1][2][1]
			};

			if (content.length > 2) {
				obj.style =  content[2];
			}

			return obj;
		}).sort((a, b) => a.meta.order - b.meta.order);
	}

	transform(data){
		const { code, err } = transformCode(data.content);
		const { demos } = this.state;
		if(!err){
			this.refs.preview.contentWindow.postMessage({
				code, 
				style: data.style ? data.style[2][1] : null
			}, '*');
		}	
	}

	toggleFrame(index){
		const { selectDemoIndex, demos } = this.state;

		if(selectDemoIndex != index){
			window.setTimeout(() => {
				this.transform(demos[index]);
			}, 1000)

			this.setState({
				selectDemoIndex: index
			});
			
		}
	}

	hideDialog(){
		this.setState({
			showDialog: false
		})
	}

	render(){
		// const { selectDemoIndex, demos, dialog, showDialog } = this.state;
		const { selectDemoIndex, demos, theme } = this.state;
		const { params, utils, location } = this.props;
		
		// let theme = 'blue';
	 //  if (location.query.theme) {
	 //    theme = location.query.theme;
	 //  } else {
	 //    theme = window.localStorage.getItem('theme') || 'blue';
	 //  }

		const selectDemo = demos[selectDemoIndex > -1 ? selectDemoIndex : 0];
		const isLocalMode = window.location.port;
		const protocol = window.location.protocol;
		const host = isLocalMode ? 'localhost:8004' : window.location.host;
		const demoUrl = isLocalMode 
			? `${protocol}//${host}/demos/${params}/${selectDemo.name}/` 
			: `${protocol}//${host}/mobile/demos/${params}/${selectDemo.name}`;

		const height = demos.length > 3 ? 540 : 708 - 56 * demos.length;

		return (
			<div className="ui-example">
				<div className="ui-example-title">基本使用</div>
				<Layout>
					<Left adaptive={true} className="ui-demos">
						{
							demos.map((demo, i) => 
								<DemoItem 
									key={demo.name} 
									data={demo} 
									index={i} 
									transform={this.transform}
									selectIndex={selectDemoIndex}
									toggleFrame={this.toggleFrame}
									utils={utils}
									height={height}
								/>
							)
						}
					</Left>
          <Right width={413} className="ui-preview">
          	<div className="ui-preview-content">
							<div className="ui-preview-head" />
							<iframe src={demoUrl} ref="preview" />
						</div>
          </Right>
				</Layout>
				
			</div>
		)
	}
}

export default Demo;

// <Row className="ui-example-body">
// 					<Col md={11} lg={12} className="ui-demos">
// 						{
// 							demos.map((demo, i) => 
// 								<DemoItem 
// 									key={demo.name} 
// 									data={demo} 
// 									index={i} 
// 									transform={this.transform}
// 									selectIndex={selectDemoIndex}
// 									toggleFrame={this.toggleFrame}
// 									utils={utils}
// 								/>
// 							)
// 						}
// 					</Col>
// 					<Col md={12} mdOffset={1} lg={10} lgOffset={1} className="ui-preview">
// 						<div className="ui-preview-content">
// 							<div className="ui-preview-head" />
// 							<iframe 
// 								src={demoUrl} 
// 								ref="preview"
// 								/>
// 						</div>
// 					</Col>
// 				</Row>

// <div className="ui-preview-header">
// 							<div className="preview-statbar">
// 								<img src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" width="350" alt=""/>
// 							</div>
// 							<div className="preview-navbar">
// 	            	<div className="preview-url">{`/demos/${params}/${selectDemo.name}`}</div>
// 	            </div>
// 						</div>

// <Dialog title={dialog.title}
//           visible={showDialog}
//           closable={true}
//           onCancel={this.hideDialog}
//           width={900}
//           footer={<Button type="primary" onClick={e => this.hideDialog()}>Back</Button>}
//           className='demo-dialog'
//           >
//          	 {utils.toReactComponent(dialog.content)}
         	 
//          	 {dialog.style && utils.toReactComponent(dialog.style)}
//         </Dialog>

// <iframe 
// 								src={demoUrl} 
// 								ref = {e => {
// 			            this.container = e;
// 			          }}
// 								/>

