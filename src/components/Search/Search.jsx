import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Search = () => {
	const [searchTerm, setSearchTerm] = useState('lorem');
	const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
	const [searchResults, setSearchResults] = useState([]);

	// Watch for changing of `searchTerm`
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(searchTerm);
		}, 500);

		// Return function is returned in the first render of component. As soon as the `searchTerm` is changed, cleanup function is invoked and then the overal function inside `useEffect` gets invoked again.
		return () => {
			clearTimeout(timerId);
		};
	}, [searchTerm]);

	// Watch for changing `debouncedTerm`
	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				`https://jsonplaceholder.typicode.com/comments`
			);
			setSearchResults(
				data.filter((item) => item.name.includes(debouncedTerm))
			);
		};
		search();
	}, [debouncedTerm]);

	const renderResult = searchResults.map(({ name, id, body }) => {
		return (
			<div className="item" key={id}>
				<div className="content">
					<div className="header">{name}</div>
					{body}
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
