import axios from "axios";

export const url = axios.create({
    baseURL="http://localhost:4000/api",
    timeout: 1000
});