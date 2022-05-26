import React,{useState} from 'react'
import { Color_dark } from '../Utils'
import NavTab from './NavTab'
import Avatar from './Avatar'



export default function Nav() {

  const [Email,getEmail]=useState(sessionStorage.getItem('email')?sessionStorage.getItem('email'):'');

  console.log("Session email is "+ sessionStorage.getItem("email"));

  return (
        <div style={{display:'flex',paddingBottom:'10%'}}>
          <div style={{paddingBottom:'2%',paddingTop:'1%',background: Color_dark,width:'80%',display:'flex'}}>
            <NavTab tab='Portfolio'/>
            <NavTab tab='Blog'/>
            <NavTab tab='QA'/>
          </div>
          <div><Avatar email={Email.charAt(0)}/></div>
        </div>
  )
}
