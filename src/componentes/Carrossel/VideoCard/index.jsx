import { useState, useEffect } from 'react';
import endpointAPI from 'componentes/axios/config';

export const VideoCard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const response = await endpointAPI.get("/movies/");
                setMovies(response.data);
            } catch (error) {
                console.log("Erro na Requisição de API:", error);
            }
        };
        fetchingData();
    }, []);

    return movies;
};
