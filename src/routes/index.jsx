import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from '../components/common/navbar';
import Blog from '../pages/Blog';
import DriveproFile from '../pages/DriveproFile';
import Home from '../pages/Home';
import Register from '../pages/Register';
import UserproFile from '../pages/UserproFile';
import Login from '../pages/login';
import PostDetail from '../pages/postDetails';
import ForgotPassword from '../pages/ForgotPassword';

function Rotas() {
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/faq" element={<Faq />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/user-profile" element={<UserproFile />} />
        <Route path="/driver-profile" element={<DriveproFile />} />
        <Route path="/post/:id" element={<PostDetail/>} />

      </Routes>
    </Router>
  );
}

export default Rotas;
