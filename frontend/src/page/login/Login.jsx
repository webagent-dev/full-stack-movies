import {Link } from 'react-router-dom'
import './login.css'
function Register() {
  return (
    <div className='login__container'>
        <div className="logo__container">
        <img src="/img/main.png" alt="" className="logo" />
        <Link to='/login'>
          <div className="login__btn">Sign In</div>
          </Link>
        </div>
        <div className="login__content">
        <form>
          <h1>sign up</h1>
          <input type='email' placeholder='Email or phone number'className='login__input'/>
          <input type='password' placeholder='Password' className='login__input'/>
          <button className='login__submit'>sign in</button>
           <h2>New to Netflix? Sign up now.</h2>
        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more</span></p>
        </form>
       
    </div>
    </div>
  )
}

export default Register