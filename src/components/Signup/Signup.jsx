import React from "react"
import generateUsername from './generateUsername'
import { addNewUser } from '../api'
import swal from 'sweetalert'

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
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        addNewUser(this.state)
        .then((res) => {
            if (res == true) {
            swal({
                icon: "success",
                text: "Account Created Succesfully, Please Login",
                button: "Cool Beans"})
                // this.props.history.push('/')
            } else {
                swal({
                    icon: "error",
                    text: "Username already exists, please try again.",
                    button: "Cool Beans"})
            }
        })
        this.setState({
            password: ''
        })
    }


    render() {
    return (
            <section className="container-fluid form-layout" >
                <section className="row justify-content-center">
                    <form className="form-container" id="form-signup" action="" onSubmit={this.handleSubmit}>
                        <a className="navbar-brand" href="/">Shhh.</a>
                        <p> Use the button below to randomly generate <br/> a username.</p> 
                            <br/>
                            <div className="form-group">
                                <input value={this.state.username} onChange={this.handleChange} name="username" className="form-control" id="inputUsername" placeholder="Username" autoComplete="off"/>
                            </div>
                            < div className="form-group">
                                <button type="button" onClick={this.generate} className="btn btn-outline-light btn-lg btn-block">Generate Username</button>
                                <br/>
                            </div>
                            <div className="form-group">
                                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="inputPassword" placeholder="Password" autoComplete="off"/>
                                <br/>
                            </div>
                            <button type="submit" className="btn btn-outline-light btn-lg btn-block">Sign Up</button>
                    </form>
                </section>
            </section>
            )
    }
}
export default Signup