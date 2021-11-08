import axios from 'axios'


const API_URL = `http://hn.algolia.com/api/v1/`;

const api = axios.create({
    baseURL: `${API_URL}`,
});

export default api;