import { keyboard } from '@testing-library/user-event/dist/keyboard';
import axios from 'axios';
import React, { useState } from 'react';
import AdminNavbar from '../Navbar/AdminNavbar';
import "./adminHome.css";
import { useNavigate } from 'react-router';

const AdminHome = () => {

    const navigate = useNavigate();

    const [dataa, setDataa] = useState("");
    const [key, setKey] = useState("");
    const [define, setDefine] = useState("");

    const handelDataChange = (e) => {
        // console.log(e.target.value)
        setDataa(e.target.value)
    }

    const handelKeyChange = (e) => {
        // console.log(e.target.value)
        setKey(e.target.value)
    }

    const handelDefinationChange = (e) => {
        // console.log(e.target.value)
        setDefine(e.target.value)
    }

    const handelClick = () => {
        const register = {
            Data: dataa,
            Key: key,
            Defination: define
        }
        axios.post('https://me-visualization.herokuapp.com/app/ddata', register)
            .then(response => {
                console.log(response.data);
                alert("New Data has been added ");
                window.location.reload();
            });

    }

    const handelClick_view=()=>{
        navigate('/view')
    }

    return (
        <div>
            {localStorage.getItem('admin-email')!=="" ? null: navigate("/error") }
            <AdminNavbar />
            <div className='main-cont'>
                <div className='login-box'>
                    <input className='login-inp login-inp-1' placeholder='Data' onChange={handelDataChange} />
                    <input className='login-inp login-inp-2' placeholder='Key' onChange={handelKeyChange} />
                    <textarea className='login-inp login-inp-3 login-inp-4' placeholder='Defination' onChange={handelDefinationChange} />
                    <button className='login-btn-1' onClick={handelClick}>Submit</button>
                    {/* <button className='login-btn-1' onClick={handelClick_view}>View the Data</button> */}
                </div>
            </div>
        </div>
    )
}

export default AdminHome
