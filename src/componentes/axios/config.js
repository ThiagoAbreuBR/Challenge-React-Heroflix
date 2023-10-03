import axios from "axios";

// Configuração do API Global

const endpointAPI = axios.create({
    baseURL: "http://localhost:3000/",
})

export default endpointAPI;