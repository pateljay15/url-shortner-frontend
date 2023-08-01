import React, { useState } from 'react';
import Nav from './Nav.js';
import "../Styles/Login.css";
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ngosignin, signin, authenticate } from '../API_CALLS/apiHandler.js';


function Login() {
    const [isUser, setIsUser] = useState(true);
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        error: "",
        loading: "",
        success: false
    })

    const { name, email, password, cpassword, error, success } = values;
    const history = useNavigate();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const onSignin = event => {
        event.preventDefault()
        setValues({ ...values, error: false, loading: "" })
        signin({ email, password })
            .then(data => {
                console.log(data);
                if (data.error) {
                    // toast.error("Invalid Credential", {
                    //     position: toast.POSITION.TOP_RIGHT, autoClose: 2000
                    // });
                    setValues({ ...values, error: data.error, loading: "" })
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                        })
                    })
                    // toast.success("You are signed in ", {
                    //     position: toast.POSITION.TOP_RIGHT, autoClose: 2000
                    // });
                    setTimeout(() => { history('/') }, 3000)

                }
            })
            .catch(console.log("Signin request failed"))
    }

    return (
        <div >
            <Nav />
            <div className="nothing"></div>

            <div className="authenticate_form" >
                <div className="form_header">Login</div>
                <form className="authenticate_form_field">
                    <input type="email" placeholder="E-mail" className="textField" value={email} onChange={handleChange("email")} />
                    <br />
                    <br />
                    <input type="password" placeholder="Password" className="textField" value={password} onChange={handleChange("password")} />

                    <br /><br />
                    
                    <button className="sign_btn" onClick={onSignin} >Sign In</button>
                    


                </form>
                <hr />
                <div className="form_footer">New user? <span className="form_footer_link" > <NavLink style={{ textDecoration: 'none' }} to="/auth/signup"><span className="link">Create Account</span></NavLink></span></div>
            </div>
            <Outlet />
        </div>
    );
}

export default Login;