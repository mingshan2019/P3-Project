import React from 'react'
import { Link} from 'react-router-dom'
import Video from '../Media/landing.mp4'
import BG from '../Media/bg2.jpg'
import {ArrowRightOutlined} from '@ant-design/icons'



export default function Intro() {
    return (
        <div>
        {/* <video style={{objectfit:'fill'}} src={Video} autoplay='true' autoPlay loop muted width='100%'>
        </video> */}
        <div style={{ backgroundImage: `url(${BG})` , opacity:0.8, height:'800px',width:'100%',objectFit:'auto'}}></div>
        <div style={{left:'25%',right:'45%',top:'40%',bottom:'20%',position:'absolute',transform: 'translateX(-50%)',background:'#d9d9d9',borderRadius:'2%',opacity:0.95,padding:'4%'}}>
        <h1>Everything you are, in simple one link</h1>  
        <br/> 
        <br/> 
        <div></div><h3><Link to='/SignUp'>Register Today <ArrowRightOutlined /></Link></h3>
        </div>
        </div>
    )
}
