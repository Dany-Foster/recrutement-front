import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

export const api = axios.create({ baseURL: "http://127.0.0.1:8000/" });

api.interceptors.request.use(function (config) {
  const token = useAuthStore.getState().access
    ? useAuthStore.getState().access
    : null;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete config.headers["Authorization"];
  }
  return config;
});

api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    switch (err.response?.status) {
      case 401:
        console.log("Unauthorized");
        console.log(err.response);
        break;
      case 500:
        console.log(err.response);
        break;
      case 400:
        console.log(err.response);
    }
    return Promise.reject(err);
  },
);
