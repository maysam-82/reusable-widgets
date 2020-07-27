import React from 'react';
import Accordion from '../Accordion';
import Route from '../Route';
import { accordionItems } from '../../data/data';
import './app.css';
import Header from '../Header/Header';

const App = () => {
	return (
		<div className="ui container">
			<Header />
			<Route path="/">
				<h3 className="ui header widget-title">Accordion</h3>
				<Accordion items={accordionItems} />
			</Route>
		</div>
	);
};

export default App;
