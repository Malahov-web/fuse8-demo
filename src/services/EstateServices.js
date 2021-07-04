import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://603e38c548171b0017b2ecf7.mockapi.io",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEstates() {
    return axiosInstance.get("/homes");
  },
};
