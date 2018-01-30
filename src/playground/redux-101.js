import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    console.log('Running store.');
    switch (action.type) {
        case 'RESET': 
            return {
                count: 0
            };
         case 'INCREMENT': 
            return {
                count: state.count + 1
            };
         case 'DECREMENT': 
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
});

console.log(store.getState());

// Actions - an obj that gets sent to the store
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT'
});


console.log(store.getState());
