import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logocarona.jpeg";
import Footer from "../../components/Footer";
import styles from "./style.module.css";

const posts = [
    {
        id: 1,
        title: "Vantagens do CaronaApp",
        date: "2024-07-12",
        content: "O CaronaApp oferece diversas vantagens, como economia de combustível, redução do trânsito e a possibilidade de fazer novas amizades...",
        image: logo
    },
    {
        id: 2,
        title: "Dicas de Segurança para Caronas",
        date: "2024-07-11",
        content: "A segurança é uma das nossas principais preocupações. Confira algumas dicas para garantir uma carona segura...",
        image: logo
    },
    {
        id: 3,
        title: "Como Funciona o Sistema de Avaliações",
        date: "2024-07-10",
        content: "Nosso sistema de avaliações é essencial para manter a confiança entre os usuários. Saiba como ele funciona...",
        image: logo
    },
    {
        id: 4,
        title: "Como Funciona o Sistema de Avaliações",
        date: "2024-07-10",
        content: "Nosso sistema de avaliações é essencial para manter a confiança entre os usuários. Saiba como ele funciona...",
        image: logo
    }
];

function Blog() {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Blog</h1>
                <div className={styles.postsContainer}>
                    {posts.map(post => (
                        <div key={post.id} className={styles.card}>
                            <Link to={`/post/${post.id}`} className={styles.cardLink}>
                                <img src={post.image} alt={post.title} className={styles.cardImage} />
                                <div className={styles.cardContent}>
                                    <h2 className={styles.cardTitle}>{post.title}</h2>
                                    <p className={styles.cardDate}>{post.date}</p>
                                    <p className={styles.cardText}>{post.content.substring(0, 100)}...</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Blog;
