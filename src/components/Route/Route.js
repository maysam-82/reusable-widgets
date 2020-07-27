import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
	const [currentPath, setCuurentPath] = useState(window.location.pathname);
	useEffect(() => {
		const onWindowLocationChanged = () => {
			setCuurentPath(window.location.pathname);
		};
		window.addEventListener('popstate', onWindowLocationChanged);
		return () => {
			window.removeEventListener('popstate', onWindowLocationChanged);
		};
	}, []);
	return currentPath === path ? children : null;
};

export default Route;
