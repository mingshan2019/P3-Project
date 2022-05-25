import React, { useState } from 'react'
import LinkComponent from '../LinkComponent';


export default function DesignComponent(props) {


  
  const[lists, setLists] = useState(["a","b"]);

  const color = props.color

  const listItems = props.lists.map((item) =>
  <li key="{item}">
    <LinkComponent link={item} color={color}/>  
  </li>
);
    
    return (
      <div style={{marginTop:'6%', marginRight:'10%'}}>
      <div style={{background:'black',width:'300px',height:'600px',float:'right',marginLeft:'200px',borderRadius:'12px'}}>
      <div style={{background:'white',width:'280px',height:'580px',margin:'9px',padding:'30px',borderRadius:'12px',backgroundImage:`url("https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/2.png")` }}>
      <div style={{paddingLeft:'80px',paddingTop:'10px',paddingBottom:'120px'}}><div style={{background:props.color,borderRadius:'60px',width:'60px',height:'60px',padding:'12px'}}>Kath</div></div>
      <ul>
      {listItems}
       </ul>
       </div>
       </div>
       </div>
      )
  
}
