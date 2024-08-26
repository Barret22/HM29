
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions.js';

const Counter = () => {
    const value = useSelector((state) => state.value);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', padding: '20px', fontSize: '2rem' }}>
            <p>Value: {value}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Counter;
