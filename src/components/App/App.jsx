import React from 'react';
import Accordion from '../Accordion';
import Route from '../Route';
import { accordionItems } from '../../data/data';
import Header from '../Header';
import Search from '../Search';
import Dropdown from '../Dropdown';
import './app.css';

const App = () => {
	return (
		<div className="ui container">
			<Header />
			<Route path="/">
				<h3 className="ui header widget-title">Accordion</h3>
				<Accordion items={accordionItems} />
			</Route>
			<Route path="/search">
				<h3 className="ui header widget-title">Search</h3>
				<Search />
			</Route>
			<Route path="/dropdown">
				<h3 className="ui header widget-title">Dropdown</h3>
				<Dropdown />
			</Route>
		</div>
	);
};

export default App;
