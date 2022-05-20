import React, { useState } from 'react'
import Nav from '../HomePage/Nav'
import { Link } from 'react-router-dom';
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md';
import validator from 'validator'


function SignUpUser(credentials) {
  return fetch('http://localhost:3001/adduser', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
 
   },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function SignUp() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    if(password!=repassword) alert("Retype is not the same with password");
    else if (validator.isEmail(email)){
    const token = await SignUpUser({
      email,
      password
    }); 
    console.log("token::: "+token.ok);
  }else(alert("Please type a valid email"))

}


    return (
        <div style={{background:'grey', height:'900px'}}>
            <Nav/>
            <div style={{padding: '200px 700px'}}>

            <form onSubmit={handleSubmit}>
            <label>
            Email:
            <input type="text" name="name" onChange={e => setEmail(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
            Password:
            <input type="password" name="pw" onChange={e => setPassword(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
            Retype Password:
            <input type="password" name="repw" onChange={e => setRePassword(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Submit" />  
            <Link to='/Login' style={{paddingLeft:'40%'}}>Got to Login </Link>
            </form>
            </div>


            </div>
    )
  }

