import React from "react";
import style from "./style.module.css";

function Card({ children }) {
    return (

        <div className={style.card}>
            {children}
        </div>
    );
}

export default Card;
