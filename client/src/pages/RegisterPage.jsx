import '../css/RegisterPage.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      <section className='register'>
        <div className='container'>
          <div className='register-content'>
            <form className='register-form' onSubmit={onSubmit}>
              <h3>Register</h3>
              {RegisterErrors.map((error, i) => (
                <div className='error-msg' key={i}>
                  {error}
                </div>
              ))}
              <input
                className='register-form__input register-form__input--username'
                placeholder='Username'
                type='text'
                {...register('username', { required: true })}
              />
              {errors.username && <p className='register__error'>Username is required</p>}
              <input
                className='register-form__input register-form__input--email'
                placeholder='Email'
                type='email'
                {...register('email', { required: true })}
              />
              {errors.email && <p className='register__error'>Email is required</p>}
              <input
                className='register-form__input register-form__input--password'
                placeholder='Password'
                type='password'
                {...register('password', { required: true })}
              />
              {errors.password && <p className='register__error'>Password is required</p>}
              <button className='register-form__submit-button' type='submit'>
                Register
              </button>
              <p className='goto-signin'>
                Have an account? <Link to='/login'>Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
