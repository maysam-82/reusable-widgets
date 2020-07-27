import React from 'react';
import { shallow } from 'enzyme';
import Link from '../Link';

describe('Link component', () => {
	const testRoutePath = '/test-route';
	const component = shallow(
		<Link href={testRoutePath} className="test-class">
			Test Component
		</Link>
	);
	it('should render Link component', () => {
		expect(component).toMatchSnapshot();
	});
	describe('When user clicks on `Link` component and does not hold `Crtl` key', () => {
		const event = {
			metaKey: false,
			ctrlKey: false,
			preventDefault: jest.fn(),
		};
		beforeEach(() => {
			component.find('a').simulate('click', event);
		});
		afterEach(() => {
			jest.clearAllMocks();
		});
		it('should update `window.location.pathname` ', () => {
			expect(event.preventDefault).toHaveBeenCalledTimes(1);
		});
	});
	describe('When user clicks on `Link` component and holds `Crtl` key', () => {
		const event = {
			metaKey: false,
			ctrlKey: true,
			preventDefault: jest.fn(),
		};
		beforeEach(() => {
			component.find('a').simulate('click', event);
		});
		afterEach(() => {
			jest.clearAllMocks();
		});
		it('should update `window.location.pathname` ', () => {
			expect(event.preventDefault).toHaveBeenCalledTimes(0);
		});
	});
});
