import React from 'react';
import "./Register.css"

function home() {
    const logout = () => {
        localStorage.removeItem("data")
        window.location.href = '/'
    }
  return (
    <div className='home'>
        <button onClick={logout} className='logout'>Logout</button>
    </div>
  )
}

export default home