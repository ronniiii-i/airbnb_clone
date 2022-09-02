import React from "react"
import logo from '../images/logo.png';

export default function Navbar() {
    return (
        <nav>
            <img className="logo" src={logo} />
        </nav>
    )
}