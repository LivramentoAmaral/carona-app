import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from '../components/common/navbar';
import Blog from '../pages/Blog';
import DriveproFile from '../pages/DriveproFile';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import UserproFile from '../pages/UserproFile';

function Rotas() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/user-profile" element={<UserproFile />} />
        <Route path="/driver-profile" element={<DriveproFile />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
