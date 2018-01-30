import { createStore } from 'redux';

// Action generators - fns that return Acn Obs 

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'RESET':
            return {
                count: 0
            };

        case 'SET':
            return {
                count: action.count
            };

        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// Actions - an obj that gets sent to the store
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
// unsubscribe();
store.dispatch(decrementCount({ decrementBy: 17 }));
store.dispatch(decrementCount());

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'SET',
    count: 101
});

store.dispatch(setCount({count: 10000}));
store.dispatch(resetCount());