import React, { useState } from "react";
import style from "./style.module.css";
import Card from "../../components/card";

function Signup() {
    const [userType, setUserType] = useState("cliente");

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <>
            <main className={style.container}>
                <Card>
                    <form className={style.form}>
                        <h3>Cadastro</h3>
                        <label>Nome:</label>
                        <input type="text" />
                        <label>Email:</label>
                        <input type="email" />
                        <label>Senha:</label>
                        <input type="password" />
                        <label>Confirme sua Senha:</label>
                        <input type="password" />
                        <label>Tipo de Usuário:</label>
                        <select className={style.select} onChange={handleUserTypeChange}>
                            <option value="cliente">Cliente Normal</option>
                            <option value="motorista">Motorista</option>
                        </select>

                        {userType === "motorista" && (
                            <>
                                <label>CNH:</label>
                                <input type="text" />
                                <label>Modelo do Carro:</label>
                                <input type="text" />
                                <label>Placa do Carro:</label>
                                <input type="text" />
                            </>
                        )}

                        <button>Cadastrar</button>
                    </form>
                </Card>
            </main>
        </>
    );
}

export default Signup;
