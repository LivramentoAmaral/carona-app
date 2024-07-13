import React from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo/logocarona.jpeg";
import Footer from "../../components/Footer";
import styles from "./style.module.css";

const posts = [
    {
        id: 1,
        title: "Vantagens do CaronaApp",
        date: "2024-07-12",
        author: "Marcos do Livramento Amaral ",
        categories: ["Dicas", "Economia", "Sustentabilidade"],
        content: "O CaronaApp oferece diversas vantagens para quem utiliza o serviço. Além de economizar com combustível, você contribui para a redução do trânsito e tem a possibilidade de fazer novas amizades durante os trajetos. A plataforma foi desenvolvida pensando na praticidade e na segurança dos usuários, proporcionando uma experiência agradável e colaborativa. Ao compartilhar caronas, você não só economiza dinheiro, mas também ajuda o meio ambiente ao reduzir as emissões de carbono. Experimente o CaronaApp hoje mesmo e descubra como é simples e gratificante compartilhar viagens com outras pessoas!",
        image: logo
    },
    {
        id: 2,
        title: "Dicas de Segurança para Caronas",
        date: "2024-07-11",
        author: "Marcos do Livramento Amaral",
        categories: ["Segurança", "Dicas", "Comunidade"],
        content: "A segurança é uma das nossas principais preocupações no CaronaApp. Para garantir viagens seguras e tranquilas, recomendamos algumas práticas simples que podem fazer toda a diferença: 1. Verifique o perfil do motorista e leia as avaliações de outros usuários antes de aceitar uma carona. 2. Compartilhe detalhes da sua viagem com amigos ou familiares, informando o trajeto planejado e o horário estimado de chegada. 3. Escolha pontos de encontro seguros e bem iluminados para embarque e desembarque. 4. Durante a viagem, mantenha-se atento ao trajeto e comunique qualquer desconforto ou emergência imediatamente. Com essas dicas simples, você pode aproveitar ao máximo os benefícios do CaronaApp de maneira segura e confiável.",
        image: logo
    },
    {
        id: 3,
        title: "Como Funciona o Sistema de Avaliações",
        date: "2024-07-10",
        author: "Marcos do Livramento Amaral",
        categories: ["Funcionalidades", "Avaliações", "Comunidade"],
        content: "O sistema de avaliações do CaronaApp desempenha um papel crucial na construção da confiança entre os usuários. Após cada viagem, tanto o motorista quanto o passageiro têm a oportunidade de avaliar sua experiência com estrelas e comentários. Essas avaliações são visíveis para todos os usuários da plataforma, ajudando a identificar perfis confiáveis e garantindo um ambiente seguro para todos. Além das avaliações, também incentivamos os usuários a completarem seus perfis com informações precisas e verificadas, como foto e documentos de identificação, aumentando ainda mais a transparência e a confiabilidade. No CaronaApp, a sua segurança e satisfação são prioridades, e nosso sistema de avaliações é projetado para refletir isso.",
        image: logo
    },
    {
        id: 4,
        title: "Como Funciona o Sistema de Avaliações",
        date: "2024-07-10",
        author: "Marcos do Livramento Amaral",
        categories: ["Funcionalidades", "Avaliações", "Comunidade"],
        content: "O sistema de avaliações do CaronaApp desempenha um papel crucial na construção da confiança entre os usuários. Após cada viagem, tanto o motorista quanto o passageiro têm a oportunidade de avaliar sua experiência com estrelas e comentários. Essas avaliações são visíveis para todos os usuários da plataforma, ajudando a identificar perfis confiáveis e garantindo um ambiente seguro para todos. Além das avaliações, também incentivamos os usuários a completarem seus perfis com informações precisas e verificadas, como foto e documentos de identificação, aumentando ainda mais a transparência e a confiabilidade. No CaronaApp, a sua segurança e satisfação são prioridades, e nosso sistema de avaliações é projetado para refletir isso.",
        image: logo
    }
];

function PostDetail() {
    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <>
            <main className={styles.main}>
                <article className={styles.article}>
                    <img src={post.image} alt={post.title} className={styles.postImage} />
                    <div className={styles.postContent}>
                        <h1 className={styles.postTitle}>{post.title}</h1>
                        <div className={styles.postMeta}>
                            <p className={styles.postDate}>Publicado em {post.date}</p>
                            <p className={styles.postAuthor}>Por: {post.author}</p>
                        </div>
                        <div className={styles.postCategories}>
                            {post.categories.map((category, index) => (
                                <span key={index} className={styles.category}>{category}</span>
                            ))}
                        </div>
                        <p className={styles.postText}>{post.content}</p>
                    </div>
                </article>
                <div className={styles.shareButtons}>
                    <button className={styles.shareButton}>Compartilhar no Facebook</button>
                    <button className={styles.shareButton}>Compartilhar no Twitter</button>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default PostDetail;
