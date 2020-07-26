import React from 'react';

const Link = ({ href, className, children }) => {
	const onClickHandler = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}

		event.preventDefault();

		// Change window.location.pathname to `href` value
		window.history.pushState({}, '', href);

		// Creating custom events for `popstate`
		// `PopStateEvent` is an event handler for the `popstate` event on the window.
		// https://developer.mozilla.org/en-US/docs/Web/API/PopStateEvent
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};
	return (
		<a href={href} className={className} onClick={onClickHandler}>
			{children}
		</a>
	);
};

export default Link;
