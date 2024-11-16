import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
              <span className="loginTitle">LogIn</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className='loginInput' placeholder='Enter Your Email' />
        <label>Password</label>
        <input type="password" className='loginInput' placeholder='Enter Your Password' />
        <button className='loginButton'>Log In</button>
      </form>
      <button className='loginRegisterButton'>
      <Link className=' link ' to='/register'>Register</Link>
      </button>
    </div>
  )
}
