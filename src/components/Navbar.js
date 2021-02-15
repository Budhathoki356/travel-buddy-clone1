import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="navbar__logo" href=" ">
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <ul className="navbar__menu">
                <li className="navbar__menu-links">
                    <a className="navbar__menu-link" href=" ">Home</a>
                </li>
                <li className="navbar__menu-links">
                    <a className="navbar__menu-link" href=" ">About us</a>
                </li>
                <li className="navbar__menu-links">
                    <a className="navbar__menu-link" href=" ">Review</a>
                </li>
                <li className="navbar__menu-links">
                    <a className="navbar__menu-link" href=" ">Awards</a>
                </li>
                <li className="navbar__menu-links">
                    <a className="navbar__menu-link" href=" ">Become Verified</a>
                </li>
                <li className="navbar__menu-links">
                    <a className="navbar__menu-link" href=" ">Contact us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
