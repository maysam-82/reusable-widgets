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
		</div>
	);
};

export default Header;
