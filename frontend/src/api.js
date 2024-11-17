import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

// Add a request interceptor to include the token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authTokens');
    if (token) {
      config.headers['Authorization'] = JSON.parse(token);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
