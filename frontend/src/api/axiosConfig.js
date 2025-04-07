import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/api", // Updated port here!
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
