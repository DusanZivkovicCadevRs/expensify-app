import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: '0',
        description: 'Bill',
        note: '',
        amount: 169,
        createdAt: 0,
        endDate: moment(0).add(5, 'days').valueOf()
    }, {
        id: '1',
        description: 'Rent',
        note: '',
        amount: 16900,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
        endDate: moment(0).add(5, 'days').valueOf()
    }, {
        id: '2',
        description: 'Credit card',
        note: '',
        amount: 55555,
        createdAt: moment(0).add(4, 'days').valueOf(),
        endDate: moment(0).add(5, 'days').valueOf()
    },
]

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endtDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        endDate: moment(0).add(10, 'days')
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});


