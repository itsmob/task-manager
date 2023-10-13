import { createContext, useState, useContext } from 'react';
import {
  createTasksRequest,
  getTaskRequest,
  getTasksRequest,
  deleteTasksRequest,
  updateTaskRequest,
} from '../api/tasks';

const TasksContext = createContext();

export function useTasks() {
  const context = useContext(TasksContext);

  if (!context) throw new Error('useAuth must be within an AuthProvider');

  return context;
}

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  async function createTask(task) {
    try {
      const res = await createTasksRequest(task);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async function getTasks() {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTask(id) {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTask(task) {
    try {
      const res = await updateTaskRequest(task);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTask(id) {
    try {
      const res = await deleteTasksRequest(id);
      if (res.status == 204) setTasks(tasks.filter((t) => t._id != id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, getTask, getTasks, updateTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}
