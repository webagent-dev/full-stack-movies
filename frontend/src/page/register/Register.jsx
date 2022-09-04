  import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './register.css'
function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate()
  
  const registerUser = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post('http://localhost:80880/api/v1/register_user',
          { name, email, password }) 
        console.log(res)
        if (res.data) {
          Navigate('/login', {replace: true})
        }
      } catch (err) {
        console.log(err.message)
        }
      }
  return (
    <div className='login__container'>
        <div className="logo__container">
        <img src="/img/main.png" alt="" className="logo" />
        <Link to='/login'>
          <div className="login__btn">Sign In</div>
          </Link>
        </div>
        <div className="login__content">
        <form onSubmit={() => registerUser()}>
          <h1>sign up</h1>
          <input type='text' placeholder='Username' className='login__input' onChange={(e) => setName(e.target.value)}/>
          <input type='email' placeholder='Email'className='login__input' onChange={(e) => setEmail(e.target.value)}/>
          <input type='password' placeholder='Password' className='login__input' onChange={(e) => setPassword(e.target.value) }/>
          <button className='login__submit'>sign Up</button>
           <h2 class="account_ready">already have an account? <Link to='/login' className='color'>Sign in now.</Link></h2>
        <p className='cap'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more</span></p>
        </form>
       
    </div>
    </div>
  )
}

export default Register