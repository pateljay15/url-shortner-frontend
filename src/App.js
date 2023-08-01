import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import Urlconversion from './Components/Urlconversion.js';
import Viewurls from './Components/Viewurls.js';
import Updateurl from './Components/Updateurl.js';
// import Profile from './Components/Profile.js';
// import Acceptedplaces from './Components/Acceptedplaces.js';
// import Myplaces from './Components/Myplaces.js';

function App() {
  return (
    <div >
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/url-conversion" element={<Urlconversion />} />
          <Route path="/view-urls" element={<Viewurls />} />
          <Route path="/update-url" element={<Updateurl />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;