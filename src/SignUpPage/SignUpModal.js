import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import { Color_bg } from '../Utils'
import validator from 'validator'


function SignUpUser(req) {
  return fetch('/SignUp',{
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   },
    body: JSON.stringify(req)
  })
    .then(data => data.json())
 }


export default function SignUpModal() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repassword, setRePassword] = useState();
    
    const navigate = useNavigate();


    const handleSubmit = async e => {
        e.preventDefault(); 

        if(email==null) alert("Please type email")
        else if(password==null) alert("Please type password")
        else if(repassword==null) alert("Please retype password")
        else if(password!=repassword) alert("Retype is not the same with password")
        else if(password.length<6) alert("Password length must be more than six")
        else if(password.match(/^([^0-9]*)$/))alert("Password must contain number")
        else if(!password.match(/[A-Za-z]/)) alert("Password must contain character")
        else if (!validator.isEmail(email)) alert("Please type a valid email")

        else {
        const res = await SignUpUser({
          email,
          password
        }); 
        if(!res.error) alert("Sign Up Successful");
        sessionStorage.setItem("email", email);
        navigate('/', { replace: true })
      }
    }

  return (
    <div style={{width:'20%',height:'100%',background:Color_bg,padding:'10%'}}>
        
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type="text" onChange={e => setEmail(e.target.value)}>
                </input>
            </label>
            <br/>
            <br/>
            <label>
                Password
                <input type="Password" onChange={e => setPassword(e.target.value)}>

                </input>
            </label>
            <br/>
            <label>
            (length longer than six, contains at least one number and one character)
            </label>
            <br/>
            <br/>
            <label>
                Retype Password
                <input  type="Password" onChange={e => setRePassword(e.target.value)}>

                </input>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Submit" />  

        </form>
    </div>
  )

}
