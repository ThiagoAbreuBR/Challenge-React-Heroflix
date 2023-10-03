import React, { useState } from 'react';
import CampoTexto from 'componentes/TextField';
import ColorField from 'componentes/ColorField';
import styles from "./PublisherRegistration.module.css"
import { useNavigate } from 'react-router-dom';
import Button from 'componentes/Button';
import endpointAPI from 'componentes/axios/config';

const PublisherRegistration = () => {

    const [publishingCompany, setPublishingCompany] = useState('')
    const [background, setBackground] = useState('')
    const [color, setColor] = useState('')

    const publisherDetails = { publishingCompany, background, color };

    const navigateTo = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await endpointAPI.post('/colors', publisherDetails);
            console.log('Resposta do servidor:', response.data);
            navigateTo("/")
        } catch (error) {
            console.error('Erro ao fazer o POST:', error);
        }
    };

    const clearAllFields = () => {
        setPublishingCompany("");
        setBackground("");
        setColor("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <CampoTexto
                id="publishingCompany"
                type="text"
                required={true}
                label="Nova editora"
                placeholder="Editora"
                value={publishingCompany}
                capturingData={value => setPublishingCompany(value)}
            />
            <ColorField
                id="background"
                type="color"
                required={true}
                label="Cor de fundo"
                value={background}
                capturingData={value => setBackground(value)}
            />
            <ColorField
                id="color"
                type="color"
                required={true}
                label="Cor"
                value={color}
                capturingData={value => setColor(value)}
            />

            <div className={styles.btn}>
                <Button customization={styles.btnEnviar} type="submit">Salvar</Button>
                <Button customization={styles.btnLimpar} type="button" onClick={clearAllFields}>Limpar</Button>
            </div>


        </form>
    );
}

export default PublisherRegistration;