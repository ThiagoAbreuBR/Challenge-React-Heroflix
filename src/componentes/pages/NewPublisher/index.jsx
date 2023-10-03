import React from "react";
import { Container } from "@mui/material";
import styles from "./NewCategory.module.css"
import NewPublisherForm from "componentes/Form/NewPublisherForm";
import Table from "componentes/Table";

const NewTrailer = () => {

    return (
        <Container component="section" maxWidth="md">
            <h1 className={styles.title}>Sentiu falta de alguma editora de HQ's ?</h1>
            <h2 className={styles.subtitle}>Adicione-a prenchendo esse formulário</h2>
            <NewPublisherForm />
            <Table />
        </Container>

    )
}

export default NewTrailer