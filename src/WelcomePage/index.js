import React from 'react'
import Nav from '../Nav'
import Video from '../Media/landing.mp4'
import {Layout,Col,Row} from 'antd'

const {Header,Content,Footer} = Layout;


export default function Welcome() {

  return (
    <Layout>
        <Nav/>
        <Content style={{width:'100%'}}>
        <div>
        <video src={Video} autoplay='true' autoPlay loop muted width='100%'></video>
        </div> 
        </Content>
        <Footer style={{ textAlign: 'center' }}>Linhub ©2022 Copyright</Footer>
    </Layout>
    )
}
