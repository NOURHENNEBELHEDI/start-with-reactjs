import axios from "axios";

const baseApiUrl = "https://fakestoreapi.com";

const apiInstance = axios.create({
  baseURL: baseApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
