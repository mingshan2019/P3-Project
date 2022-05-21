import React, { Component } from 'react'
import { Link, Navigate,useHistory} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import useToken from '../useToken';
import dropdown from './dropdown';
import drop from './dropdown';
import sdrop from './sdrop';
import useEmail from '../useEmail';
import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';

export default function Nav() {

  
  const { token, setToken } = useToken();
  const t=token.charAt(0)
  const {Em, setEm} = useEmail();

  console.log(token);

    return (
        <div>
        <div style={{background: 'black', height: '20%',display:'flex'}}>
        <div style={{padding:'2% 20% 2% 8%',width:'70%'}}> 
        {/* <h1 style={{fontFamily:'Arial',color:'white'}}>LinkHub</h1> */}
        <Link to='/' style={{fontFamily:'Arial',color:'white'}}>LinkHub</Link>
        <drop/>
        <sdrop/>
        <Link to='/Template' style={{color: 'white',display:'inline',paddingLeft:'30%'}}>Template</Link>
        <Link to='/Blog' style={{color: 'white',display:'inline',paddingLeft:'10%'}}>Blog</Link>
        <Link to='/Price' style={{color: 'white',display:'inline',paddingLeft:'10%'}}>Price</Link>
        <Link to='/Help' style={{color: 'white',display:'inline',paddingLeft:'10%',paddingRight:'16%'}}>Help</Link>
       </div>
        <div style={{color:'white',marginRight:'8%',borderRadius:'20px', background:'grey',width:'30px',height:'30px',paddingTop:'0.25%',paddingLeft:'0.5%',marginTop:'1.5%'}}>{t}</div>
        <button style={{ background:'grey',marginTop:'1.5%',height:'2%'}} onClick={() => {localStorage.clear(); sessionStorage.clear();
          window.location.reload(false);
        }}>LogOff</button>
        <FaBars style={{color: 'white',float:'right',marginLeft:'8%'}}/>
        </div>
        </div>
    )
  
}
