import React from "react"
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated/Authenticated'

export default function NavBar() {

    return (
        <>
            <div className="nav-container">
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ 'paddingLeft': 0 + 'px' }}>
                    <IfNotAuthenticated>
                        <Link className="navbar-brand" to="/">Shhh.</Link>
                    </IfNotAuthenticated>
                    <IfAuthenticated>
                        <Link className="navbar-brand" to="#">Shhh.</Link>
                    </IfAuthenticated>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks"
                        aria-controls="navbarlinks" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarLinks">
                        <ul className="navbar-nav ml-auto">
                            <IfNotAuthenticated>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signin">Login</Link>
                                </li>
                            </IfNotAuthenticated>
                            <IfAuthenticated>
                                <li>
                                    <Link className="nav-link" to="/">Logout</Link>
                                </li>
                            </IfAuthenticated>
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