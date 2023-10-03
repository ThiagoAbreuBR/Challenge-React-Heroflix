import { useEffect, useState } from "react";
import styles from "./Table.module.css";
import LinkPages from "componentes/LinkPages";
import endpointAPI from "componentes/axios/config.js";

const Table = () => {
    const [trailer, setTrailer] = useState([]);

 
    useEffect(() => {
        endpointAPI.get("/movies/")
            .then((resposta) => {
                setTrailer(resposta.data);
            })
            .catch(() => {
                console.log("Infelizmente deu erro na sua requisição de API");
            });
    }, []);

    function apagartrailer(id) {
        endpointAPI.delete(`/movies/${id}`)
            .then(() => {
                setTrailer(trailer.filter(movie => movie.id !== id));
            })
            .catch((error) => {
                console.log("Erro ao excluir trailer:", error);
            });
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Filme</th>
                    <th>Editora</th>
                    <th>Editar</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                {trailer.map((item) => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.publishingCompany}</td>
                        <td>
                            <LinkPages url={`/editarfilme/${item.id}`}>
                                <button className={styles.btnEditar}>Editar</button>
                            </LinkPages>
                        </td>
                        <td>
                            <button
                                onClick={() => apagartrailer(item.id)}
                                className={styles.btnRemover}
                            >
                                Remover
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
