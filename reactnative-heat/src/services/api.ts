import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.47.1:4000",
});
