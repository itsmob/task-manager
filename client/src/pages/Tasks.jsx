import '../css/Tasks.css';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TasksContext';
import { useEffect } from 'react';
import TaskCard from '../components/TaskCard';

export default function Tasks() {
  const { tasks, getTasks } = useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <>
      <main>
        <section className='container'>
          <header className='tasks-header'>
            <h1 className='tasks-header__h1'>Your tasks</h1>
            <button className='tasks-header__button' onClick={() => navigate('/add-task')}>
              New task
            </button>
          </header>
          <div className='tasks'>
            {tasks.length < 1 ? (
              <h4>Good for you, theres no tasks</h4>
            ) : (
              tasks.map((task) => <TaskCard key={task._id} task={task} />)
            )}
          </div>
        </section>
      </main>
    </>
  );
}
