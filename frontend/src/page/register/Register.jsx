import React, { useRef, useState } from 'react'
import {Link } from 'react-router-dom'
import './register.css'
function Register() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null) 
  const [email, setEmail ] = useState(null)
  const [password, setPassword ] = useState(null)
  const handleGetStart = () => {
    setEmail(emailRef.current.value)
  }
  const handleStart = () => {
      setPassword(passwordRef.current.value)
  }
  return (
    <div className='register__container'>
        <div className="logo__container">
        <img src="/img/main.png" alt="" className="logo" />
      
          <div className="login__btn">
           <Link to='/register'>Sign Up </Link>
        </div>
         
        </div>
        <div className="register__content">
            <h1 className="main__text">Unlimited movie, Tv shows, and more.</h1>
            <h2 className="small__text">Watch anywhere. Cancel anytime.</h2>
            <div className="last__text">Ready to watch? Enter your to create or restart your membership</div>
            <>
            {
              !email ?
            <div  className="form__control">
                <input type="email" className="main__input"  ref={emailRef}  placeholder='email address'/>
                <button className="submit__btn"  onClick={handleGetStart}>Get Started</button>
            </div>
            :
            <form  className="form__control">
                <input type="password" className="main__input"  ref={passwordRef}  placeholder='password'/>
                <button className="submit__btn"  type='submit' onclick={handleStart}>Start</button>
            </form>
}
            </>
        </div>
    </div>
  )
}

export default Register