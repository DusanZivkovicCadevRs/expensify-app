import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set default filter values', () => {
    const defaultState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const result = filterReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual(defaultState);
});

test('should set sortBy to amount', () => {
    const action = { type: 'SORT_BY_AMOUNT' };
    const result = filterReducer(undefined, action);
    expect(result.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const defaultState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = { type: 'SORT_BY_DATE' };
    const result = filterReducer(defaultState, action);
    expect(result.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'test';
    const action = { type: 'SET_TEXT_FILTER', text: text };
    const result = filterReducer(undefined, action);
    expect(result.text).toBe(text);
});

test('should set startDate filter ', () => {
    const startDate = moment();
    const action = { type: 'SET_START_DATE', startDate: startDate }
    const result = filterReducer(undefined, action);
    expect(result.startDate).toEqual(startDate);
});

test('should set endDate filter ', () => {
    const endDate = moment();
    const action = { type: 'SET_END_DATE', endDate: endDate }
    const result = filterReducer(undefined, action);
    expect(result.endDate).toEqual(endDate);
});
