import axios from "axios";
import { getToken } from "./auth.service";
import { environment } from "../../../environments/environments";

const api = axios.create({
    baseURL: environment.API
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `JWT ${token}`;
    }

    return config;
});

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error.response);
});

export default api;