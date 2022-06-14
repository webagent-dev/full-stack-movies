import {Link } from 'react-router-dom'
import './register.css'
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
          <input type='text' placeholder='Username' className='login__input' />
          <input type='email' placeholder='Email'className='login__input'/>
          <input type='password' placeholder='Password' className='login__input'/>
          <button className='login__submit'>sign Up</button>
           <h2 class="account_ready">already have an account? <Link to='/login' className='color'>Sign in now.</Link></h2>
        <p className='cap'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more</span></p>
        </form>
       
    </div>
    </div>
  )
}

export default Register