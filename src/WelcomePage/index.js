import React from 'react'
import Nav from '../Nav'
import {Layout,Button} from 'antd'
import Intro from './Intro'

const {Header,Content,Footer} = Layout;


export default function Welcome() {

  return (
        <div style={{height:'100%'}}>
        <Nav/>
        <Intro/>
        {/* <Footer style={{ textAlign: 'center' }}>Linkhub ©2022 Copyright</Footer> */}
        </div>
    )
}
