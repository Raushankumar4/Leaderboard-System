import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER}/api`,
});

export const getUsers = () => API.get("/users");
export const addUser = (name) => API.post("/users", { name });
export const claimPoints = (userId) => API.post("/users/claim", { userId });
export const getHistory = () => API.get("/history");
