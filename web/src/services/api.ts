import axios from 'axios';
import { useLocation } from "react-router-dom";

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
