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

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET
// SORT_BY_DATE
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

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.updates };
                } else {
                    return expense;
                }
            }
            )

        default:
            return state;
    }
}

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORTY_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text }
            break;
        
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
            break;

        case 'SORT_BY_AMOUNT': 
            return {...state, sortBy: 'amount'}
            break;
        
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate}
            break;

        case 'SET_END_DATE':
            return {...state, endDate: action.endDate}
            break;
        
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// Store creation

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

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
