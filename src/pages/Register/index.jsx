import React, { useState } from "react";
import style from "./style.module.css";

function Signup() {
    const [userType, setUserType] = useState("cliente");

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    return (
        <main className={style.container}>
            <div className={style.card}>
                <form className={style.form}>
                    <h3>Cadastro</h3>
                    <div className={style.formGroup}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="confirmPassword">Confirme sua Senha:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="userType">Tipo de Usuário:</label>
                        <select id="userType" className={style.select} onChange={handleUserTypeChange}>
                            <option value="cliente">Cliente Normal</option>
                            <option value="motorista">Motorista</option>
                        </select>
                    </div>

                    {userType === "motorista" && (
                        <>
                            <div className={style.formGroup}>
                                <label htmlFor="cnh">CNH:</label>
                                <input type="text" id="cnh" name="cnh" />
                            </div>
                            <div className={style.formGroup}>
                                <label htmlFor="carModel">Modelo do Carro:</label>
                                <input type="text" id="carModel" name="carModel" />
                            </div>
                            <div className={style.formGroup}>
                                <label htmlFor="carPlate">Placa do Carro:</label>
                                <input type="text" id="carPlate" name="carPlate" />
                            </div>
                        </>
                    )}

                    <button className={style.signupButton} type="submit">Cadastrar</button>
                </form>
            </div>
        </main>
    );
}

export default Signup;
