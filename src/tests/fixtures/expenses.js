import moment from 'moment';

export default [
    {
        id: '0',
        description: 'Bill',
        note: '',
        amount: 169,
        createdAt: 0,
        endDate: moment(0).add(3, 'days').valueOf()
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
