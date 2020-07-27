import React from 'react';
import { shallow, mount } from 'enzyme';
import Route from '../Route';

describe('Route component', () => {
	const ChildComponent = () => (
		<div className="test-component">
			<div>test component</div>
		</div>
	);
	const componentWithTestRoute = shallow(
		<Route path="/test">
			<ChildComponent />
		</Route>
	);

	it('should render Route component', () => {
		expect(componentWithTestRoute).toMatchSnapshot();
	});
	it('should render `Accordion` component as its children', () => {
		expect(componentWithTestRoute.find(ChildComponent)).toBeTruthy();
	});
	describe('When route is not equal to `pathname`', () => {
		const componentWithDifferentRoute = shallow(
			<Route path="/">
				<ChildComponent />
			</Route>
		);
		it('should not return component', () => {
			expect(
				componentWithDifferentRoute.find(ChildComponent).exists()
			).toBeFalsy();
		});
	});
});
