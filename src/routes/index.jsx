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
        <Route exact path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/blog" component={Blog} />
        <Route path="/user-profile" component={UserproFile} />
        <Route path="/driver-profile" component={DriveproFile} />
      </Routes>
    </Router>
  );
}


export default Rotas;

