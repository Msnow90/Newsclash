import React, {Component} from 'react';
import {connect} from 'react-redux';

// other components
import Searchbar from '../Searchbar/Searchbar';

import './Home.css';

import {getValue} from '../../reducers/template';

class Home extends Component {

	constructor(props) {
		super(props);

		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	handleSearchSubmit(articleUrl) {
		console.log('the articleurl is: ', articleUrl)
		// call axios request and pass in URL, perform validation beforehand
	}

	componentDidMount() {
		this.props.getNewValue();
	}

	render() {
		return (
			<div>
				<h1>Welcome to Newsclash!</h1>
				<h2>Below you can check the level of legitmacy of a news article</h2>

				<Searchbar submitURL={this.handleSearchSubmit}/>
			</div>
		)
	}
}

// "state" is actually the store
const mapStateToProps = (state) => {
	return {
		templateStore: state.templateStore
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// make methods that call dispatch on certain actions from the reducers
		getNewValue() {
			dispatch(getValue());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)