import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

export function registerUser(name, email, password, dni) {
  return axios.post(`${API_BASE_URL}/register`, { name, email, password, dni });
}