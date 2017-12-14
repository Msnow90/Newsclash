import axios from 'axios';

// Actions
export const GET_VALUE = 'GET_VALUE';

// Action Creators
export const getValue = () => {
	return {
		type: GET_VALUE
	}
}

// Reducer
export default (templateStore = {}, action) => {

	switch (action.type) {

		case GET_VALUE:
			return {value:'hello'}

		default:
			return templateStore;
	}

}

// thunk creator example

const exampleAction = () => {}

export const obtainNewValue = () => {
	return (dispatch) => {
		return axios.get('/someroute')
		.then(result => dispatch(exampleAction(result.data)))
	}
}