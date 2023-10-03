import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CampoTexto from 'componentes/TextField';
import ListaSuspensa from 'componentes/DropdownList';
import Button from 'componentes/Button';
import endpointAPI from 'componentes/axios/config';


const EditFilm = () => {

    const { movieId } = useParams();

    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [wallpaper, setWallpaper] = useState("");
    const [trailer, setTrailer] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [publishingCompany, setPublishingCompany] = useState("");

    useEffect(() => {
        async function buscarDadosFilme() {
            try {
                const response = await endpointAPI.get(`/movies/${movieId}`);
                const movieData = response.data

                setTitle(movieData.title);
                setWallpaper(movieData.wallpaper);
                setTrailer(movieData.trailer);
                setSynopsis(movieData.synopsis);
                setPublishingCompany(movieData.publishingCompany);
            } catch (error) {
                console.error('Erro ao buscar os dados do filme:', error);
            }
        }

        if (movieId) {
            buscarDadosFilme();
        }
    }, [movieId]);


    const handleSubmit = async (e) => {
        e.preventDefault();


        const movieDataAtualizado = {
            title,
            wallpaper,
            trailer,
            synopsis,
            publishingCompany,
        };

        try {

            const response = await endpointAPI.put(`/movies/${movieId}`, movieDataAtualizado);

            console.log('Resposta do servidor:', response.data);
            navigate("/novaeditora")


        } catch (error) {
            console.error('Erro ao fazer a atualização:', error);

        }
    };

    const clearAllFields = () => {
        setTitle("");
        setWallpaper("");
        setTrailer("")
        setSynopsis("");
        setPublishingCompany("")
    };


    return (
        <form onSubmit={handleSubmit}>
            <CampoTexto
                id="title"
                type='text'
                required={true}
                label="Filme"
                placeholder="Nome do filme"
                textarea={false}
                value={title}
                capturingData={value => setTitle(value)}
            />

            <CampoTexto
                id="wallpaper"
                type='text'
                required={true}
                label="Wallpaper"
                placeholder="Recomendado imagens em 4K"
                multiline={true}
                value={wallpaper}
                capturingData={value => setWallpaper(value)}
            />

            <CampoTexto
                id="trailer"
                type='text'
                required={true}
                label="Trailer"
                placeholder="https://www.youtube.com/embed/n7_i3jmG5JI?si=XO3hL5KDeMiHTsks"
                multiline={true}
                value={trailer}
                capturingData={value => setTrailer(value)}
            />

            <CampoTexto
                id="synopsis"
                type='text'
                label="Sinopse"
                required={true}
                placeholder="Um breve resumo do filme"
                multiline={true}
                value={synopsis}
                capturingData={value => setSynopsis(value)}
            />

            <ListaSuspensa
                id="publishingCompany"
                required={true}
                label="Editora"
                placeholder="Nome da editora"
                value={publishingCompany}
                capturingData={value => setPublishingCompany(value)}
            />

            <div className='btn'>
                <Button customization="btnEnviar" type="submit">Salvar</Button>

                <Button customization="btnLimpar" type="button" onClick={clearAllFields}>Limpar</Button>

            </div>

        </form>
    );
}

export default EditFilm;