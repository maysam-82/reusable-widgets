import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, title, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const dropDownRef = useRef();

	useEffect(() => {
		const dropDownClickHandler = (event) => {
			// if `click` event happened inside `Dropdown` component, do nothing.
			if (dropDownRef.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener('click', dropDownClickHandler);
		return () => {
			document.body.removeEventListener('click', dropDownClickHandler);
		};
	});

	const renderOptions = options.map((option) => {
		const { id, value, label } = option;
		if (value === selected.value) {
			return null;
		}
		return (
			<div key={id} className="item" onClick={() => onSelectedChange(option)}>
				{label}
			</div>
		);
	});
	return (
		<div className="ui form container" ref={dropDownRef}>
			<div className="field">
				<label className="label">{title}</label>
				<div
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
					onClick={() => setOpen(!open)}
				>
					<i className="dropdown icon" />
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
