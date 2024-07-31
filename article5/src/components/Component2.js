import React, { useState } from 'react';
import './Component2.css';

function Component2() {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className="component2" onClick={handleFlip}>
            <div className={`card ${flipped ? 'flipped' : ''}`}>
                <div className="front">
                    <h2>Flip Me</h2>
                    <p>Click to see the other side!</p>
                </div>
                <div className="back">
                    <h2>Back Side</h2>
                    <p>This is the back of the card.</p>
                </div>
            </div>
        </div>
    );
}

export default Component2;
