import React from "react"
import { checkLogin } from '../api'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        checkLogin(this.state)
        .then((res) => {
            if (res == true) {
            swal({
                icon: "success",
                text: "Nice! You are logged in.",
                button: "Cool Beans"})
            this.props.history.push('/chat')
            } else {
                swal({
                    icon: "error",
                    text: "Invalid username or password.",
                    button: "Cool Beans"})
            }
        })
    }

    render() {
        return (
            <>
                <section className="container-fluid form-layout">
                    <section className="row justify-content-center">
                        <form className="form-container" id="form-login" method="POST">
                            <div className="form-group">
                                <a className="navbar-brand" href="/">Shhh.</a>
                                <br />
                                <input name="username" type="username" className="form-control" autoComplete="off" id="inputUsername" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
                            </div>
                            <div className="form-group">
                                <input name="password" type="password" className="form-control" autoComplete="off" id="inputPassword" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
                                <br />
                            </div>
                            <button type="submit" className="btn btn-outline-light btn-lg btn-block" onClick={this.handleSubmit}>Login</button>
                        </form>
                    </section>
                </section>
            </>
        )
        }
}
export default Login