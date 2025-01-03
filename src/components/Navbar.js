import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={(nav) => (nav.isActive) ? "nav-active" : ""}>guitares</NavLink></li>
                {/* <li><NavLink to="/build-and-cost" className={(nav) => (nav.isActive) ? "nav-active" : ""}>build and coast</NavLink></li> */}
                {/* <li><NavLink to="/guitares" className={(nav) => (nav.isActive) ? "nav-active" : ""}>guitares</NavLink></li> */}
                <li><NavLink to="/artistes" className={(nav) => (nav.isActive) ? "nav-active" : ""}>artistes</NavLink></li>
                <li><NavLink to="/contact" className={(nav) => (nav.isActive) ? "nav-active" : ""}>contact</NavLink></li>
                <li><NavLink to="/a-propos" className={(nav) => (nav.isActive) ? "nav-active" : ""}>à propos</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;