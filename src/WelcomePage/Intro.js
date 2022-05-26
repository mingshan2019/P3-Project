import React from 'react'
import { Link} from 'react-router-dom'
import Video from '../Media/landing.mp4'


export default function Intro() {
    return (
        <div style={{width:'100%',height:'100%',display:'flex'}}>
        <video src={Video} autoplay='true' autoPlay loop muted width='100%'>
        </video>
        <div style={{left:'45%',top:'60%'}}>
        <Link to='/SignUp' style={{ left: '45%', top: '60%', position: 'absolute',transform: 'translateX(-50%)'
 }}>Get Started Today</Link>
        </div>
        </div>
    )
}
