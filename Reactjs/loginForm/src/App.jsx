import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
    <div className='container'>
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active':""} onClick={()=>setIsLogin(true)}>Login</button>
            <button className={!isLogin ? 'active':""} onClick={()=>setIsLogin(false)}>SignUp</button>
        </div>
        {
          isLogin ? (
            <form className='form'>
              <h1>Login</h1>
              <input type="text" placeholder='Username' />
              <input type="password" placeholder='Password' />
              <a href="#">Forgot Passowrd</a>
              <button type='submit'>Login</button>
              <p>Not Member <a href="#" onClick={()=>{setIsLogin(false)}}>SignUp</a> </p>
            </form>
          ) : (
            <form className='form'>
              <h1>SignUp</h1>
              <input type="text" placeholder='Username' />
              <input type="email" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <button type='submit'>SignUp</button>
            </form>
          )
        }

      </div>
      <h1>{console.log(isLogin)}</h1>
    </div>

    
  
    </>
  )
}

export default App