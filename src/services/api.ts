import axios from 'axios'

const api = axios.create({
    baseURL: 'http://172.18.0.108:3333',
})

export default api