import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link to="/">CaronaApp</Link>
      </div>
      <ul className={styles.navbarLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/user-profile">Meu Perfil</Link></li>
        <li><Link to="/driver-profile">Perfil do Motorista</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
