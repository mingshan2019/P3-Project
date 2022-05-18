import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import useToken from '../useToken';

export default function Nav() {


  const { token, setToken } = useToken();

    return (
        <div>
        <div style={{background: 'black', height: '20%',padding:'2% 20% 2% 8%',display:'flex'}}>
        {/* <h1 style={{fontFamily:'Arial',color:'white'}}>LinkHub</h1> */}
        <Link to='/' style={{fontFamily:'Arial',color:'white'}}>LinkHub</Link>
        <Link to='/Template' style={{color: 'white',display:'inline',paddingLeft:'30%'}}>Template</Link>
        <Link to='/Blog' style={{color: 'white',display:'inline',paddingLeft:'10%'}}>Blog</Link>
        <Link to='/Price' style={{color: 'white',display:'inline',paddingLeft:'10%'}}>Price</Link>
        <Link to='/Help' style={{color: 'white',display:'inline',paddingLeft:'10%',paddingRight:'16%'}}>Help</Link>
        <div style={{color:'red',paddingRight:'10%'}}>username: {token}</div>
        <button style={{ background:'grey'}} onClick={() => {localStorage.clear(); sessionStorage.clear();window.location.reload(false);}}>LogOff</button>
        <FaBars style={{color: 'white'}}/>
        </div>
        </div>
    )
  
}
