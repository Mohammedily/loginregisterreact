import React, {useState} from 'react';
import "./Register.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const successnotify = (msg) => {
      toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
     }
  
     const errornotify = (msg) => {
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
     }


    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const url = "https://asss-8gk0.onrender.com/signup";
          const { data: res } = await axios.post(url, {email, password});
          successnotify(res.message);
          window.location.href="/"
        } catch (error) {
          errornotify(error.response.data.message)
           console.log(error)
        }
      
        
       
    }

  return (
    <div className='register'>
        <div>
            <form className='register1 col-md-6' onSubmit={handleSubmit}>
            <h4 className='register2'>Register</h4>
            <input className='col-md-4 input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='user@gmail.com'  required/>
            <input className='col-md-4 input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='********'  required/>
        <p className='input'>Already Register? <a href="/">Login</a></p>    
             <button className='butt' type="submit">Submit</button>
            </form>
        </div>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  )
}

export default Register;