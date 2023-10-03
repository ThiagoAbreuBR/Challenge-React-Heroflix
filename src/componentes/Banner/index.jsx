import { React, useState } from "react";
import { VideoCard } from "componentes/Carrossel/VideoCard";
import Carrossel from "componentes/Carrossel/Carrossel";
import styles from './Banner.module.css';
import Button from "componentes/Button";
import LinkPages from "componentes/LinkPages";
import styled from "styled-components";

const Background = styled.div`
    background: url(${props => props.wallpaper}) center/cover no-repeat;
    opacity: 0.2;
    position: absolute;
    width: 100%;
    height: 725px;
    z-index: -1;
    border-bottom: 3px solid rgba(255, 206, 0, 1) ;

    @media (max-width: 767px) {
        /* Estilos para telas menores que 768px de largura */
        opacity: 0.5;
        height: 250px;
    }
`;

const Banner = () => {
    const filmes = VideoCard();

    const [filmeSelecionado, setFilmeSelecionado] = useState(null);

    if (filmes.length > 0 && !filmeSelecionado) {
        setFilmeSelecionado(filmes[0]);
    }

    const handleFilmeClick = (filme) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setFilmeSelecionado(filme);
    };

    return (
        <>
            <section className={styles.banner}>
                {filmeSelecionado && (
                    <Background wallpaper={filmeSelecionado.wallpaper} />
                )}
                <div className={styles.infoFilmes}>
                    <h1>{filmeSelecionado ? filmeSelecionado.title : ""}</h1>
                    <p>{filmeSelecionado ? filmeSelecionado.synopsis : ""}</p>
                </div>
                <div className={styles.trailer}>
                    <iframe
                        width="560"
                        height="315"
                        src={filmeSelecionado ? filmeSelecionado.trailer : ""}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <LinkPages url={filmeSelecionado ? filmeSelecionado.trailer : ""}>
                        <Button customization={styles.btnAssistir}>Assistir</Button>
                    </LinkPages>
                </div>
            </section>
            <Carrossel filmes={filmes} onItemClick={handleFilmeClick} />
        </>
    );
};

export default Banner;