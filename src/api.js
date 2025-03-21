import axios from "axios";

// Configurar el cliente Axios
const api = axios.create({
  baseURL: "https://proyecto-nosti-back.onrender.com/",
  withCredentials: true,
});

// Agregar un interceptor para incluir el token en las cabeceras

export default api;
