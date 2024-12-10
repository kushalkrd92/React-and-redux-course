const redux = require('redux');    // way to import redux in node

const INITIAL_VALUE = {
    counter: 0
}

const reducer = (store = INITIAL_VALUE, action) => {     // reducer method
    console.log('Reducer called!', action);
    return {counter: store.counter + 1};
}

const store = redux.createStore(reducer);        // creating store

const subscriber = () => {                   // describing subscriber method
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);                  // subcribing store

store.dispatch({type: 'INCREMENT'});         // dispatching action