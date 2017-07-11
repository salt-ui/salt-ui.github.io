import React from 'react';
import brace from 'brace';
import Button from 'uxcore/lib/Button';
// import Dialog from 'uxcore/lib/Dialog';
import Layout from 'uxcore/lib/Layout';
import 'brace/mode/jsx';
import 'brace/mode/javascript';
import 'brace/theme/github';


import DemoItem from './DemoItem';
import { transformCode } from '../../../utils';

// const { Row, Col } = Grid;
const { Left, Right } = Layout;

export default class Demo extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      selectDemoIndex: 0,
      demos: this.sortDemos(props.demos),
      // dialog: {
      // 	title: '',
      // 	content: ''
      // },
      // showDialog: false
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
				// highlightedCode: 
				content: content[1][2][1]
			};

			if (content.length > 2) {
				// obj.style = content[2][2][1];
				obj.style =  content[2];
				// obj.style = {
				// 	content: content[2][2][1],
				// 	highlightedCode: content[2][1].highlighted
				// };
			}

			console.log(content,obj)

			return obj;
		}).sort((a, b) => a.meta.order - b.meta.order);
		// let arr = Object.keys(demos).map(name => {
		// 	const old = demos[name];
		// 	const obj = {
		// 		name,
		// 		meta: old.meta,
		// 		highlightedCode: old.highlightedCode,
		// 		content: old.content[1][2][1]
		// 	};

		// 	if(old.content.length === 3 ){
		// 		obj.style = {
		// 			highlightedCode: old.content[2],
		// 			content: old.content[2][2][1]
		// 		}
		// 	}

		// 	return obj;
		// });
		// console.log(arr);
		// return arr.sort((a, b) => a.meta.order - b.meta.order);
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

	// showExpandDemo(dialog){
	// 	this.setState({
	// 		dialog,
	// 		showDialog: true
	// 	})
	// }

	hideDialog(){
		this.setState({
			showDialog: false
		})
	}

	render(){
		// const { selectDemoIndex, demos, dialog, showDialog } = this.state;
		const { selectDemoIndex, demos } = this.state;
		const { params, utils } = this.props;

		const selectDemo = demos[selectDemoIndex > -1 ? selectDemoIndex : 0];
		const isLocalMode = window.location.port;
		const protocol = window.location.protocol;
		const host = isLocalMode ? 'localhost:8004' : window.location.host;
		const demoUrl = isLocalMode 
			? `${protocol}//${host}/demos/${params}/${selectDemo.name}/` 
			: `${protocol}//${host}/mobile/demos/${params}/${selectDemo.name}`;

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
								/>
							)
						}
					</Left>
          <Right width={330} className="ui-preview">
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

