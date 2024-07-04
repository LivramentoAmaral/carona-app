import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Faq from '../pages/Faq';
import Blog from '../pages/Blog';
import UserproFile from '../pages/UserproFile';
import DriveproFile from '../pages/DriveproFile';
import Footer from '../components/Footer';
import NavBar from '../components/common/navbar';


function Rotas() {
  return (
    <Router>
    <NavBar />
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/blog" component={Blog} />
        <Route path="/user-profile" component={UserproFile} />
        <Route path="/driver-profile" component={DriveproFile} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default Rotas;

