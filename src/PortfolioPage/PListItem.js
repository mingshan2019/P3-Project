import React from 'react'
import {Button, Card} from 'antd'
import { Navigate, useNavigate } from 'react-router-dom';

export default function PListItem(props) {

  const portfolioName = props.alias
  const color = props.color
  const img = props.img

  const navigate = useNavigate();

  const handleClick=()=>{
    alert("click "+props.id);
    console.log("color "+color)
    console.log("img "+img)
    navigate('/Design',{state:{portfolioName:portfolioName, color:color,img:img}});
  }

  return (
    <Card style={{marginBottom:'5%'}} onClick={handleClick}>
        <div>Alias: {props.alias}</div>
        <div>Created: {props.date}</div>
    </Card>
  )
}
