import React, {useState} from 'react';
import "./Register.css";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const url = "https://asss-8gk0.onrender.com/signin";
          const { data: res } = await axios.post(url, {email, password});
             localStorage.setItem("data", res.data);
                window.location.href="/home"
        } catch (error) {
           
           console.log(error)
        }
      
        
       
    }

  return (
    <div className='register'>
        <div>
            <form className='register1 col-md-6' onSubmit={handleSubmit}>
            <h4 className='register2'>Login</h4>
            <input className='col-md-4 input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='user@gmail.com'  required/>
            <input className='col-md-4 input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='********'  required/>
            <p className='input'>Need An Account <a href="/signup">Register</a></p> 
             <button className='butt' type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login;