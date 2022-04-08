import React, { useState } from 'react';
import UserNavBar from '../../Navbar/UserNavBar';
import "./register.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
import AdminNavbar from '../../Navbar/AdminNavbar';

const Register = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");

    const handelEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handelPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handelREPasswordChange = (e) => {
        setRePassword(e.target.value)
    }

    const handelClick = () => {

        if (password === repassword) {
            const register = {
                Email: email,
                Password: password,
                RePassword: repassword
            }
            axios.post('http://localhost:4000/app/register', register)
                .then(response => {
                    console.log(response.data);
                    alert("New member has been added ");
                    navigate('/login')
                });
        } else {
            window.location.reload();
        }


    }

    return (
        <div>
            {/* <UserNavBar /> */}
            {localStorage.getItem('admin-email') !== "" ? null : navigate("/error")}
            <AdminNavbar />
            <div className='main-cont'>
                <div className='login-box'>
                    <input className='login-inp login-inp-1' placeholder='Email' onChange={handelEmailChange} />
                    <input className='login-inp login-inp-2' placeholder='Password' onChange={handelPasswordChange} />
                    <input className='login-inp login-inp-3' placeholder='Re-Enter Password' onChange={handelREPasswordChange} />
                    <button className='login-btn-1' onClick={handelClick}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register