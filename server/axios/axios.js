import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
});
// const axiosInstanceSanctum = axios.create({
//     baseURL: "http://localhost:8000",
//     withCredentials: true,
// });
// export const getCsrfCookie = () => axiosInstanceSanctum.get("/sanctum/csrf-cookie");
//add authToken if presetn
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        console.log({ token });
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
