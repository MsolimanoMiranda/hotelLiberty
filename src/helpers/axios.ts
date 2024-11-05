import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "Accept": 'application/json',
        "Content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
    },
});

export default instance;