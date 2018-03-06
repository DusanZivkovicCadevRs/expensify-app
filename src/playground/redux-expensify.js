// SET
// SORT_BY_DATE
// SET_START_DATE
// SET_END_DATE
// Store creation

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// console.log(store.getState());

const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 100, createdAt: -1000 }));
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1100, createdAt: -11000 }));

// console.log(expenseOne);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount()); // mutualy cancelable, 
// store.dispatch(sortByDate());   // either amount or date

// store.dispatch(setStartDate(1125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'ajfjafwoagj',
        description: 'Jan Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'abount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
