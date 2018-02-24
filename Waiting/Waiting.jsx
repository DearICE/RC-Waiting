import React from 'react';
let {Component} = React;
import waitIcon from './images/bars.svg';
import Style from './_Waiting.scss';

export default class Waiting extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="waiting">
				<div id="waiting-box" className="Waiting-box">
					<div className="waiting-content">
						<div style={{width: 30, height: 30}} dangerouslySetInnerHTML={{ __html: waitIcon }}></div>
						<div>{this.props.text}</div>
					</div>
				</div>
			</div>
		);
	}
}