import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export default class Nav extends Component {
  render() {
    return (
        <div>
        <div style={{background: 'black', height: '80px',padding:'20px 200px 20px 60px'}}>
        {/* <h1 style={{fontFamily:'Arial',color:'white'}}>LinkHub</h1> */}
        <Link to='/' style={{fontFamily:'Arial',color:'white'}}>LinkHub</Link>
        <Link to='/Template' style={{color: 'white',display:'inline',paddingLeft:'750px'}}>Template</Link>
        <Link to='/Blog' style={{color: 'white',display:'inline',paddingLeft:'120px'}}>Blog</Link>
        <Link to='/Price' style={{color: 'white',display:'inline',paddingLeft:'120px'}}>Price</Link>
        <Link to='/Help' style={{color: 'white',display:'inline',paddingLeft:'120px'}}>Help</Link>
        <FaBars style={{color: 'white', float:'right'}}/>
        </div>
        </div>
    )
  }
}
