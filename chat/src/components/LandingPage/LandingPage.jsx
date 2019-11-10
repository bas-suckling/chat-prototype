import React from "react"

export default function LandingPage() {

    return (
        <>
            <section className="title">
                <div className="container-fluid">
                    <div id="landing">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1>End to End encrypted messaging not even an authoritarian government can crack.</h1>
                                <button onclick="window.location.href='/signup'" type="button" className="btn btn-outline-light btn-lg downloadButton">Sign Up</button>
                                <button onclick="window.location.href='/login'" type="button" className="btn btn-outline-light btn-lg downloadButton">Login</button>
                            </div>
                            <div className="col-lg-6">
                                <img src="images/Encrypted-Messaging-Flat-Icon.png" alt="encrypted message image" className="titleImage" />
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
                        <p>Messages are protected using modern end to end and AES techniques.</p>
                    </div>
                    <div className="featureBox col-lg-4">
                        <i className="fas fa-user-secret fa-4x icons"></i>
                        <h3>No Personal Information Required</h3>
                        <p>New users can generate random usernames.</p>
                    </div>
                    <div className="featureBox col-lg-4">
                        <i className="fas fa-trash-alt fa-4x icons" ></i>
                        <h3>Message Self-Destruction</h3>
                        <p>Messages are automatically erased within 24 hours, and can be set to custom timeframes.</p>
                    </div>
                </div>

            </section>





            {/* <!-- Call to Action --> */}

  <section id="cta">

                <h3>Your Message Content is Protected No Matter What.</h3>
                <button onclick="window.location.href='/signup'" type="button" className="btn btn-outline-light btn-lg downloadButton">Sign Up</button>
                <button onclick="window.location.href='/login'" type="button" className="btn btn-outline-light btn-lg downloadButton">Login</button>


            </section>
        </>
    )
}