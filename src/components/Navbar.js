import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={(nav) => (nav.isActive) ? "nav-active" : ""}>accueil</NavLink></li>
                <li><NavLink to="/build-and-cost" className={(nav) => (nav.isActive) ? "nav-active" : ""}>build and coast</NavLink></li>
                <li><NavLink to="/guitares" className={(nav) => (nav.isActive) ? "nav-active" : ""}>guitares</NavLink></li>
                <li><NavLink to="/contact" className={(nav) => (nav.isActive) ? "nav-active" : ""}>contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;