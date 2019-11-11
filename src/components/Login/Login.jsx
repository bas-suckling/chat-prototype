import React from "react"

export default function Login() {

    return (
        <>
            <section class="container-fluid form-layout">
                <section class="row justify-content-center">
                    <form class="form-container" id="form-login" action="/" method="POST">
                        <div class="form-group">
                            <a class="navbar-brand" href="/">Shhh.</a>
                            <br />
                            <input type="username" class="form-control" id="inputUsername" aria-describedby="emailHelp"
                                placeholder="Username" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                            <br />
                        </div>
                        <button type="submit" class="btn btn-outline-light btn-lg btn-block">Login</button>
                    </form>
                </section>
            </section>

        </>
    )
}