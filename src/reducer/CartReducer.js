import React, { useReducer } from 'react';

const initialState = {
    name: "haseeb"
}

function reducer(state, action) {
    switch (action) {
        case 'increment':
            return { name: "kaka" }

        case 'decrement':
            return state - 1
        default:
            return state
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {count.name}</p>
            <button onClick={() => dispatch('increment')}>+</button>
            <button onClick={() => dispatch('decrement')}>-</button>
        </div>
    );
}

export default Counter;
