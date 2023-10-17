import axios from 'axios';

const instance = axios.create({
  baseURL: `https://task-manager-server-dgh7.onrender.com/api`,
  withCredentials: true,
});

export default instance;
