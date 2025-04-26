import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import menu from '../headermenu.json';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css'; // Import the CSS file

function Header() {
    const location = useLocation();

    const isAccountActive = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand brand-style" to="/">
                    UMED INFO TECH
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav text-center nav-menu">
                        {menu.map((e, i) => (
                            <li className="nav-item mx-2" key={i}>
                                <Link
                                    className={`btn menu-btn ${location.pathname === e.path ? "active" : ""}`}
                                    to={e.path}>
                                    <i className={`${e.icon} icon-style ${location.pathname === e.path ? "active-icon" : ""}`}></i> {e.name}
                                </Link>
                            </li>
                        ))}

                        <li className="nav-item dropdown mx-2 account-wrapper">
                            <Link className={`nav-link dropdown-toggle btn account-btn ${isAccountActive ? "active" : ""}`} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-user account-icon"></i> Account
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/login">
                                        <i className="fa-solid fa-sign-in-alt"></i> Login
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/signup">
                                        <i className="fa-solid fa-user-plus"></i> Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;