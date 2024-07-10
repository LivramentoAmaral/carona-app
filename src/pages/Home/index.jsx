import React from "react";
import styles from "./style.module.css";
import Header from "../../components/Header";
import comoFunImg from "../../assets/comoFunciona/comofunciona.jpeg";
import pqImg from "../../assets/pqusar/pqimg.jpeg";
import princImg from "../../assets/principaisRecusos/princimg.jpeg";
import pergunImg from "../../assets/perguntas/perguntasImg.jpeg";
import Footer from "../../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <img src={comoFunImg} alt="Como funciona" className={styles.sectionImage} />
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Como funciona?</h2>
                        <p className={`${styles.sectionText} ${styles.largeText}`}>É simples! Basta se cadastrar, criar um perfil e procurar por pessoas que fazem o mesmo trajeto que você.</p>
                    </div>
                </section>
                <section className={styles.section}>
                    <img src={pqImg} alt="Por que usar" className={styles.sectionImage} />
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Por que usar o CaronaApp?</h2>
                        <p className={`${styles.sectionText} ${styles.largeText}`}>Além de economizar com combustível, você ainda ajuda o meio ambiente e faz novas amizades.</p>
                    </div>
                </section>
                <section className={styles.section}>
                    <img src={princImg} alt="Principais Recursos" className={styles.sectionImage} />
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Principais Recursos</h2>
                        <ul className={styles.sectionList}>
                            <li className={styles.sectionListItem}>Busca por trajetos similares</li>
                            <li className={styles.sectionListItem}>Sistema de avaliação de caronas</li>
                            <li className={styles.sectionListItem}>Notificações em tempo real</li>
                        </ul>
                    </div>
                </section>
                <section className={styles.section}>
                    <img src={pergunImg} alt="Perguntas Frequentes" className={styles.sectionImage} />
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
                        <h3>Segurança</h3>
                        <p className={styles.sectionText}>Como o CaronaApp garante a segurança dos usuários?</p>
                        <p className={styles.sectionText}>Resposta: Utilizamos um sistema de avaliações e verificações para garantir a confiabilidade dos usuários.</p>
                        <h3>Tarifas</h3>
                        <p className={styles.sectionText}>O CaronaApp cobra alguma tarifa?</p>
                        <p className={styles.sectionText}>Resposta: O CaronaApp é gratuito, mas os motoristas podem definir uma contribuição para ajudar nos custos de combustível.</p>
                        <h3>Pagamento</h3>
                        <p className={styles.sectionText}>Como funciona o pagamento?</p>
                        <p className={styles.sectionText}>Resposta: Os pagamentos são feitos diretamente entre os usuários, sem intermediação da plataforma.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
