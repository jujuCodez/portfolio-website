import React, { useState } from 'react';
import './Component2.css';

function Component2() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="component2">
            <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                <div className="front">
                    <h2>Skills</h2>
                    <p>Click this to see what I can offer!</p>
                </div>
                <div className="back">
                    <h2>Proficiencies</h2>
                    <p>HTML, CSS, JavaScript, React, Node.js, and more</p>
                </div>
            </div>
        </div>
    );
}

export default Component2;
