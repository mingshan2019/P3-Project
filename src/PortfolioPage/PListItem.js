import React from 'react'
import {Button, Card} from 'antd'
import { Navigate, useNavigate } from 'react-router-dom';

export default function PListItem(props) {

  const portfolioName = props.alias
  const color = props.color
  const img = props.img
  const id = props.id
  const lists = props.lists

  const navigate = useNavigate();

  const handleClick=()=>{
    console.log("color "+color)
    console.log("img "+img)
    navigate('/Design',{state:{portfolioName:portfolioName, color:color,img:img,id:id,lists:lists}});
  }

  return (
    <Card style={{marginBottom:'5%'}} onClick={handleClick}>
        <div>Alias: {props.alias}</div>
        <div>Created: {props.date}</div>
        <div>Id:{props.id}</div>
    </Card>
  )
}
