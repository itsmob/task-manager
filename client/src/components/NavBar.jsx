import '../css/NavBar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <>
      <nav className='nav'>
        <div className='container'>
          <div className='nav-content'>
            <h3 className='app-title'>
              <Link className='nav__link' to='/'>
                Tasks manager
              </Link>
            </h3>
            <ul className='nav__links'>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link className='nav__link' to='/tasks'>
                      Tasks
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='nav__link'
                      to='/'
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className='nav__link' to='/register'>
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className='nav__link' to='/login'>
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
