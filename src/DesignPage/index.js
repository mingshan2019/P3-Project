import React, { useState,useEffect } from 'react'
import {Layout,Button} from 'antd'
import Nav from '../Nav'
import PhoneItem from '../PhoneFrame/PhoneItem';
import PhoneFrame from '../PhoneFrame';

const {Content,Footer} = Layout



export default function Design() {
  const[link, setLink] = useState(0);
  const[lists, setLists] = useState(["a","b"]);
  const listItems = lists.map((item) =>
  <li key="{item}">
    <PhoneItem link={item}/>  
  </li>
);
const [color,setColor]=useState('grey');
const [img,setImg]=useState(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/1.png")`);

  return (
    <Layout>
        <Nav/>
        <Content style={{width:'100%', alignItems:'center'}}>
        <PhoneFrame  color={color} lists={lists} img={img}/>  
        </Content>
        <Footer style={{ textAlign: 'center' }}>Linkhub ©2022 Copyright</Footer>
    </Layout>  )
}
