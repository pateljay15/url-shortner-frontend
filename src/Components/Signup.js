import React, { useEffect, useState } from 'react';
import Nav from './Nav.js';
import "../Styles/Signup.css";
import { NavLink, Outlet } from 'react-router-dom';
import { ngosignup, signup, authenticate } from '../API_CALLS/apiHandler.js';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [isUser, setIsUser] = useState(true);

    const [userValues, setUserValues] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        error: "",
        loading: "",
        success: false
    })

    
    const handleChange = name => event => {
        setUserValues({ ...userValues, error: false, [name]: event.target.value })
    }
    const history = useNavigate();


    const onSubmit = event => {
        event.preventDefault();
        setUserValues({ ...userValues, error: false });
        if (userValues.password === userValues.cpassword) {
            signup({ name: userValues.name, email: userValues.email, password: userValues.password })
                .then((data) => {
                    if (data.error) {
                        console.log(data)
                        setUserValues({ ...userValues, error: data.error, success: false });
                    } else {
                        console.log(data)
                        setUserValues({
                            ...userValues,
                            name: "",
                            email: "",
                            password: "",
                            error: "",
                            cpassword: "",
                            success: true
                        });
                    }
                    // setSignIn(!signIn);
                    setTimeout(() => { history('/auth/login') }, 3000)

                })
                .catch(console.log("Error in signup"));
        }
        else {
            // toast.error("Confirm Password is different", {
            //     position: toast.POSITION.TOP_RIGHT, autoClose: 2000
            // });
            console.log("Confirm Password is different");
        }

    };



    return (
        <div >
            <Nav />
            <div className="nothing"></div>

            <div className="authenticate_form" >
                <div className="form_header">Sign Up</div>
                        <form className="authenticate_form_field">
                            <input type="text" placeholder="Name" className="textField" value={userValues.firstname} onChange={handleChange("name")} />
                            <br />
                            <br />
                            <input type="email" placeholder="E-mail" className="textField" value={userValues.email} onChange={handleChange("email")} />
                            <br />
                            <br />
                            <input type="password" placeholder="Password" className="textField" value={userValues.password} onChange={handleChange("password")} />
                            <br />
                            <br />
                            <input type="password" placeholder="Confirm Password" className="textField" value={userValues.cpassword} onChange={handleChange("cpassword")} />

                            <br /><br />
                            <button className="sign_btn" onClick={onSubmit} >Sign In</button>

                        </form>
                <hr />
                <div className="form_footer">Have an account <span className="form_footer_link" > <NavLink style={{ textDecoration: 'none' }} to="/auth/login"><span className="link">Login</span></NavLink></span></div>
            </div>
            <Outlet />
        </div>
    );
}

export default Signup;