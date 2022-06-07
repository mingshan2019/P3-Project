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

  const handleClick = () => {
    console.log('click');
  }

  if(sessionStorage.getItem("email"))
    return (
      <>
      <Menu.Item style={{marginLeft:'7%'}} disabled='true'>
      <button style={{border:'none', background:'none'}} onClick={() => {navigate('/Login')}}>
      <Avatar onClick={OpenProfile}>{sessionStorage.getItem("email").charAt(0)}</Avatar> 
      </button>
      </Menu.Item>
      <Menu.Item style={{marginLeft:'2%'}} disabled='true'>
      <Button onClick={() => {localStorage.clear(); sessionStorage.clear();
          window.location.reload(false);}}>Log Off</Button>
     </Menu.Item>
     </>
 )
 else return(
      <Menu.Item  disabled= 'true' style={{marginLeft:'7%'}}>
      <Button onClick={NavLogin}>Login</Button>
     </Menu.Item>
 )
}
