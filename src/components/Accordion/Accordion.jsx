import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	const onTitleClicked = (id) => {
		setActiveIndex(id);
	};

	const renderItems = items.map(({ id, title, content }) => {
		const activeClass = id === activeIndex ? 'active' : '';
		return (
			<Fragment key={id}>
				<div
					className={`title ${activeClass}`}
					onClick={() => onTitleClicked(id)}
				>
					<i className="dropdown icon"></i>
					{title}
				</div>
				<div className={`content ${activeClass}`}>
					<p>{content}</p>
				</div>
			</Fragment>
		);
	});
	return <div className="ui styled accordion container">{renderItems}</div>;
};

export default Accordion;
