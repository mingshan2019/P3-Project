import { Avatar,Upload } from 'antd'
import React from 'react'
import Nav from '../Nav'
import UploadS3 from './UploadS3'


export default function Profile() {

  return (
    <div>
    <Nav/>
    <div style={{padding:'5%'}}>
        <Avatar></Avatar>
        <Upload></Upload>
        
        Email: {sessionStorage.getItem("email")}
    </div>
    </div> 
  )
}