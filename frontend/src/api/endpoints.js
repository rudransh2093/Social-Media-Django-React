import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/'

const api = axios.create({
    baseURL:BASE_URL,
    withCredentials:true
})

export const get_user_profile_data = async (username) => {
    const response = await api.get(`/user_data/${username}/`);
    return response.data
}
