import { Link } from 'react-router-dom';

import '../../assets/css/signup.css';

import logo from '../../assets/images/logo.png';

export default function LoginSuccess() {
  return (
    <div className='signup-container'>
      <div className='signup-main-container'>
        <div className='right-col'>
          <div className='form-container'>
            <form>
              <img src={logo} alt='' />
              <h3>Login Successful</h3>
            </form>
          </div>
          <div>
            <br />
            <p>
              If you're not redirected to the homepage, click{' '}
              <Link className='color-blue' to='/'>
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
