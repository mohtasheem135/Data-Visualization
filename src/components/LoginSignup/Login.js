import React, { useEffect, useState } from 'react';
import UserNavBar from '../Navbar/UserNavBar';
import "./login.css";
import axios from 'axios';
import AdminNavbar from '../Navbar/AdminNavbar';
import { useNavigate } from 'react-router';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:4000/app/getregister')
      .then(response => {
        setValue(response.data)
      });
    })

    const handelEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handelPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handelClick = () => {

        localStorage.setItem('admin-email', email)

        Object.keys(value).map((id, index) => {
            if(value[id].Email === email && value[id].Password === password) {
                alert("You are successfully logged in !!!!")
                navigate('/adminhome')
                
            } else {
                alert("Try again Man !!");
                window.location.reload();
            }
        })
        
    }

    return (
        <div>
            <UserNavBar />
            {/* <AdminNavbar /> */}
            <div className='main-cont'>
                <div className='login-box'>
                    <input className='login-inp login-inp-1' placeholder='Email' type='email' onChange={handelEmailChange} />
                    <input className='login-inp login-inp-2' placeholder='Password' type='password' onChange={handelPasswordChange} />
                    <button className='login-btn-1' onClick={handelClick}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login