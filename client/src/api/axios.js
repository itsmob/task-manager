import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.TASKS_MANAGER_SERVER_URL,
  withCredentials: true,
});

export default instance;
