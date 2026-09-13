// ==============================
// Import Axios
// ==============================
import axios from "axios";

// ==============================
// Create Axios Instance
// ==============================
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// ==============================
// Export Axios Instance
// ==============================
export default api;
