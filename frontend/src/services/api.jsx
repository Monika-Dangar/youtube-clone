// services/api.js
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const api = axios.create({
    baseURL: BACKEND_URL, // change this if hosted elsewhere
});

export default api;
