import React from 'react'
import logo from './logo.png'
import img from './img.png'
import './login.css'
export default function Login() {
  return (
    <div className='lkol'>
        <div className='container'>
            <div className='image'>
             <img className='img1' src={logo}></img>
             <img className='img2' src={img}></img>   
            </div>
            <div className='form'>
               
                <h1>Login</h1>
                <div className='wahda'>
                <label>Email :</label>
                <input type='email'  placeholder='Email@gmail.com'></input>
                </div>
                <div className='wahda'>
                <label> Password:</label>
                <input type='password'  placeholder='Password'></input>
                </div>
                
                    <button>Sign in</button>
                    
                    </div>

            </div>
        </div>
   
  )
}
