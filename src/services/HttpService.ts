import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

const setupInterceptors = () => {
  axios.defaults.baseURL = BASE_URL;
};

export const HttpService = {
  setupInterceptors,
};
