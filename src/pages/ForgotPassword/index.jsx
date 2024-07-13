import React from "react";
import style from "./style.module.css";

function ForgotPassword() {
    return (
        <main className={style.container}>
            <div className={style.card}>
                <form className={style.form}>
                    <h3>Recuperar Senha</h3>
                    <div className={style.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <button className={style.recoverButton} type="submit">Enviar Instruções</button>
                </form>
            </div>
        </main>
    );
}

export default ForgotPassword;
