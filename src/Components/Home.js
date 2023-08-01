import React from 'react';
import Nav from './Nav.js';
import '../Styles/Home.css';
import Footer from './Footer.js';
import { NavLink, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../API_CALLS/apiHandler.js';



function Home() {

    const { user, token } = isAuthenticated();
    return (
        <div >
            <Nav />
            <Footer />
            <Outlet />

        </div>
    );
}

export default Home;