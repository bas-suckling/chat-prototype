import React from "react"

export default function NavBar() {

    return (
        <>
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-dark" style={{'padding-left':0+'px'}}>
                <a className="navbar-brand" href="/">Shhh.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks"
                    aria-controls="navbarlinks" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarLinks">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/howitworks">How it Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cta">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}