import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:3000/api"
})

instance.interceptors.request.use((config) => {

    if(localStorage.getItem("accessToken")) {
        const accessToken = localStorage.getItem("accessToken");
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config;
}, (error) => {
    throw error
}
)

export default instance;