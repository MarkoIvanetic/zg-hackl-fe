import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Base URL from environment variable
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
