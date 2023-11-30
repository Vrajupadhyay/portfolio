import axios from "axios";

const BASE_URL = "https://web.ieeebvm.in/api_portfolio";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
