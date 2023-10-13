import '../css/Loginpage.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: SigninErrors, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <section className='login'>
      <div className='container'>
        <div className='login-content'>
          <form className='login-form' onSubmit={onSubmit}>
            <h3>Login</h3>
            {SigninErrors.map((error, i) => (
              <div className='error-msg' key={i}>
                {error}
              </div>
            ))}
            <input
              className='login-form__input login-form__input--email'
              placeholder='Email'
              type='email'
              {...register('email', { required: true })}
            />
            {errors.email && <p className='login__error'>Email is required</p>}
            <input
              className='login-form__input login-form__input--password'
              placeholder='Password'
              type='password'
              {...register('password', { required: true })}
            />
            {errors.password && <p className='login__error'>Password is required</p>}
            <button className='register-form__submit-button' type='submit'>
              Login
            </button>
            <p className='goto-signup'>
              Dont have an account? <Link to='/register'>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
