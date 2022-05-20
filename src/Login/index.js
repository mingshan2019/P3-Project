import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from '../HomePage/Nav'
import { Link } from 'react-router-dom';


function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  
function setEm(userEm) {
  sessionStorage.setItem('email', JSON.stringify(userEm));
}

function loginUser(credentials) {
 return fetch('http://localhost:3001/login', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json'
  },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    }); 
    if(token.token =="nof") alert("user not found");
    else if(token.token =="no") alert("password not right");
    else alert("verified");
    console.log("token is "+token.token);
    setToken(token);
    setEm(token);
  }

  return(
    <div style={{background:'grey', height:'900px'}}>
    <Nav/>
    <div style={{padding: '200px 700px'}}>
    <h1>Please Log In</h1>
    <br/>
    <form onSubmit={handleSubmit}>
    <label>
    Email:
    <input type="text" onChange={e => setEmail(e.target.value)} />
    </label>
    <br/>
    <br/>
    <label>
    Password:
    <input type="password" onChange={e => setPassword(e.target.value)} />
    </label>
    <br/>
    <br/>
    <br/>
    <button type="submit">Submit</button>
    <Link to='/SignUp' style={{paddingLeft:'40%'}}>Got to SignUp </Link>
    <Link to='/ForgetPassword'>ForgetPassword? </Link>

    </form>
    </div>


    </div>

  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};