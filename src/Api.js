import axios from "axios";

const api = axios.create({
    baseURL: 'https://zomatocloneserver.onrender.com'
});

export default api;