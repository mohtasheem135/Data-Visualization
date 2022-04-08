import React from 'react';
import "./adminNavbar.css";
import { useNavigate } from 'react-router';

const AdminNavbar = () => {

    const navigate = useNavigate();

    const logOut=()=> {
        localStorage.setItem('admin-email',"")
        navigate('/');
    }

    const Home =()=> {
        navigate('/adminhome')
    }

    const Register=()=> {
        navigate('/register');
    }

  return (
    <div>
        <nav className='navbar'>
            <ul className='navbar-ul'>
                <li className='admin-navbar-li' onClick={Home}>Add Data</li>
                <li className='admin-navbar-li' onClick={Register}>Register</li>
                <li className='admin-navbar-li' onClick={logOut}>Log Out</li>
            </ul>
        </nav>
    </div>
  )
}

export default AdminNavbar