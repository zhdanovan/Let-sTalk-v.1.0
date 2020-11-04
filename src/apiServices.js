import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true
});

export default {
    auth: {
        login: ({nickname, password}) => axiosInstance.post('/auth', {nickname, password})
    },
    user: {
        create: ({nickname, password}) => axiosInstance.post('/user', {nickname, password}),
        getProfile: () => axiosInstance.get('/user')
    }
};