import React, { Component } from 'react'
import MyVideo from '../videos/video.mp4'
import Nav from './Nav'
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-router-dom';
import useToken from '../useToken';

export default function HomePage() {

  const { token, setToken } = useToken();


    return (
        <div style={{bottom:'0'}}>
      {/* <div style={{backgroundImage: 'linear-gradient(#2D3333,#0D0E0E)'}}> */}
     <Nav/>
      <video
          //style={{bottom:'0',background:'black'}}
          src={MyVideo}
          muted
          autoPlay={"autoplay"}
          preload="auto" 
          loop
        > Your Browser Does Not support Video Play</video>
        <div style={{top:'25%', left:'33%', position:'fixed'}}>
      <h1 style={{color:'white',fontSize:'40pt',fontFamily:'Arial'}}>LinkHub Made Easy</h1>
      </div>
      <div style={{top:'45%', left:'30%', position:'fixed'}}>
      <h1 style={{color:'white',fontSize:'210%',fontFamily:'Arial'}}>&nbsp;&nbsp;Sign up to get a connection today and <br/>share your porfile towards next opportunity </h1>
      </div>
      <div style={{top:'72%',left:'46%', position:'fixed',height:'60px',width:'115px',background:'#01BF71',padding:'12px',borderRadius:'15px'}}>
      <Link to='/Login' setToken={setToken} >Get Started<MdArrowForward/></Link>
      </div>
      <div style={{background:'black',bottom:'0',height:'100%'}}>
      </div>
      </div>
    )
  }
