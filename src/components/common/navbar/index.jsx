import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importe useLocation do react-router-dom
import styles from './style.module.css'; // Importe seus estilos CSS aqui
import logo from '../../../assets/logo/logocarona.jpeg';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Obtenha o local atual usando useLocation()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link to="/"><img src={logo} alt="Logo Carona" /></Link>
      </div>
      <div className={styles.navbarMenu}>
        <ul className={`${styles.navbarLinks} ${menuOpen ? styles.open : ''}`}>
          <li><Link to="/" onClick={toggleMenu} className={location.pathname === '/' ? styles.active : ''}>Home</Link></li>
          <li><Link to="/blog" onClick={toggleMenu} className={location.pathname === '/blog' ? styles.active : ''}>Blog</Link></li>
          <li><Link to="/user-profile" onClick={toggleMenu} className={location.pathname === '/user-profile' ? styles.active : ''}>Meu Perfil</Link></li>
          <li><Link to="/driver-profile" onClick={toggleMenu} className={location.pathname === '/driver-profile' ? styles.active : ''}>Perfil do Motorista</Link></li>
          <li><Link to="/register" onClick={toggleMenu} className={location.pathname === '/register' ? styles.active : ''}>Registrar</Link></li>
          <li><Link to="/login" onClick={toggleMenu} className={location.pathname === '/login' ? styles.active : ''}>Login</Link></li>
        </ul>
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Abrir Menu">
          <span className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
