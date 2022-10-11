import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <nav className='header navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                <a class="navbar-brand title-name" href="#">Quiz Lover</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <div className=''>
                            <Link to="/">Home</Link>
                            <Link to="/quiz-topic">Quiz-Topics</Link>
                            <Link to="/statistics">Statistics</Link>
                            <Link to="/blog">Blog</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
};

export default Header;
