import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  const {login} = useContext( AuthContext )
  const navigate = useNavigate()
  const onLogin = () =>{
    const lastPath = localStorage.getItem('lastPath') || '/'
    login('Carlos J.')
    navigate(lastPath, {
      replace: true
    })
  }
  return (
    <div className='Login'>
      <h1 className="Login-h1">Login</h1>
      <button className="Login-btn" onClick={onLogin} >Login</button>
    </div>
  )
}
