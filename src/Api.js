import axios from "axios";

const api = axios.create({
    baseURL: 'https://zomatoserver-ujku.onrender.com'
});

export default api;