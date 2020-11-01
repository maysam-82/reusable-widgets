import React from 'react';
import Link from '../Link/Link';
import './header.css';

const Header = () => {
	return (
		<div className="header-container">
			<Link href="/" className="ui secondary button">
				Accordion
			</Link>
			<Link href="/search" className="ui secondary button">
				Search
			</Link>
			<Link href="/dropdown" className="ui secondary button">
				Dropdown
			</Link>
			<Link href="/timeline" className="ui secondary button">
				Timeline
			</Link>
		</div>
	);
};

export default Header;
