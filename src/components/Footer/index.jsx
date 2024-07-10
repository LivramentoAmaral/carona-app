import React from 'react';
import style from "./style.module.css";

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.credits}>
                <p>Autoria: Marcos do Livramento Amaral</p>
                <p>© 2024 - Todos os direitos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;
