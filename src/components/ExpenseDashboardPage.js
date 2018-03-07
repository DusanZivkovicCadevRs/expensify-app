import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';

const ExpenseDashboardpage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardpage;
