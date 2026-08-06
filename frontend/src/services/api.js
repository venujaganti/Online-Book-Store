import axios from "axios";

// Change this URL when deploying
const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBooks = () => API.get("/books");

export const getBookById = (id) => API.get(`/books/${id}`);

export const createOrder = (order) => API.post("/orders", order);

export default API;