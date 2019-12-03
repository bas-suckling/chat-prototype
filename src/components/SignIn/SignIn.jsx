import React, {useState} from "react"
import { signIn, isAuthenticated } from 'authenticare/client'
import Swal from 'sweetalert2'


export default function SignIn(props) {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        signIn({
            username: form.username,
            password: form.password
        }, {
            baseUrl: process.env.BASE_API_URL
        })
            .then((token) => {
                if (isAuthenticated()) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully signed in'
                      }).then(() => props.history.push('/chat'))

                    
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid username or password'
                      })
                    props.history.push('/signin')
                }
            })
    }
    return (
        <>
            <section className="container-fluid form-layout">
                <section className="row justify-content-center">
                    <form className="form-container" id="form-login" method="">
                        <div className="form-group">
                            <a className="navbar-brand" href="/">Shhh.</a>
                              <br />
                            <input name="username" type="username" className="form-control" autoComplete="off" id="inputUsername" placeholder="Username" value={form.username} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input name="password" type="password" className="form-control" autoComplete="off" id="inputPassword" placeholder="Password" value={form.password} onChange={handleChange} />
                            <br />
                        </div>
                        <button type="submit" className="btn btn-outline-light btn-lg btn-block" onClick={handleSubmit}>Login</button>
                    </form>
                </section>
            </section>
        </>
    )
}



{/* // class Login extends React.Component {
    //     constructor(props) {
    //         super(props)

    //         this.state = {
    //             username: '',
    //             password: ''
    //         }
    //     }


    //     handleChange = (event) => {
    //         this.setState({
    //             [event.target.name]: event.target.value,
    //         })
    //     }

    //     handleSubmit = (event) => {
    //         event.preventDefault()
    //         checkLogin(this.state)
    //         .then((res) => {
    //             if (res == true) {
    //             swal({
    //                 icon: "success",
    //                 text: "Nice! You are logged in.",
    //                 button: "Cool Beans"})
    //             this.props.history.push('/chat')
    //             } else {
    //                 swal({
    //                     icon: "error",
    //                     text: "Invalid username or password.",
    //                     button: "Cool Beans"})
    //             }
    //         })
    //     } */}