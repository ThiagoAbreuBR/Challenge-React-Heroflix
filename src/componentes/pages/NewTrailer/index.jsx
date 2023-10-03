import React from "react";
import { Container } from "@mui/material";
import styles from "./NewTrailer.module.css"
import NewTrailerForm from "componentes/Form/NewTrailerForm";


const NewTrailer = () => {
    return (
        <Container component="section" maxWidth="md">
            <h1 className={styles.title}>Quer vê o trailer de seu filme de héroi favorito em nosso streaming</h1>
            <h2 className={styles.subtitle}>Prencha o formulário abaixo e você irá assiti-ló</h2>
            <NewTrailerForm />
        </Container>
    )
}

export default NewTrailer