import React, { Component } from 'react';

import './Searchbar.css'

export default class Searchbar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			articleUrl: ""
		}
	}

	handleInputChange(articleUrl) {
		this.setState({
			articleUrl
		})
	}

	render() {

		return (
			<div className="container-fluid searchbar-div">
				<input onChange={(ev) => this.handleInputChange(ev.target.value)} type="text" placeholder="Input an article URL here..." />
				<i className="fa fa-search" aria-hidden="true" onClick={() => this.props.submitURL(this.state.articleUrl)}></i>
			</div>
		)
	}
}