import axios from 'axios';

const API_URL = 'http://localhost:3000';

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    localStorage.setItem('user', JSON.stringify(response.data));
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const register = async (username, email, password) => {
 const response = await axios.post(`${API_URL}/register`, {
   username,
   email,
   password,
 });
 return response.data;
};

const getCurrentUser = () => {
 return JSON.parse(localStorage.getItem('user'));
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  login,
  logout,
  register,
  getCurrentUser
};

export default authService;
