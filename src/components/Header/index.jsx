import React from "react";
import imgApre from "../../assets/apresentaition/apresentation.jpeg";
import styles from "./style.module.css"; // Importe o CSS Module

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.imageContainer}>
                <img src={imgApre} alt="Apresentação" className={styles.headerImage} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.headerTitle}>Bem-vindo ao CaronaApp</h1>
                <p className={styles.headerSubtitle}>A plataforma que facilita a carona entre amigos e colegas.</p>
                </div>
        </header>
    );
}

export default Header;
