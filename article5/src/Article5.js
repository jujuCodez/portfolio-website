import React from 'react';
import Navbar from './components/Navbar';
import ArticleContent from './ArticleContent';
import ArticleFooter from './ArticleFooter';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import './Article5.css'; // Import the CSS file

function Article5() {
    return (
        <div>
            <Navbar />
            <header>
                <h1>A Website implemented with ReactJS</h1>
            </header>
            <main className="content-layout">
                <ArticleContent />
                <Component1 />
                <Component2 />
            </main>
            <ArticleFooter />
        </div>
    );
}

export default Article5;
