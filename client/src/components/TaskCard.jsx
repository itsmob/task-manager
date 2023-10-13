import '../css/TaskCard.css';
import { useTasks } from '../context/TasksContext';
import { useNavigate } from 'react-router-dom';

export default function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();
  return (
    <div className='task-card'>
      <header className='task-card-header'>
        <h3 className='task-card__title'>{task.title}</h3>
        <div className='task-card__buttons'>
          <button
            className='task-card__button task-card__button--delete'
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
          <button className='task-card__button task-card__button--edit' onClick={() => navigate(`/task/${task._id}`)}>
            Edit
          </button>
        </div>
      </header>
      <p className='task-card__description'>{task.description}</p>
      <p className='task-card__date'>Created at: {new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
}
