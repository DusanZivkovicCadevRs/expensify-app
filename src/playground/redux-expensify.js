import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE
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

console.log(store.getState());

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
