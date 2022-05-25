import React from 'react'
import { Color_dark } from '../Utils'
import NavTab from './NavTab'


export default function Nav() {
  return (
        <div style={{background: Color_dark, display:'flex'}}>
            <NavTab tab='Blog'/>
            
        </div>
  )
}
