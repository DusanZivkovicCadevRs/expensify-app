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

// Reducers
// 1. Reducers are pure functions

// let a = 10;
// const add = (b) => {
//     return a + b;
// } // it is not pure function, compute new state with 
// // old state and action. MUST.

// let result;
// const addNOTPure = (a, b) => {
//     result = a + b;
// }; // relies again on aouter stuff interacting from outside

// 2. NEVER CHANGE state or action

const countReducer = (state = { count: 0 }, action) => {
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
};

const store = createStore(countReducer);

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