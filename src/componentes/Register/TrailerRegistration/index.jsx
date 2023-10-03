import React, { useState } from 'react';
import endpointAPI from 'componentes/axios/config';
import CampoTexto from 'componentes/TextField';
import ListaSuspensa from 'componentes/DropdownList';
import Button from 'componentes/Button';
import LinkPages from 'componentes/LinkPages';
import "./TrailerRegistration.css";
import { useNavigate } from 'react-router-dom';

const TrailerRegistration = () => {

    const [title, setTitle] = useState("")
    const [wallpaper, setWallpaper] = useState("")
    const [trailer, setTrailer] = useState('')
    const [synopsis, setSynopsis] = useState("")
    const [publishingCompany, setPublishingCompany] = useState("")

    const movieData = { title, wallpaper, trailer, synopsis, publishingCompany };

    const navigateTo = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await endpointAPI.post('/movies', movieData);
            console.log('Resposta do servidor:', response.data);
            navigateTo("/")
        } catch (error) {
            console.error('Erro ao fazer o POST:', error);
        }
    };

    const clearAllFields = () => {
        setTitle("");
        setWallpaper("");
        setTrailer("");
        setSynopsis("");
        setPublishingCompany("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <CampoTexto
                id="title"
                type="text"
                required={true}
                label="Filme"
                placeholder="Nome do filme"
                textarea={true}
                value={title}
                capturingData={value => setTitle(value)}
            />
            <CampoTexto
                id="wallpaper"
                type="text"
                required={true}
                label="Wallpaper"
                placeholder="Recomendado imagens em 4K"
                multiline={true}
                value={wallpaper}
                capturingData={value => setWallpaper(value)}
            />
            <CampoTexto
                id="trailer"
                type="text"
                required={true}
                label="Trailer"
                placeholder="https://www.youtube.com/embed/n7_i3jmG5JI?si=XO3hL5KDeMiHTsks"
                multiline={true}
                value={trailer}
                capturingData={value => setTrailer(value)}
            />
            <CampoTexto
                id="synopsis"
                type="text"
                required={true}
                label="Sinopse"
                placeholder="Um breve resumo do filme"
                multiline={true}
                value={synopsis}
                capturingData={value => setSynopsis(value)}
            />
            <ListaSuspensa
                id="publishingCompany"
                required={true}
                label="Editora"
                value={publishingCompany}
                capturingData={value => setPublishingCompany(value)}
            />
            <div className='btn'>
                <Button customization="btnEnviar" type="submit">Salvar</Button>
                <Button customization="btnLimpar" type="button" onClick={clearAllFields}>Limpar</Button>
                <LinkPages url={"/novaeditora"}>
                    <Button customization="btnNovaEditora" type="button">Nova Editora</Button>
                </LinkPages>
            </div>
        </form>
    );
}

export default TrailerRegistration;