import React from 'react'
import {Avatar,Button} from 'antd'


export default function Ava() {
  if(sessionStorage.getItem("email"))
    return (
    <Avatar>e</Avatar>
 )
 else return(
     <Button>Login</Button>
 )
}
