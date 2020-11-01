import React from 'react';
import PropTypes from 'prop-types';

/**
 * Customize React component using React Composition Pattern according to component props which is passed to.
 * @param {ReactComponent} component
 * @returns Customized React Component
 */

const TimelineComponent = (props) =>
    React.createElement(props.component ? props.component : 'div', props);

TimelineComponent.propTypes = {
    component: PropTypes.func,
};

export default TimelineComponent;
