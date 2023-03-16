import axios from 'axios';

const API_URL = 'http://localhost:3007';

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    
    // localStorage.setItem('user', JSON.stringify(response.data));
    localStorage.setItem('access_token', JSON.stringify(response.data.data.token));

    const response2 = await axios.get(`${API_URL}/me`, 
    {
      headers: {
        Authorization : `Bearer ${response.data.data.token}`
      }
    });
    console.log("🚀 ~ file: authService.js:17 ~ login ~ response2:", response2)

    localStorage.setItem('user', JSON.stringify(response2.data.data));
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

const getMe = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, 
    {
      headers: {
        Authorization : `Bearer ${localStorage.getItem("access_token")}`
      }
    });
    return response.data.data; 
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  login,
  logout,
  register,
  getCurrentUser,
  getMe
};

export default authService;
