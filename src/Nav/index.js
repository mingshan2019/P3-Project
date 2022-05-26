import React from 'react'
import { Color_dark } from '../Utils'
import NavTab from './NavTab'
import Avatar from './Avatar'

function getEmail(){
  return sessionStorage.getItem('email')
}


export default function Nav() {
  return (
        <div style={{padding:'2%',background: Color_dark,display:'flex'}}>
            <NavTab tab='Portfolio'/>
            <NavTab tab='Blog'/>
            <NavTab tab='QA'/>
            <Avatar email={getEmail}/>
        </div>
  )
}
