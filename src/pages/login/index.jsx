import React from "react";
import style from "./style.module.css";
import Card from "../../components/card";


function Login() {
    return (
        <>
            <main className={style.container}>
                <Card>

                    <form className={style.form}>
                        <h3>Login</h3>
                        <label>Email:</label>
                        <input type="email" />
                        <label>Senha:</label>
                        <input type="password" />
                        <button>Entrar</button>
                    </form>
                </Card>

            </main>

        </>
    )
}

export default Login;