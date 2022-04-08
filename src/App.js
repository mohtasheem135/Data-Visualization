// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./App.css"

// function App() {

//   const [value, setValue] = useState("");
//   const [value1, setValue1] = useState("");
//   const [value2, setValue2] = useState("");
//   const [value3, setValue3] = useState("");

//   // const [ddata, setDdata] = useState("");
//   const [key, setKey] = useState("");
//   const [define, setDefine] = useState("");

//   useEffect(() => {

//     axios.get('http://localhost:4000/app/getusers')
//       .then(response => {
//         setValue(response.data)
//       });
//   }, [])

//   // console.log("jjj" + value)



//   const handelChangeData = (e) => {
//     // console.log("Data"+e.target.value);
//     setValue1(e.target.value)
//   }

//   const handelChangeKey = (e) => {
//     // console.log("Key"+e.target.value);
//     setValue2(e.target.value)
//   }

//   const handelChangeDefination = (e) => {
//     // console.log("Defination"+e.target.value);
//     setValue3(e.target.value)
//   }

//   const submit = () => {
//     const registered = {
//       Data: value1,
//       Key: value2,
//       Defination: value3
//     }
//     // console.log(value1)
//     // console.log(value2)
//     // console.log(value3)

//     axios.post('http://localhost:4000/app/signup', registered)
//       .then(response => console.log(response.data));
//   }

//   const details = (e) => {
//     console.log(e.target.value)

//     localStorage.setItem('key', value)
//     // console.log(value.Data)
//     // localStorage.setItem('Defination', value[id].Defination)

//     // axios.get('http://localhost:4000/app/getusers')
//     //   .then(response => {
//     //     setDdata(response.data)
//     //   });

//       Object.keys(value).map((id, index) => {
//         if(value[id].Data === e.target.value) {
//           // console.log("KEY :- " +value[id].Key)
//           // console.log("Defination :- " +value[id].Defination)
//           setKey(value[id].Key)
//           setDefine(value[id].Defination);
//         }
//       })

//       // console.log("sdfsvcdv   ;"+ddata)

//   }

//   return (
//     <div className="App">
//       <input onChange={handelChangeData} placeholder='Data' />
//       <input onChange={handelChangeKey} placeholder='Key' />
//       <input onChange={handelChangeDefination} placeholder='Defination' />
//       <button onClick={submit}>Submit</button>
//       <hr />
//       <br /><br />
//       {/* <h3>{value1}</h3>
//       <h3>{value2}</h3>
//       <h3>{value3}</h3> */}
//       <br /><hr /><br />
//       {Object.keys(value).map((id, index) => {
//         console.log(value[id])
//         return (
//           <>
//             <div className='button_cont'>
//               <button onClick={details} value={value[id].Data} className='btn' >{value[id].Data}</button>
//               {/* <button className='btn'>{value[id].Key}</button> */}
//               {/* <button className='btn'>{value[id].Defination}</button> */}
//             </div>
//           </>
//         )
//       })}

//       <div className='Box_Container'>
//         <div className='Box_Container_1'>
//           <p>Key</p>
//           <h2>{localStorage.getItem('Key')}</h2>
//           <h2>{key} </h2>
//         </div>
//         <div className='Box_Container_2'>
//           <p>Defination</p>
//           <h2>{define}</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { Route, Routes } from "react-router";
import AdminHome from './components/Admin Home/AdminHome';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Login from './components/LoginSignup/Login';
import Register from './components/LoginSignup/Register/Register';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
