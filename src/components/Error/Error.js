import React from 'react';
import "./error.css";
import { useNavigate } from 'react-router';

const Error = () => {

    const navigate = useNavigate();

    const Home=()=>{
        navigate('/');
    }

  return (
    <div>
        <h1 className='error-head'>You are not authorized here ..... </h1>
        <br/><br/><br/>
        <button className='error-btn' onClick={Home}>Home</button>
    </div>
  )
}

export default Error