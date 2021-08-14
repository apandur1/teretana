import React from "react";
import "./App.css"
import { Link } from "react-router-dom"

function refresh() {
    window.location.reload()
}

function NavBar({ broj }) {
    return (
        <nav className="topnav">
            <ul onClick={refresh}>
                {broj === 1 ? (
                    <Link to="/">
                        <li className="active">Home</li>
                    </Link>) :
                    (<Link to="/">
                        <li>Home</li>
                    </Link>)}
                {broj === 2 ? (
                    <Link to="/contact">
                        <li className="active">Contact us</li>
                    </Link>) : (
                    <Link to="/contact">
                        <li>Contact us</li>
                    </Link>
                )}
                {broj === 3 ? (
                    <Link to="/login">
                        <li className="active desno">Log in</li>
                    </Link>) : (
                    <Link to="/login">
                        <li className="desno">Log in</li>
                    </Link>
                )}
                {broj === 4 ? (
                    <Link to="/signup">
                        <li className="active desno">Sign up</li>
                    </Link>) : (
                    <Link to="/signup">
                        <li className="desno">Sign up</li>
                    </Link>
                )}
            </ul>
        </nav>
    )
}

export default NavBar