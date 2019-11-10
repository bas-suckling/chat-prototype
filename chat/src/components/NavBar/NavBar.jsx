import React from "react"
import {Link}  from 'react-router-dom'

export default function NavBar() {

    return (
        <>
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-dark" style={{'padding-left':0+'px'}}>
                <Link className="navbar-brand" to="/">Shhh.</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks"
                    aria-controls="navbarlinks" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarLinks">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/howitworks">How it Works</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}