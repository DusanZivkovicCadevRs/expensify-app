import React from 'react';
import {shallow} from 'enzyme';
import expensesFixture from '../fixtures/expenses';
import {ExpenseList} from '../../components/ExpenseList';

test('should render ExpensesList correctly', () => {
    const wrapper = shallow(<ExpenseList expenses={expensesFixture}/>);
    expect(wrapper).toMatchSnapshot();
});
