import React from 'react'
import Nav from '../Nav'
import PCreate from './PCreate'
import PList from './PList'

export default function Portfolio() {
  return (
    <div>
    <Nav/>
    <div style={{display:'flex'}}>
        <PList/>
        <PCreate/>
    </div>
    </div> 
  )
}
