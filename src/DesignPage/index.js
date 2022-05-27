import React, { useState } from 'react'
import {Layout,Button,Input} from 'antd'
import Nav from '../Nav'
import PhoneItem from '../PhoneFrame/PhoneItem';
import PhoneFrame from '../PhoneFrame';
import Designer from './Designer';
import { SketchPicker } from 'react-color';
import {useLocation} from 'react-router-dom'


const {Content,Footer} = Layout



export default function Design(props) {
  const[link, setLink] = useState(0);
  const[lists, setLists] = useState(["a","b"]);
  const listItems = lists.map((item) =>
  <li key="{item}">
    <PhoneItem link={item}/>  
  </li>
);
const [color,setColor]=useState('grey');
const [img,setImg]=useState(`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/1.png")`);

const location = useLocation();

function handleClick(){
  setLists([...lists, link]);
  console.log("props "+ location.state.portfolioName)
}

  return (
    <Layout>
        <Nav/>
        <Content style={{width:'100%',display:'flex'}}>
        <div style={{paddingLeft:'10%',paddingTop:'2%'}}>
        <h2>{location.state.portfolioName}</h2>  
          <SketchPicker onChange={({ hex }) => {setColor(hex)}}/>
        <br/>  
        <br/>  

        <Input 
              onChange = {event => setLink(event.target.value)}
        />
        <Button
          onClick = {handleClick}
        >add link</Button>
        </div>      

        <PhoneFrame  color={color} lists={lists} img={img}/>  
        </Content>
        <Footer style={{ textAlign: 'center' }}>Linkhub ©2022 Copyright</Footer>
    </Layout>  )
}
