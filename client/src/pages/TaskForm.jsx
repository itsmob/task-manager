import '../css/TaskForm.css';
import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function TaskForm() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      const res = await updateTask({ ...data, _id: params.id });
      if (res.status == 200) navigate('/tasks');
    } else {
      const res = await createTask(data);
      if (res.status == 200) navigate('/tasks');
    }
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue('title', task.title);
        setValue('description', task.description);
      }
    }

    loadTask();
  }, []);
  return (
    <>
      <main>
        <section className='task-form-page'>
          <form className='task-form' onSubmit={onSubmit}>
            <input className='task-form__title' type='text' placeholder='Title' {...register('title')} autoFocus />
            <textarea
              className='task-form__description'
              rows='3'
              placeholder='Description'
              {...register('description')}
            ></textarea>
            <button className='task-form__button--save'>Save</button>
          </form>
        </section>
      </main>
    </>
  );
}
