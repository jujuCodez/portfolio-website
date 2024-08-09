import React from 'react';
import './ArticleContent.css';

function ArticleContent() {
    return (
        <div className="article-content">
            <section className="introduction">
                <h2>Exploring ReactJS: A Modern Approach to Web Development</h2>
                <p>ReactJS is a popular JavaScript library for building dynamic and interactive user interfaces. It simplifies the development process by breaking down the UI into reusable components. This article delves into the fundamentals of ReactJS and showcases how it enhances the user experience.</p>
            </section>

            <section className="react-benefits">
                <h3>Benefits of Using ReactJS</h3>
                <ul>
                    <li>Component-Based Architecture</li>
                    <li>Fast Rendering with Virtual DOM</li>
                    <li>SEO-Friendly with Server-Side Rendering</li>
                    <li>Strong Community Support and Ecosystem</li>
                </ul>
            </section>

            <section className="interactive-components">
                <h3>Interactive Features</h3>
                <p>To demonstrate ReactJS's capabilities, we've included interactive components below. These components are designed to provide a hands-on experience with ReactJS's powerful features.</p>
            </section>
        </div>
    );
}

export default ArticleContent;
