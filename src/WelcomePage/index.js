import React from 'react'
import Nav from '../Nav'
import {Layout,Button} from 'antd'
import Intro from './Intro'

const {Header,Content,Footer} = Layout;


export default function Welcome() {

  return (
    <Layout>
        <Nav/>
        <Content style={{width:'100%', alignItems:'center'}}>
        <Intro/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Linkhub ©2022 Copyright</Footer>
    </Layout>
    )
}
