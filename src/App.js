import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// 1. VIEW
// 1.1 Component
function CounterRedux ({ reset, increment, decrement, count }) {
	return (
		<div>
			<div><button onClick={reset}>Reset</button></div>
			<div><button onClick={increment}>+</button></div>
			<div>{count}</div>
			<div><button onClick={decrement}>-</button></div>
		</div>
	);	
}

// 1.2 Conecting View with Redux
const mapStateToProps = (state) => ({
	count: state.count
});

const bindDispatchToProps = dispacth => ({
	increment: () => dispacth({ type: 'INCREMENT' }),
	decrement: () => dispacth({ type: 'DECREMENT' }),
	reset: () => dispacth({ type: 'RESET' })
});

const CounterReduxConnected = connect(mapStateToProps, bindDispatchToProps)(CounterRedux);
//


// 2. REDUCER
const initialState = {
	count: 0
};

function counterReducer(state = initialState, action) {
	switch(action.type){
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1
			}
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1
			}
		case 'RESET':
			return {
				...state,
				count: 0
			}
		default:
			return state;
	}
}
//

// 3. Connect redux with react (store)
const store = createStore(counterReducer);

export default function AppRedux() {
	return (
		<Provider store={store}>
			<div>
				<div>Aplicacao Counter:</div>
				<div>
					<CounterReduxConnected/>
				</div>
			</div>
		</Provider>
	)
}

/*
export default function App() {
	return (
	  <div className="App">
		<div className="App-header">
		  <img src={logo} className="App-logo" alt="logo" />
		  <h2>Welcome to React Spranger</h2>
		</div>
		<p className="App-intro">
		  To get stfwetearted, edit <code>src/App.js</code> andfd save to reload.
		</p>
		<div>
		  <Counter algo="10"/>
		  ====================
		  <CounterReduxConnected />
		</div>
	  </div>
	);
}

class Counter extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}
	
	reset() {
		this.setState({ count: 0 });
	}
	
	increment() {
		const newCount = this.state.count + 1;
		this.setState({ count: newCount });
	}
	
	decrement() {
		const newCount = this.state.count - 1;
		this.setState({ count: newCount });
	}
	
	render() {
		return (
			<div>
				<div><button onClick={this.reset.bind(this)}>Reset</button></div>
				<div><button onClick={this.increment.bind(this)}>+</button></div>
				<div>{this.state.count}</div>
				<div><button onClick={this.decrement.bind(this)}>-</button></div>
			</div>
		);	
	}
	
}


*/
