import React from 'react';
import Navbar from './components/Navbar'; // Ensure this path matches your folder structure
import ArticleContent from './ArticleContent';
import ArticleFooter from './ArticleFooter';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

function Article5() {
    return (
        <div>
            <Navbar />
            <header>
                <h1>Article 5: Implemented with React JS</h1>
            </header>
            <main>
                <ArticleContent />
                <Component1 />
                <Component2 />
            </main>
            <ArticleFooter />
        </div>
    );
}

export default Article5;
