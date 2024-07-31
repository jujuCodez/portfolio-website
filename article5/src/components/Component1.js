import React, { useState } from 'react';
import './Component1.css';

function Component1() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="component1">
            <h2>Interactive Counter</h2>
            <p>This is an interactive counter. Click the button to increase the count.</p>
            <button onClick={handleClick} className="btn">Click me</button>
            <p className="counter">Button clicked {count} times</p>
        </div>
    );
}

export default Component1;
