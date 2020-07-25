import React from 'react';
import Accordion from '../Accordion/Accordion';
import { accordionItems } from '../../data/data';

const App = () => {
	return (
		<div>
			<Accordion items={accordionItems} />
		</div>
	);
};

export default App;
