import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import "../Styles/Signup.css";
import { getUrl, isAuthenticated, urlPost } from '../API_CALLS/apiHandler.js';
import {useNavigate, useParams} from "react-router-dom";


function Updateurl({urlId}) {
    const { user, token } = isAuthenticated();
    const [urlValues, setUrlValues] = useState({
        longUrl: "",
        error: "",
        loading: "",
        success: false
    })


    const loadAllUrl = () => {
        getUrl(urlId).then(data => {
            if (data.error) {
            } else {
                setUrlValues({...urlValues, longUrl: data.longUrl});
            }
        })
    }

    useEffect(() => {
        loadAllUrl();
    }, [])
    
    const handleChange = name => event => {
        setUrlValues({ ...urlValues, error: false, [name]: event.target.value })
    }


    const onSubmit = event => {
        event.preventDefault();
        setUrlValues({ ...urlValues, error: false });
        urlPost(user._id, token, { longUrl: urlValues.longUrl, user: user._id }).then((data) => {
                    if (data.error) {
                        console.log(data)
                        setUrlValues({ ...urlValues, error: data.error, success: false });
                    } else {
                        console.log(data)
                        setUrlValues({
                            ...urlValues,
                            longUrl: "",
                            error: "",
                            cpassword: "",
                            success: true
                        });
                    }
                    // setSignIn(!signIn);

                })
                .catch(console.log("Error in signup"));
        }
    return (
        <div className="urlconversion">
            <Nav />
            <div className="authenticate_form" >
                <div className="form_header">Sign Up</div>
                        <form className="authenticate_form_field">
                            <input type="text" placeholder="Long URL" className="textField" value={urlValues.longUrl} onChange={handleChange("longUrl")} />
                            {urlValues.longUrl}
                            <br />
                            <br /><br />
                            <button className="sign_btn" onClick={onSubmit} >Convert</button>

                        </form>
                <hr />
                
            </div>
        </div>
    );
}
export default Updateurl;