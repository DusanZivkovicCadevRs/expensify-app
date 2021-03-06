import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import configureStore from './store/configureStore';
import getVisibleExpense from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

// addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water bill', note: 'goood', amount: 1119000, createdAt: 1500000 }));
// addExpense -> Gas bill
store.dispatch(addExpense({ description: 'Gas bill', note: 'niiice', amount: 19000, createdAt: 91550000 }));
store.dispatch(addExpense({ description: 'Rent', note: 'goood', amount: 119000, createdAt: 11500000 }));
// setTextFilter -> bill (2 items) -> water (1 item)
// store.dispatch(setTextFilter('bil'));
// getVisibleExpense -> print visibles ones to screen

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'))
// }, 2000);

const state = store.getState()
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
