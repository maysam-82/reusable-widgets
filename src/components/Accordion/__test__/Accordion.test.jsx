import React from 'react';
import { shallow } from 'enzyme';
import Accordion from '../Accordion';
import { accordionItems } from '../../../data/data';
describe('Accordion component', () => {
	const component = shallow(<Accordion items={accordionItems} />);
	it('should render Accordion component', () => {
		expect(component).toMatchSnapshot();
	});
	describe('When user Click on title of items', () => {
		beforeEach(() => {
			component.find('.title').at(0).simulate('click');
		});
		it('should add class name `active`', () => {
			expect(component.find('.title').at(0).hasClass('active')).toBeTruthy();
		});
	});
});
