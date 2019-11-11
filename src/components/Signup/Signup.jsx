import React from "react"
import generateUsername from './generateUsername'

class Signup extends React.Component {
    constructor(props) {
        super(props)
    

    this.state = {
        value: ''
    }
    this.generate = this.generate.bind(this)
}


generate = () => {
    this.setState ({
        value:generateUsername()
    })
}

    render() {
    return (
            <section className="container-fluid form-layout" >
                <section className="row justify-content-center">
                    <form className="form-container" id="form-signup" action="/signup/newUser" onSubmit={(e)=> {e.preventDefault()}}>
                        <a className="navbar-brand" href="/">Shhh.</a>
                        <p> Use the button below to randomly generate <br/> a username.</p> 
                            <br/>
                            <div className="form-group">
                                <input value={this.state.value} name="username" className="form-control" id="inputUsername" placeholder="Username" autocomplete="off"/>
                            </div>
                            < div className="form-group">
                                <button onClick={this.generate} className="btn btn-outline-light btn-lg btn-block">Generate Username</button>
                                <br/>
                            </div>
                            <div className="form-group">
                                <input name="password" type="password" className="form-control" id="inputPassword" placeholder="Password" autocomplete="off"/>
                                <br/>
                            </div>
                            <button type="" className="btn btn-outline-light btn-lg btn-block">Sign Up</button>
                    </form>
                </section>
            </section>
            )
    }
}
export default Signup