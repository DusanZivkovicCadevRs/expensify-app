import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import {setTextFilter} from './actions/filters'
import configureStore from './store/configureStore';
import getVisibleExpense from './selectors/expenses'; 

import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

// addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water bill', note: 'goood', amount: 9000, createdAt: 1500000 }));
// addExpense -> Gas bill
store.dispatch(addExpense({ description: 'Gas bill', note: 'niiice', amount: 19000, createdAt: 1550000 }));
// setTextFilter -> bill (2 items) -> water (1 item)
store.dispatch(setTextFilter('bil'));
// getVisibleExpense -> print visibles ones to screen
const state = store.getState()
const visibleExpenses = getVisibleExpense(state.expenses, state.filters)

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
