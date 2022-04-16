import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNavbar from '../Navbar/AdminNavbar';
import UserNavBar from '../Navbar/UserNavBar';
import "./home.css"

const Home = () => {

  const [value, setValue] = useState("");
  const [key, setKey] = useState("");
  const [define, setDefine] = useState("");

  useEffect(() => {

    axios.get('https://me-visualization.herokuapp.com/app/getddata')
      .then(response => {
        setValue(response.data)
      });


  }, [])

  const details = (e) => {
    console.log(e.target.value)
    Object.keys(value).map((id, index)=> {
      if(value[id].Data === e.target.value) {
        setKey(value[id].Key)
        setDefine(value[id].Defination)
      }
    })
  }

  return (
    <div>
      {/* <AdminNavbar /> */}
      <UserNavBar />
      <br /><br />
      <div className='home-list'>
        {/* <br/> */}
        {Object.keys(value).map((id, index) => {
          return (
            <div>
              <button className='home-list-btn' onClick={details} value={value[id].Data}>{value[id].Data}</button>
              {/* <h1>Key : {value[id].Key}</h1> */}
              {/* <h1>Defination : {value[id].Defination}</h1> */}
            </div>
          )
        })}
      </div>
      <div className='home-main-box'>
        <div className='home-key-box'>
          <h3>Key</h3>
          <p className='home-data home-data-dfine'>{key}</p>
        </div>
        <div className='home-key-box'>
          <h3>Defination</h3>
          <p className='home-data home-data-dfine'>{define}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
