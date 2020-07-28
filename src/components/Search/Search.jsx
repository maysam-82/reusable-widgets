import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				`http://jsonplaceholder.typicode.com/comments`
			);
			setSearchResults(data.filter((item) => item.name.includes(searchTerm)));
		};

		// debounce logic
		const timeoutId = setTimeout(() => {
			if (searchTerm) {
				search();
			}
		}, 500);

		// Return function is returned in the first render of component. As soon as the `searchTerm` is changed, cleanup function is invoked and then the overal function inside `useEffect` gets invoked again.
		return () => {
			clearTimeout(timeoutId);
		};
	}, [searchTerm]);

	const renderResult = searchResults.map(({ name, id, email }) => {
		return (
			<div className="item" key={id}>
				<div className="content">
					<div className="header">{name}</div>
					{email}
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form">
				<div className="filed">
					<label>Enter Search Term</label>
					<input
						className="input"
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
					/>
				</div>
			</div>
			<div className="ui celled list">{renderResult}</div>
		</div>
	);
};

export default Search;
