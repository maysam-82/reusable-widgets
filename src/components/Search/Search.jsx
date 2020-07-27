import React, { useState } from 'react';

export const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');
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
		</div>
	);
};

export default Search;
