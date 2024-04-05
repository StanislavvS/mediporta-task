import axios from "axios";
import { BASE_PATH } from "../../data/paths";

const axiosInstance = axios.create({
  baseURL: BASE_PATH,
  headers: {
    "Content-Type": "application/json",
    // @ts-ignore
  },
});

export default axiosInstance;
