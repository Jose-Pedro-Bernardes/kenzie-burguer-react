import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
