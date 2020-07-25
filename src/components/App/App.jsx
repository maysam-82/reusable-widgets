import React from 'react';
import Accordion from '../Accordion/Accordion';
import { accordionItems } from '../../data/data';
import './app.css';

const App = () => {
	return (
		<div className="ui container">
			<h3 className="ui header widget-title">Accordion</h3>
			<Accordion items={accordionItems} />
		</div>
	);
};

export default App;
