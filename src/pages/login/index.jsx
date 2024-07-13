import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

function Login() {
    return (
        <main className={style.container}>
            <div className={style.card}>
                <form className={style.form}>
                    <h3>Login</h3>
                    <div className={style.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button className={style.loginButton} type="submit">Entrar</button>
                    <Link to="/forgot-password" className={style.forgotPasswordLink}>Esqueceu sua senha?</Link>
                </form>
            </div>
        </main>
    );
}

export default Login;
