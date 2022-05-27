import React from 'react'
import {Avatar,Button} from 'antd'
import {useNavigate} from "react-router-dom"


export default function Ava() {

  const navigate = useNavigate();

  const NavLogin = () => {
    navigate('/Login');
    console.log('login')
  };

  if(sessionStorage.getItem("email"))
    return (
    <Avatar>e</Avatar>
 )
 else return(
     <Button onClick={NavLogin}>Login</Button>
 )
}
