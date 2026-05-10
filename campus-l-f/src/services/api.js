import axios from "axios";

const API = axios.create({
  baseURL: "https://campus-lost-and-found-ifg7.onrender.com/api"
});

export default API;