import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'Bill',
        note: '',
        amount: 169,
        createdAt: 0
    }, {
        id: '21',
        description: 'Rent',
        note: '',
        amount: 16900,
        createdAt: -1110
    }, {
        id: '31',
        description: 'Credit card',
        note: '',
        amount: 55555,
        createdAt: 2000
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
    expect(result).toEqual([ expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endtDate: undefined
    }
});
