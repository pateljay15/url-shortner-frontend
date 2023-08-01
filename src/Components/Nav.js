import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../Styles/Nav.css'
import { isAuthenticated } from '../API_CALLS/apiHandler.js';
import { useNavigate } from 'react-router';

function Nav() {
    const { user, token } = isAuthenticated();
    // console.log(ngo);
    let navigate = useNavigate();
    const onLogout = event => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div >
            <div className="navbar">
                <div className="navbar_heading">URL Shortner</div>
                <div className="navbar_link">
                    <div className="nav_link">
                        <ul>
                            <li> <NavLink style={{ textDecoration: 'none' }} to="/"><span className="link">Home</span></NavLink></li>
                            {user !== undefined ?
                            <>
                                <li> <NavLink style={{ textDecoration: 'none' }} to="/url-conversion"><span className="link">URL conversion</span></NavLink></li>
                                <li> <NavLink style={{ textDecoration: 'none' }} to="/view-urls"><span className="link">View My URLs</span></NavLink></li>
                            </>
                            :
                            <>
                            </>
                        }
                            

                        </ul>
                    </div>
                    <div className="auth_link">
                        {user !== undefined ?
                            <>
                                <span className="auth" onClick={onLogout}>Logout</span>
                                {/* <NavLink style={{ textDecoration: 'none' }} to="/profile"><span className="auth from_bottom">Profile</span></NavLink> */}
                            </>
                            :
                            <>
                                <NavLink style={{ textDecoration: 'none' }} to="/auth/login"><span className="auth">Login</span></NavLink>
                            </>
                        }

                    </div>
                </div>

            </div>
            <Outlet />
        </div>
    );
}

export default Nav;