import React from 'react'
import { Color_dark } from '../Utils'
import NavTab from './NavTab'


export default function Nav() {
  return (
        <div style={{padding:'2%',width:'100%',background: Color_dark,display:'flex'}}>
            <NavTab tab='Portfolio'/>
            <NavTab tab='Blog'/>
            <NavTab tab='QA'/>
        </div>
  )
}
