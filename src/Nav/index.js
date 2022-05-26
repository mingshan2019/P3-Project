import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import {Menu} from 'antd'
import { ProfileOutlined, UserOutlined,LogoutOutlined } from '@ant-design/icons';

export default function Nav() {

  const [Email,getEmail]=useState(sessionStorage.getItem('email')?sessionStorage.getItem('email'):'');

  console.log("Session email is "+ sessionStorage.getItem("email"));

  return (
        <div>
          <Menu mode='horizontal' >
          <Menu.Item>
          <Link to='/Portfolio'>Portfolio</Link>
          </Menu.Item>
          <Menu.Item>
          <Link to='/Blog'>Blog</Link>
          </Menu.Item>
          <Menu.Item>
          <Link to='/QA'>QA</Link>
          </Menu.Item>
          <Menu.SubMenu title={Email.charAt(0)} icon={<UserOutlined />}>
        
          <Menu.Item icon={<ProfileOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item icon={<LogoutOutlined/>}>
            Log off
          </Menu.Item>
          </Menu.SubMenu>
          </Menu>

        </div>
  )
}
