import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Root.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';


// import components here
import Home from './home/Home';


class Root extends Component {
	constructor() {
		super();

		// bind any methods here
	}

	componentDidMount() {

	}

	render() {
		return (
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={() => <Home />}
					/>
				</Switch>
			</Router>
		)
	}
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);