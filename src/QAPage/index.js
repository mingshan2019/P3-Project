import React from 'react'
import Nav from '../Nav'
import QAContent from './QAContent'

export default function QA() {
  return (
    <div>
    <Nav/>
    <div style={{paddingLeft:'10%',paddingTop:'2%',paddingRight:'10%'}}>
        <QAContent/>
    </div>
    </div> 
  )
}
