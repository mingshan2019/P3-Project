import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Color_bg } from '../Utils'

function loginUser(req) {
  return fetch('/login', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
   },
    body: JSON.stringify(req)
  })
    .then(data => data.json())
 }

export default function LoginModal() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();


  const handleSubmit = async e => {
    e.preventDefault();
    const res = await loginUser({
      email,
      password
    }); 
    if(res.token =="not found") alert("User not found");
    else if(res.token =="incorrect") alert("password not right");
    else alert("verified");
    console.log("token is "+res.token);
    sessionStorage.setItem("email",res.token);
    navigate('/', { replace: true })
  }

  return (
    <div style={{width:'20%',height:'100%',background:Color_bg,padding:'10%'}}>
        
    <form onSubmit={handleSubmit}>
        <label >
            Email
            <input  type="text" onChange={e => setEmail(e.target.value)}></input>
        </label>
        <br/>
        <br/>
        <label>
            Password
            <input type="password" onChange={e => setPassword(e.target.value)}></input>
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit" />  

    </form>
</div>
  )
}
