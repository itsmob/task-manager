import axios from './axios';

export function createTasksRequest(task) {
  return axios.post('/tasks', task);
}
export function getTasksRequest() {
  return axios.get('/tasks');
}
export function getTaskRequest(id) {
  return axios.get(`/task/${id}`);
}
export function updateTaskRequest(task) {
  return axios.put(`/task/${task._id}`, task);
}
export function deleteTasksRequest(id) {
  return axios.delete(`/task/${id}`);
}
