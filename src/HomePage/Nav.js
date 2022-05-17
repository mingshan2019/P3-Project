import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export default class Nav extends Component {
  render() {
    return (
        <div>
        <div style={{background: 'black', height: '20%',padding:'2% 20% 2% 8%',display:'flex'}}>
        {/* <h1 style={{fontFamily:'Arial',color:'white'}}>LinkHub</h1> */}
        <Link to='/' style={{fontFamily:'Arial',color:'white'}}>LinkHub</Link>
        <Link to='/Template' style={{color: 'white',display:'inline',paddingLeft:'30%'}}>Template</Link>
        <Link to='/Blog' style={{color: 'white',display:'inline',paddingLeft:'10%'}}>Blog</Link>
        <Link to='/Price' style={{color: 'white',display:'inline',paddingLeft:'10%'}}>Price</Link>
        <Link to='/Help' style={{color: 'white',display:'inline',paddingLeft:'10%',paddingRight:'16%'}}>Help</Link>
        <FaBars style={{color: 'white'}}/>
        </div>
        </div>
    )
  }
}
