import React from "react"
import { Container } from "@mui/material"
import styles from "./EditMovie.module.css"
import FormEditMovie from "componentes/Form/FormEditMovie"

const EditMovie = () => {
    return (
        <Container component="section" maxWidth="md">
            <h1 className={styles.title}>Encontrou alguma informação errada ou incompleta ?</h1>
            <h2 className={styles.subtitle}>Disponibilizamos um formulário no qual você pode alterar as informações incorretas</h2>
            <FormEditMovie />
        </Container>
    )
}

export default EditMovie