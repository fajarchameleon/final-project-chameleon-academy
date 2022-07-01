
import axios from 'axios';

const api = axios.create({
 baseURL:  process.env.REACT_APP_API_HOST,
 /* other custom settings */
 validateStatus: () => true,
});

export default api;