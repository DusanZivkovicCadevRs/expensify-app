import React from 'react';
import { shallow } from 'enzyme';
import expenseFixtures from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem', () => {
    const wrapper = shallow(
        <ExpenseListItem
            {...expenseFixtures[0]}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
