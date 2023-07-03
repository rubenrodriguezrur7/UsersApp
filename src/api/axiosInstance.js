import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://users-api-vig8.onrender.com",
           /*"https://users-crud.academlo.tech/"*/
});