import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()

    const handleLogin = () => {
        if(user === 'datisekai' && pass === 'datisekai')
        {
           navigate('/home')
        }else if(user === 'admin@gmail.com' && pass === 'letmein')
        {
            navigate('/employee')
        }
    }

  return (
    <div className='min-h-screen bg-violet-300'>
        <input type="text" onChange={(e) => setUser(e.target.value)}/>
        <br />
        <input type="text" className='mt-2' onChange={(e) => setPass(e.target.value)}/>
        <br />
        <button className='mt-2' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login