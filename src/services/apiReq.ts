import axios, { AxiosInstance } from "axios";

const apiRequest: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

export default apiRequest;