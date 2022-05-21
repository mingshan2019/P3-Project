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

 function setToken(userToken) {
  sessionStorage.clear();
  sessionStorage.setItem('token', JSON.stringify(userToken));
  console.log("set done");


}

export default function SignUp() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    if(email==null) alert("Please type email")
    else if(password==null) alert("Please type password");
    else if(repassword==null) alert("Please retype password");
    else if(password!=repassword) alert("Retype is not the same with password");
    else if(password.length<6) alert("Password length must be more than six");
    else if(password.match(/^([^0-9]*)$/))alert("Password must contain number");
    else if(!password.match(/[A-Za-z]/)) alert("Password must contain character");
    else if (validator.isEmail(email)){
    const token = await SignUpUser({
      email,
      password
    }); 
    if(!token.error) alert("Sign Up Successful");
    console.log(token.token);
    setToken(token);
    window.location.replace("https://localhost:3000");

    

  }else(alert("Please type a valid email"))

}


    return (
        <div style={{background:'grey', height:'900px'}}>
            <Nav/>
            <div style={{padding:"10% 40%"}}>

            <form onSubmit={handleSubmit}>
            <label>
            Email:
            <input type="text" name="name" onChange={e => setEmail(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
            Password: (must be longer than six, contains at least one number and one character)
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

