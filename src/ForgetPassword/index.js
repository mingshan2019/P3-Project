import React, { useState } from 'react'
import Nav from '../HomePage/Nav'
import Userfront from "@userfront/core";





export default function ForgetPassWord() {

    const [email, setEmail] = useState();

    function SendForget(credentials) {
        Userfront.init("demoKath");
        Userfront.sendResetLink(email);
    
       }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await SendForget({
          email,
        }); 
    
      }



    return (
      <div>
          <Nav/>
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
    <button type="submit">Submit</button>


    </form>
    </div>


    </div>
      </div>
    )
  }

