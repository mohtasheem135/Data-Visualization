import React from 'react';
import "./userNavbar.css"
import { useNavigate } from 'react-router';

const UserNavBar = () => {
    
    const navigate = useNavigate();

    const Home = () => {
        navigate('/')
    }

    const LogIn = () => {
        navigate('/login')
    }

    return (
        <div>
            <nav className='user-navbar'>
                <ul className='user-navbar-ul'>
                    <li className='user-navbar-li' onClick={Home}>Home</li>
                    <li className='user-navbar-li' onClick={LogIn}>Admin Login</li>
                </ul>
            </nav>
        </div>
    )
}

export default UserNavBar