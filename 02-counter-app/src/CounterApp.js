import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value })  => {


    let [ counter, setCounter ] = useState(value);

    // handleAdd
    const handleAdd = (e) => {
        setCounter(counter + 1)
    }

    // handleSubtract
    const handleSubtract = (e) => {
        setCounter(counter - 1)
    }

    // handReset
    const handleReset = (e) => {
        setCounter(value)
    }

    return (
        <>
            <h1>Counter App  Strike</h1>
            <p>{ counter }</p>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;