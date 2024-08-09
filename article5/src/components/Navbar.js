import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import headerImage from './header.png'; // Import the image

function Navbar() {
    return (
        <>
            {/* Rounded Image Container */}
            <div className="rounded-image-container">
                <div className="rounded-image">
                    <img src={headerImage} alt="Header Image" />
                </div>
            </div>

            {/* Navigation Bar */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark top-right-nav">
    <div class="container-fluid position-relative">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link" href="http://localhost:8000/index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="http://localhost:8000/profile.html">Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="http://localhost:8000/photoalbum.html">Photo Album</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="http://localhost:8000/portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Articles
                    </a>
                    <ul class="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="http://localhost:8000/article1vidembedd.html">Article 1 - Videos</a></li>
                        <li><a class="dropdown-item" href="http://localhost:8000/protectedBase.html?type=japanese">Article 2 - Data of Japan Houses</a></li>
                        <li><a class="dropdown-item" href="http://localhost:8000/protectedBase.html?type=filipino">Article 3 - Data of Filipino Houses</a></li>
                        <li><a class="dropdown-item" href="http://localhost:8010/article4.html">Article 4 - NodeJS</a></li>
                        <li><a class="dropdown-item" href="http://localhost:3000/article5">Article 5 - ReactJS</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="http://localhost:8010/signup.html">Sign-up</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
        </>
    );
}

export default Navbar;
