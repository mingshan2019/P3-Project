import React from 'react'
import Nav from '../Nav'
import Video from '../Media/landing.mp4'

export default function Welcome() {
  return (
    <div>
    <Nav/>
        <video src={Video}></video>
        <div><h1>Welcome</h1></div>
    </div> 
    )
}
