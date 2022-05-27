import React from 'react'
import {Avatar,Button, Menu} from 'antd'
import {useNavigate} from "react-router-dom"


export default function Ava() {

  const navigate = useNavigate();

  const NavLogin = () => {
    navigate('/Login');
    console.log('login')
  };

  const OpenProfile = () => {
    console.log('open profile');
  };

  if(sessionStorage.getItem("email"))
    return (
      <Menu.Item style={{marginLeft:'10%'}} disabled= 'true'>
      <Avatar onClick={OpenProfile}>{sessionStorage.getItem("email").charAt(0)}</Avatar> 
      <Button style={{marginLeft:'40%'}} onClick={() => {localStorage.clear(); sessionStorage.clear();
          window.location.reload(false);}}>Log Off</Button>
     </Menu.Item>
 )
 else return(
      <Menu.Item  disabled= 'true' style={{marginLeft:'8%'}}>
      <Button onClick={NavLogin}>Login</Button>
     </Menu.Item>
 )
}
