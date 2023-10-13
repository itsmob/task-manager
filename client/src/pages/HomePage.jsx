import '../css/HomePage.css';
import { useAuth } from '../context/AuthContext';

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();
  return (
    <>
      <main className='home'>
        <div className='container'>
          <div className='content'>
            <section className='hero'>
              <h1>Tasks manager</h1>
              {isAuthenticated && <h3>Welcome {user.username}</h3>}
              <h3>Chores down, happy life</h3>
              <p>Create a structure for your daily tasks and keep the track of them for free! </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
