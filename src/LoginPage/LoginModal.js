import React, { useState } from 'react'
import { Color_bg } from '../Utils'

export default function LoginModal() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div style={{width:'20%',height:'100%',background:Color_bg,padding:'10%'}}>
        
    <form>
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
