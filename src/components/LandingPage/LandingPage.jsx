import React from "react"
import {Link} from 'react-router-dom'

export default function LandingPage() {

    return (
        <>
            <section className="title">
                <div className="container-fluid">
                    <div id="landing">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1>End to End encrypted messaging not even an authoritarian government can crack.</h1>
                                <Link to="/signup"><button type="button" className="btn btn-outline-light btn-lg downloadButton">Sign Up</button></Link>
                                <Link to="/signin"><button type="button" className="btn btn-outline-light btn-lg downloadButton">Sign In</button></Link>
                            </div>
                            <div className="col-lg-6">
                                <img src="images/Encrypted-Messaging-Flat-Icon.png" alt="encrypted message" className="titleImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* features */}

            <section id="features">
                <div className="row" >
                    <div className="featureBox col-lg-4">
                        <i className="fas fa-lock fa-4x icons"></i>
                        <h3>End to End Encryption</h3>
                        <p>Messages are protected using modern encryption techniques.</p>
                    </div>
                    <div className="featureBox col-lg-4">
                        <i className="fas fa-user-secret fa-4x icons"></i>
                        <h3>No Personal Information Required</h3>
                        <p>Users are only indentified by randomly generated usernames.</p>
                    </div>
                    <div className="featureBox col-lg-4">
                        <i className="fas fa-trash-alt fa-4x icons" ></i>
                        <h3>Message Self-Destruction</h3>
                        <p>All messages are only available during the live chat session, and are not stored on any database.</p>
                    </div>
                </div>

            </section>

            {/* <!-- Call to Action --> */}

  <section id="cta">

                <h3>Your Message Content is Protected No Matter What.</h3>
                <Link to="/signup"><button type="button" className="btn btn-outline-light btn-lg downloadButton">Sign Up</button></Link>
                                <Link to="/login"><button type="button" className="btn btn-outline-light btn-lg downloadButton">Login</button></Link>


            </section>
        </>
    )
}
