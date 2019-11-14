import React from "react"
import generateUsername from './generateUsername'

class Signup extends React.Component {
    constructor(props) {
        super(props)
    

    this.state = {
        username: '',
        password: ''
    }
    this.generate = this.generate.bind(this)
}


    generate = () => {
        this.setState ({
            username:generateUsername()
        })
    }


    handleChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
    }


    render() {
    return (
            <section className="container-fluid form-layout" >
                <section className="row justify-content-center">
                    <form className="form-container" id="form-signup" action="/signup/newUser" onSubmit={this.handleSubmit}>
                        <a className="navbar-brand" href="/">Shhh.</a>
                        <p> Use the button below to randomly generate <br/> a username.</p> 
                            <br/>
                            <div className="form-group">
                                <input value={this.state.username} name="username" className="form-control" id="inputUsername" placeholder="Username" autoComplete="off"/>
                            </div>
                            < div className="form-group">
                                <button onClick={this.generate} className="btn btn-outline-light btn-lg btn-block">Generate Username</button>
                                <br/>
                            </div>
                            <div className="form-group">
                                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="inputPassword" placeholder="Password" autoComplete="off"/>
                                <br/>
                            </div>
                            <button className="btn btn-outline-light btn-lg btn-block">Sign Up</button>
                    </form>
                </section>
            </section>
            )
    }
}
export default Signup