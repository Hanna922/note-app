import axios from "axios";

const API = axios.create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
