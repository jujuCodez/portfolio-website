import React, { useState, useEffect } from 'react';
import './Component1.css';
import cookieImage from './cookie.png'; // Import the cookie image

function Component1() {
    const [counter, setCounter] = useState(0);
    const [cookies, setCookies] = useState([]);
    const [highScore, setHighScore] = useState(0);

    // Load the highest score from localStorage when the component mounts
    useEffect(() => {
        const savedHighScore = localStorage.getItem('highScore');
        if (savedHighScore) {
            setHighScore(parseInt(savedHighScore, 10));
        }
    }, []);

    const handleButtonClick = () => {
        const newCounter = counter + 1;
        setCounter(newCounter);

        // Check if the new score is higher than the high score
        if (newCounter > highScore) {
            setHighScore(newCounter);
            localStorage.setItem('highScore', newCounter);
        }

        // Generate a random horizontal position (between 10% and 90%)
        const randomX = Math.random() * 80 + 10;

        const newCookie = {
            id: Date.now(),
            left: `${randomX}%`
        };

        setCookies([...cookies, newCookie]);

        // Remove the cookie after the animation duration
        setTimeout(() => {
            setCookies(cookies => cookies.filter(cookie => cookie.id !== newCookie.id));
        }, 1000); // Same duration as the animation
    };

    return (
        <div className="component1">
            <h2>Explore More About My Work</h2>
            <p>Here's an example! You get a cookie for every time you click!</p>
            <button className="btn" onClick={handleButtonClick}>Click for Cookie</button>
            <div className="counter">You've got a cookie {counter} times!</div>
            <div className="high-score">Highest score: {highScore}</div>
            {cookies.map(cookie => (
                <div 
                    key={cookie.id} 
                    className="cookie" 
                    style={{ 
                        left: cookie.left,
                        backgroundImage: `url(${cookieImage})` 
                    }}>
                </div>
            ))}
        </div>
    );
}

export default Component1;
