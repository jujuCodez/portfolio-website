import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark top-right-nav">
            <div className="container-fluid position-relative">
                <a className="navbar-brand" href="#">Juju's Consortium of Stuff</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="http://localhost:8000/index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:8000/profile.html">Profile</a>   
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:8000/protectedBase.html">Login Admin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000">Article5 - React</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
