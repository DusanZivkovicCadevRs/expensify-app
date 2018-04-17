import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default expenses state', () => {
    const action = { type: '@@INIT' };
    const result = expensesReducer(undefined, action);
    expect(result).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense if not found by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 15
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});

test('should add an expense', () => {
    const newExpense = {
        id: '0',
        description: 'Bill',
        note: '',
        amount: 169,
        createdAt: 0,
        endDate: moment(0).add(3, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([...expenses, newExpense]);
});

test('should edit an expense by id', () => {
    const updates = {
        amount: 20000,
    };
    const action = {
        type: 'EDIT_EXPENSE',
        updates: updates,
        id: expenses[0].id
    };
    const result = expensesReducer(expenses, action);
    expect(result[0].amount).toBe(20000);
});

test('should not edit an expense if id is not found', () => {
    const updates = {
        amount: 20000,
    };
    const action = {
        type: 'EDIT_EXPENSE',
        updates: updates,
        id: '-1'
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});
