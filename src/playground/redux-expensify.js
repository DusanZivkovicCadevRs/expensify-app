import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    }
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT
// SET
// SORT_BY_DATE
// SORTY_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
return state;
    }
}

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortyBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Store creation

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    console.log(store.getState());
});

console.log(store.getState());

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 100 }));

console.log(expenseOne);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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
