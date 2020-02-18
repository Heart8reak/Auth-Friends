import axios from 'axios'


let token = localStorage.getItem('token')

export const axiosWithAuth = () => {
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: "http://localhost:5000/api"
    })
}