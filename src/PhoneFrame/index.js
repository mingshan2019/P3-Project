import React, { useState } from 'react'
import PhoneItem from './PhoneItem';
import {Avatar} from 'antd'


export default function PhoneFrame(props) {

  const color = props.color

  const listItems = props.lists.map((item) =>
  <li key="{item}">
    <PhoneItem link={item} color={color}/>  
  </li>
);
    
    return (
      <div style={{marginLeft:'20%',marginTop:'2%'}}>
      <div style={{background:'black',width:'300px',height:'600px',float:'right',borderRadius:'12px'}}>
      <div style={{background:'white',width:'280px',height:'580px',margin:'9px',borderRadius:'12px',backgroundImage:props.img }}>
      <div style={{paddingLeft:'40%',paddingTop:'20%',paddingBottom:'120px'}}>
          <Avatar src="https://joeschmoe.io/api/v1/random" size={'large'}/>
     </div>
     <div style={{paddingRight:'5%'}}>
      <ul>
      {listItems}
       </ul>
       </div>
       </div>
       </div>
       </div>
      )
  
}
