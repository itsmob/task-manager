import axios from './axios';

export function registerRequest(user) {
  return axios.post(`/register`, user);
}
export function loginRequest(user) {
  return axios.post(`/login`, user);
}

export function verifyTokenRequest() {
  return axios.get(`/auth/verify-sesion-token`);
}
