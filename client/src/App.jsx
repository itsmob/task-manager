import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TasksProvider } from './context/TasksContext';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import RouteProtector from './components/RouteProtector';
import HomePage from './pages/HomePage';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';
import TaskForm from './pages/TaskForm';

export default function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route element={<RouteProtector />}>
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/add-task' element={<TaskForm />} />
              <Route path='/task/:id' element={<TaskForm />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  );
}
