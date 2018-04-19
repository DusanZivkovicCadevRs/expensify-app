import React from 'react';
import {shallow} from 'enzyme';
import expensesFixture from '../fixtures/expenses';
import {ExpenseList} from '../../components/ExpenseList';

test('should render ExpensesList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expensesFixture}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesList without expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});
